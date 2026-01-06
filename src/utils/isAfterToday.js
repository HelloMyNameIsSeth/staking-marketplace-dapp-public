import { isAfter } from "date-fns";

export const isAfterToday = (end) => {
  const startDate = new Date();
  const endDate = end ? new Date(end) : new Date();
  return isAfter(endDate, startDate);
};
