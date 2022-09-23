import { useEffect } from "react";

let ifFetch = true;
export function FetchSofaScore(){

    async function fetchData(query) {
        try{
            const options = {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': '35ffe6e4c5mshe6f63287717ea95p1950a0jsna16c5a14a971',
                  'X-RapidAPI-Host': 'sofascore.p.rapidapi.com'
                }
              };
              const response = await fetch('https://sofascore.p.rapidapi.com/players/get-statistics?playerId=108579&tournamentId=17&seasonId=37036&typ=overall',options);
              const data = await response.json();
              console.log(data)
        } catch(error){
          console.log(error)
        }
    }
    
    useEffect(() => {
        fetchData();
      }, [ifFetch]);
}
export default FetchSofaScore;