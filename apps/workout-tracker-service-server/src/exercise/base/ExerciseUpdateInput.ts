/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsInt,
  Min,
  Max,
  ValidateNested,
} from "class-validator";
import { WorkoutWhereUniqueInput } from "../../workout/base/WorkoutWhereUniqueInput";
import { Type } from "class-transformer";
import { ProgressUpdateManyWithoutExercisesInput } from "./ProgressUpdateManyWithoutExercisesInput";

@InputType()
class ExerciseUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  sets?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  reps?: number | null;

  @ApiProperty({
    required: false,
    type: () => WorkoutWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkoutWhereUniqueInput)
  @IsOptional()
  @Field(() => WorkoutWhereUniqueInput, {
    nullable: true,
  })
  workout?: WorkoutWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ProgressUpdateManyWithoutExercisesInput,
  })
  @ValidateNested()
  @Type(() => ProgressUpdateManyWithoutExercisesInput)
  @IsOptional()
  @Field(() => ProgressUpdateManyWithoutExercisesInput, {
    nullable: true,
  })
  progresses?: ProgressUpdateManyWithoutExercisesInput;
}

export { ExerciseUpdateInput as ExerciseUpdateInput };