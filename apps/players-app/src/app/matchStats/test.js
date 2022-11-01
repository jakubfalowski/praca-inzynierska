import { useParams } from "react-router-dom";
import FetchResults from "./fetchResults";
import { allMatchesPush } from "./allMatchesPush"
import { useState } from "react";
import getPlayerTab from "./fetchResults";

let matchesCopy = [];

export function Test(){
    const {match,home,away} = useParams();
    const [homeTeamMatches, setHomeTeamMatches] = useState()
    const [awayTeamMatches, setAwayTeamMatches] = useState()

    const getMatches = () => {
        return new Promise ((resolve, reject) => { 
          FetchResults(home, away).then((value) => {
            if(value && matchesCopy.length < 1) matchesCopy = value;
            resolve()
          })
        })
      }

    const matchesTab = new Array(0);

    function initalizeData(){
        if(matchesTab[0] && !homeTeamMatches && !awayTeamMatches){
            setHomeTeamMatches(matchesTab[0][0])
            setAwayTeamMatches(matchesTab[0][1])
        }
    }

    getMatches().then(() => {
        matchesTab.push(matchesCopy)
    }).then(initalizeData)

    return(
        <div>
            {
                homeTeamMatches && homeTeamMatches.map(e => (
                    <p>{e.EVENT_ID} eeeeee</p>
                ))
            }
        </div>
        
    )
}

export default Test