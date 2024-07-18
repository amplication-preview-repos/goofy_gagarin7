import { ExerciseWhereUniqueInput } from "../exercise/ExerciseWhereUniqueInput";

export type ProgressUpdateInput = {
  date?: Date | null;
  weight?: number | null;
  notes?: string | null;
  exercise?: ExerciseWhereUniqueInput | null;
};
