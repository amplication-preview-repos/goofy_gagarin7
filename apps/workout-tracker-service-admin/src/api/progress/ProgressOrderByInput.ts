import { SortOrder } from "../../util/SortOrder";

export type ProgressOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  weight?: SortOrder;
  notes?: SortOrder;
  exerciseId?: SortOrder;
};
