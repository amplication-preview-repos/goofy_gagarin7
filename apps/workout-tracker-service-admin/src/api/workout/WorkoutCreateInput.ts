import { ExerciseCreateNestedManyWithoutWorkoutsInput } from "./ExerciseCreateNestedManyWithoutWorkoutsInput";

export type WorkoutCreateInput = {
  name?: string | null;
  description?: string | null;
  exercises?: ExerciseCreateNestedManyWithoutWorkoutsInput;
};
