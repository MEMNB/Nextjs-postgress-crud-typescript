import { NextApiRequest, NextApiResponse } from "next";
import { conn } from 'src/utils/database';

type Data = {
  message: string;
  time: string;
}

export default async function name (req: NextApiRequest, res: NextApiResponse<Data>) {

  const response = await conn.query('SELECT NOW()');
  
  return res.json({message: "pong", time: response.rows[0].now});
};

