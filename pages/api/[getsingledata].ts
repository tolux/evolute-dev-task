import * as fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

import type { Data } from "@/@types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let query = req.query.getsingledata;
  const data = fs.readFileSync("json/data.json", "utf-8");
  const getSingleData: Data = JSON.parse(data).find(
    ({ id }: Data) => id === Number(query)
  );
  res.status(200).send(getSingleData);
}
