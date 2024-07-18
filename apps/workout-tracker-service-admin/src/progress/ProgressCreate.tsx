import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ExerciseTitle } from "../exercise/ExerciseTitle";

export const ProgressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <NumberInput label="weight" source="weight" />
        <TextInput label="notes" multiline source="notes" />
        <ReferenceInput
          source="exercise.id"
          reference="Exercise"
          label="Exercise"
        >
          <SelectInput optionText={ExerciseTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
