import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExerciseListRelationFilter } from "../exercise/ExerciseListRelationFilter";

export type WorkoutWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  exercises?: ExerciseListRelationFilter;
};
