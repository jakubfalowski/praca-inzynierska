import Fm from "../fm";

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
                 return {"piłkarz": typeStat[0], "ocena": typeStat[1], "atak": typeStat[2], "obrona":typeStat[3], "technika": typeStat[4], "mentalność": typeStat[5], "fizyczność": typeStat[6], "szybkość":typeStat[7]}
              }));

            res.json(jsonStats);
        }
        else res.json("Błąd zaczytania danych w API")
    }
}