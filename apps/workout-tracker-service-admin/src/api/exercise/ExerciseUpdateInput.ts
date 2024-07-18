import { WorkoutWhereUniqueInput } from "../workout/WorkoutWhereUniqueInput";
import { ProgressUpdateManyWithoutExercisesInput } from "./ProgressUpdateManyWithoutExercisesInput";

export type ExerciseUpdateInput = {
  name?: string | null;
  description?: string | null;
  sets?: number | null;
  reps?: number | null;
  workout?: WorkoutWhereUniqueInput | null;
  progresses?: ProgressUpdateManyWithoutExercisesInput;
};
