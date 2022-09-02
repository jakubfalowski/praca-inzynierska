import { NextApiRequest, NextApiResponse } from "next";
import Fifa from "../fifa";

export default async function FifaAPI(req: NextApiRequest, res: NextApiResponse) {
    res.json(await (await Fifa()))
    
}