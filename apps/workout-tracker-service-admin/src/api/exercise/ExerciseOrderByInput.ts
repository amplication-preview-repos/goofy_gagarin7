import { SortOrder } from "../../util/SortOrder";

export type ExerciseOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  sets?: SortOrder;
  reps?: SortOrder;
  workoutId?: SortOrder;
};
