import { Data } from "@/@types";
import _ from "lodash";

export const pageDivide = (
  items: Data[],
  pageNumber: number,
  pageSize: number
): Data[] => {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};
