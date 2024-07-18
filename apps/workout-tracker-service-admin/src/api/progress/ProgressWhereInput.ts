import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExerciseWhereUniqueInput } from "../exercise/ExerciseWhereUniqueInput";

export type ProgressWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  weight?: FloatNullableFilter;
  notes?: StringNullableFilter;
  exercise?: ExerciseWhereUniqueInput;
};
