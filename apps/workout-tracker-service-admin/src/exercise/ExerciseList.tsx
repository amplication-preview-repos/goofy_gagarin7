import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WORKOUT_TITLE_FIELD } from "../workout/WorkoutTitle";

export const ExerciseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Exercises"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
