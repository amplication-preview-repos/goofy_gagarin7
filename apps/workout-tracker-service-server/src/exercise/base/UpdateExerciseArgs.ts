/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExerciseWhereUniqueInput } from "./ExerciseWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ExerciseUpdateInput } from "./ExerciseUpdateInput";

@ArgsType()
class UpdateExerciseArgs {
  @ApiProperty({
    required: true,
    type: () => ExerciseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ExerciseWhereUniqueInput)
  @Field(() => ExerciseWhereUniqueInput, { nullable: false })
  where!: ExerciseWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ExerciseUpdateInput,
  })
  @ValidateNested()
  @Type(() => ExerciseUpdateInput)
  @Field(() => ExerciseUpdateInput, { nullable: false })
  data!: ExerciseUpdateInput;
}

export { UpdateExerciseArgs as UpdateExerciseArgs };