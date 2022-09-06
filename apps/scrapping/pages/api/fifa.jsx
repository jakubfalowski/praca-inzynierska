import { NextApiRequest, NextApiResponse } from "next";
import Fifa from "../fifa";
import dictPlayers from "../dictPlayers";

export default async function FifaAPI(req,res) {
    const results = await Fifa();

    const interval = setInterval(timeToFetch, 1);
    function timeToFetch() {
        if (results[0].length > 645){
            clearInterval(interval);

            const playerStats = results[0].map((row, index) => {
                return results.map((attributes) => {
                  return attributes[index]
                })
              });

              const jsonStats = playerStats.map((typeStat =>{
                  

                return {"piłkarz": dictPlayers(typeStat[0]), "ocena": typeStat[1], "szybkość": typeStat[2], "strzały":typeStat[3], "podania": typeStat[4], "drybling": typeStat[5], "defensywa": typeStat[6], "fizyczność":typeStat[7]}
              }));

            res.json(jsonStats);
        }
        else res.json("Błąd zaczytania danych w API")
    }
}

