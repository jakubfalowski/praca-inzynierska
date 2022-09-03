import { NextApiRequest, NextApiResponse } from "next";
import Fifa from "../fifa";

export default async function FifaAPI(req: NextApiRequest, res: NextApiResponse) {
    const results = await Fifa();
    setTimeout(() => res.json(results), 4000)
    
}