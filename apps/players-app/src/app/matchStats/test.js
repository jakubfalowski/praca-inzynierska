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
        if(matchesCopy.length < 1){
            FetchResults(home, away).then((value) => {
                console.log(value)
                matchesCopy = value;
                resolve()
              })
        }
          
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
                homeTeamMatches && homeTeamMatches.map(match => (
                    <p>{match.HOME_PARTICIPANT_NAME_ONE} - {match.AWAY_PARTICIPANT_NAME_ONE}</p>
                ))
            }
        <hr />
            {
                awayTeamMatches && awayTeamMatches.map(match => (
                    <p>{match.HOME_PARTICIPANT_NAME_ONE} - {match.AWAY_PARTICIPANT_NAME_ONE}</p>
                ))
            }
        </div>
        
    )
}

export default Test