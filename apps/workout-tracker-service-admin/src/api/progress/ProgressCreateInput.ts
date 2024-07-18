import { ExerciseWhereUniqueInput } from "../exercise/ExerciseWhereUniqueInput";

export type ProgressCreateInput = {
  date?: Date | null;
  weight?: number | null;
  notes?: string | null;
  exercise?: ExerciseWhereUniqueInput | null;
};
