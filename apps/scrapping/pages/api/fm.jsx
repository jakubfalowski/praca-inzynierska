import Fm from "../fm";
import { Fm21 } from "../fm21";

export default async function FmAPI(req,res) {
    const results = await Fm();

    const interval = setInterval(timeToFetch, 1);
    function timeToFetch() {
        if (results[0].length >= 1080){
            clearInterval(interval);

            const playerStats = results[0].map((row, index) => {
                return results.map((attributes) => {
                  return attributes[index]
                })
              });

              const jsonStats = playerStats.map((typeStat =>{
                 return {"name": typeStat[0], "rating": typeStat[1], "attack": typeStat[2], "defensive":typeStat[3], "technique": typeStat[4], "mentality": typeStat[5], "physicality": typeStat[6], "pace":typeStat[7], "club": typeStat[8], "nation": typeStat[9]}
              }));
            res.json(jsonStats);
        }
        else res.json(Fm21);
    }
}