import { ExerciseUpdateManyWithoutWorkoutsInput } from "./ExerciseUpdateManyWithoutWorkoutsInput";

export type WorkoutUpdateInput = {
  name?: string | null;
  description?: string | null;
  exercises?: ExerciseUpdateManyWithoutWorkoutsInput;
};
