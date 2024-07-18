import { Workout } from "../workout/Workout";
import { Progress } from "../progress/Progress";

export type Exercise = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  sets: number | null;
  reps: number | null;
  workout?: Workout | null;
  progresses?: Array<Progress>;
};
