import { useParams } from "react-router-dom";
import FetchResults from "./fetchResults";
import { allMatchesPush } from "./allMatchesPush"
import { useState } from "react";
import getPlayerTab from "./fetchResults";

import { Grid } from '@mantine/core';
import "./style.scss";

let matchesCopy = [];

export function Test(){
    // const {match,home,away} = useParams();
    // const [homeTeamMatches, setHomeTeamMatches] = useState()
    // const [awayTeamMatches, setAwayTeamMatches] = useState()

    // const getMatches = () => {
    //     return new Promise ((resolve, reject) => { 
    //     if(matchesCopy.length < 1){
    //         FetchResults(home, away).then((value) => {
    //             console.log(value)
    //             matchesCopy = value;
    //             resolve()
    //           })
    //     }
          
    //     })
    //   }

    // const matchesTab = new Array(0);


    // function sortByTime(a, b) {
    //     if (a.START_TIME === b.START_TIME) {
    //         return (a.START_TIME < b.START_TIME) ? -1 : 1;
    //     }
    //     else {
    //         return (a.START_TIME > b.START_TIME) ? -1 : 1;
    //     }
    // }

    // function initalizeData(){
    //     if(matchesTab[0] && !homeTeamMatches && !awayTeamMatches){
    //         setHomeTeamMatches(matchesTab[0][0].sort(sortByTime));
    //         setAwayTeamMatches(matchesTab[0][1].sort(sortByTime));
    //     }
    // }

    // getMatches().then(() => {
    //     matchesTab.push(matchesCopy)
    // }).then(initalizeData)

    // console.log(homeTeamMatches);

    return(
        <div>
            <Grid className="last-results left-last-results">
                <Grid.Col span={12} className="last-results-box">
                    <h1>Gospodarze</h1>
                    <p>W ostatnich 15 meczach zdobyli x punktów, średnia 1,5pkt na mecz, bilans bramkowy xx:xx</p>
                    <p>W ostatnich 5 meczach u siebie zdobyli x punktów, średnia 1,5pkt na mecz bilans, bramkowy xx:xx</p>
                    <p>W ostatnich 5 meczach na wyjeździe zdobyli x punktów, średnia 1,5pkt na mecz, bilans bramkowy xx:xx</p>
                </Grid.Col>
                <Grid.Col span={12} className="last-results-box">
                    <img className="clubLogo" src="https://cdn.freebiesupply.com/logos/large/2x/kks-sandecja-nowy-sacz-logo-png-transparent.png" alt="Team Home" />
                    <img className="clubLogo" src="https://cfsport.pl/wp-content/uploads/2016/10/DUNAJEC-NOWY-S%C4%84CZ_00097-e1478696039643.png" alt="Team Away" />
                    <a href="#top">Sandecja 2-2 Dunajec<br /></a>
                    <p>1 kolejka</p>
                    <p>2022-10-10 19:00</p>
                </Grid.Col>
                <Grid.Col span={12} className="last-results-box">
                    <img className="clubLogo" src="https://cdn.freebiesupply.com/logos/large/2x/kks-sandecja-nowy-sacz-logo-png-transparent.png" alt="Team Home" />
                    <img className="clubLogo" src="https://cfsport.pl/wp-content/uploads/2016/10/DUNAJEC-NOWY-S%C4%84CZ_00097-e1478696039643.png" alt="Team Away" />
                    <a href="#top">Sandecja - Dunajec<br /></a>
                    <p>2 kolejka</p>
                    <p>2022-10-10 19:00</p>
                </Grid.Col>
            </Grid>

            <Grid className="last-results right-last-results">
                <Grid.Col span={12} className="last-results-box">
                    <h1>Goście</h1>
                    <p>W ostatnich 15 meczach zdobyli x punktów, bilans bramkowy xx:xx</p>
                    <p>W ostatnich 5 meczach u siebie zdobyli x punktów, średnia 1,5pkt na mecz bilans, bramkowy xx:xx</p>
                    <p>W ostatnich 5 meczach na wyjeździe zdobyli x punktów, średnia 1,5pkt na mecz, bilans bramkowy xx:xx</p>
                </Grid.Col>
                <Grid.Col span={12} className="last-results-box">
                    <img className="clubLogo" src="https://cdn.freebiesupply.com/logos/large/2x/kks-sandecja-nowy-sacz-logo-png-transparent.png" alt="Team Home" />
                    <img className="clubLogo" src="https://cfsport.pl/wp-content/uploads/2016/10/DUNAJEC-NOWY-S%C4%84CZ_00097-e1478696039643.png" alt="Team Away" />
                    <a href="#top">Sandecja 2-2 Dunajec<br /></a>
                    <p>1 kolejka</p>
                    <p>2022-10-10 19:00</p>
                </Grid.Col>
                <Grid.Col span={12} className="last-results-box">
                    <img className="clubLogo" src="https://cdn.freebiesupply.com/logos/large/2x/kks-sandecja-nowy-sacz-logo-png-transparent.png" alt="Team Home" />
                    <img className="clubLogo" src="https://cfsport.pl/wp-content/uploads/2016/10/DUNAJEC-NOWY-S%C4%84CZ_00097-e1478696039643.png" alt="Team Away" />
                    <a href="#top">Sandecja - Dunajec<br /></a>
                    <p>2 kolejka</p>
                    <p>2022-10-10 19:00</p>
                </Grid.Col>
            </Grid>
            {/* {
                homeTeamMatches && homeTeamMatches.slice(homeTeamMatches.length-15, homeTeamMatches.length).map(match => (
                    <p>{match.HOME_PARTICIPANT_NAME_ONE} - {match.AWAY_PARTICIPANT_NAME_ONE}  {match.START_TIME}</p>
                ))
            }
        <hr />
            {
                awayTeamMatches && awayTeamMatches.slice(awayTeamMatches.length-15, awayTeamMatches.length).map(match => (
                    <p>{match.HOME_PARTICIPANT_NAME_ONE} - {match.AWAY_PARTICIPANT_NAME_ONE} {match.START_TIME}</p>
                ))
            } */}
        </div>
        
    )
}

export default Test