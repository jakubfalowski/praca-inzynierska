import { NextApiRequest, NextApiResponse } from "next";
import Fifa from "../fifa";

export default async function FifaAPI(req,res) {
    const results = await Fifa();

    const interval = setInterval(timeToFetch, 1);
    function timeToFetch() {
        if (results[0].length > 645){
            clearInterval(interval);
            const json = results[0].map((row, index) => {
                return results.map((attributes) => {
                  return attributes[index]
                })
              })
            res.json(json);
        }
    }
}