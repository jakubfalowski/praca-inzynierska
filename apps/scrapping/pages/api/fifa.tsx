import { NextApiRequest, NextApiResponse } from "next";
import Fifa from "../fifa";

export default async function FifaAPI(req: NextApiRequest, res: NextApiResponse) {
    const results = await Fifa();
    const interval = setInterval(timeToFetch, 1);
    function timeToFetch() {
        if (results[0].length > 645){
            clearInterval(interval);
            res.json(results);
        }
    }
}