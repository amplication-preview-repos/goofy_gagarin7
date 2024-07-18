import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { EXERCISE_TITLE_FIELD } from "../exercise/ExerciseTitle";

export const ProgressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
