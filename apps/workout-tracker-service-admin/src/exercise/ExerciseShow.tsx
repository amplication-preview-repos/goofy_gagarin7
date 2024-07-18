import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EXERCISE_TITLE_FIELD } from "./ExerciseTitle";
import { WORKOUT_TITLE_FIELD } from "../workout/WorkoutTitle";

export const ExerciseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <TextField label="sets" source="sets" />
        <TextField label="reps" source="reps" />
        <ReferenceField label="Workout" source="workout.id" reference="Workout">
          <TextField source={WORKOUT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Progress"
          target="exerciseId"
          label="Progresses"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="date" source="date" />
            <TextField label="weight" source="weight" />
            <TextField label="notes" source="notes" />
            <ReferenceField
              label="Exercise"
              source="exercise.id"
              reference="Exercise"
            >
              <TextField source={EXERCISE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
