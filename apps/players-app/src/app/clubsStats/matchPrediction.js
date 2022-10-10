import { useEffect, useState } from "react";
import { options } from "./fetchOption";


export function MatchPrediction(props){
    const [homeOdds, setHomeOdds] = useState(0);
    const [drawOdds, setDrawOdds] = useState(0);
    const [awayOdds, setAwayOdds] = useState(0);
    
    let ifFetch = true

    async function fetchData() {
        try{
        const response = await fetch(
          `https://flashscore.p.rapidapi.com/v1/events/odds?locale=en_GB&event_id=${props.match}`,options
        );
        const data = await response.json();
        setHomeOdds(data.DATA[0].PERIODS[0].GROUPS[0].MARKETS[0].ODD_CELL_FIRST.VALUE)      
        setDrawOdds(data.DATA[0].PERIODS[0].GROUPS[0].MARKETS[0].ODD_CELL_SECOND.VALUE)  
        setAwayOdds(data.DATA[0].PERIODS[0].GROUPS[0].MARKETS[0].ODD_CELL_THIRD.VALUE)  
      } catch(error){
          console.log(error)
        }
      }

      useEffect(() => {
        fetchData();
      }, [ifFetch]);

      // * 88 bo 12 procent podatku, nie ma /100 żeby wyszły procenty
      return(
      <>
      <tr>
        <td>Kursy na</td>
        <td>{homeOdds}</td>
        <td>{drawOdds}</td>
        <td>{awayOdds}</td>
      </tr>
      <tr>
        <td>Zysk na</td>
        <td>{(parseFloat(homeOdds)*88/100-1).toFixed(2)}</td>
        <td>{(parseFloat(drawOdds)*88/100-1).toFixed(2)}</td>
        <td>{(parseFloat(awayOdds)*88/100-1).toFixed(2)}</td>
      </tr>
      <tr>
        <td>Prawdopodobieństwo na</td>
        {/* <td>{(1/parseFloat(homeOdds)*88).toFixed(2)}%</td> 
        <td>{(1/parseFloat(drawOdds)*88).toFixed(2)}%</td>
        <td>{(1/parseFloat(awayOdds)*88).toFixed(2)}%</td> */}
        <td>{(1/parseFloat(homeOdds)*100).toFixed(2)}%</td> 
        <td>{(1/parseFloat(drawOdds)*100).toFixed(2)}%</td>
        <td>{(1/parseFloat(awayOdds)*100).toFixed(2)}%</td>
      </tr>
      </>)
}

export default MatchPrediction