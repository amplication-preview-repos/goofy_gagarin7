import { Exercise } from "../exercise/Exercise";

export type Progress = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  weight: number | null;
  notes: string | null;
  exercise?: Exercise | null;
};
