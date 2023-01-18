import type { Data } from "@/@types";
import * as fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const data = fs.readFileSync("json/data.json", "utf-8");
  res.status(200).json(JSON.parse(data));
}
