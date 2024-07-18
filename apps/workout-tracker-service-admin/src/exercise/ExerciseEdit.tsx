import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { WorkoutTitle } from "../workout/WorkoutTitle";
import { ProgressTitle } from "../progress/ProgressTitle";

export const ExerciseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="sets" source="sets" />
        <NumberInput step={1} label="reps" source="reps" />
        <ReferenceInput source="workout.id" reference="Workout" label="Workout">
          <SelectInput optionText={WorkoutTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="progresses"
          reference="Progress"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProgressTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
