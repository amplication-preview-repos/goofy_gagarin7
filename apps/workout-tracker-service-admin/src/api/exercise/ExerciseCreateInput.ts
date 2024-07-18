import { WorkoutWhereUniqueInput } from "../workout/WorkoutWhereUniqueInput";
import { ProgressCreateNestedManyWithoutExercisesInput } from "./ProgressCreateNestedManyWithoutExercisesInput";

export type ExerciseCreateInput = {
  name?: string | null;
  description?: string | null;
  sets?: number | null;
  reps?: number | null;
  workout?: WorkoutWhereUniqueInput | null;
  progresses?: ProgressCreateNestedManyWithoutExercisesInput;
};
