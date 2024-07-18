import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { WorkoutWhereUniqueInput } from "../workout/WorkoutWhereUniqueInput";
import { ProgressListRelationFilter } from "../progress/ProgressListRelationFilter";

export type ExerciseWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  sets?: IntNullableFilter;
  reps?: IntNullableFilter;
  workout?: WorkoutWhereUniqueInput;
  progresses?: ProgressListRelationFilter;
};
