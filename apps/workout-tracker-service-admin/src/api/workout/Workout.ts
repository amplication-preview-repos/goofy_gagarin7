import { Exercise } from "../exercise/Exercise";

export type Workout = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  exercises?: Array<Exercise>;
};
