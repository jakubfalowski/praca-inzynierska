import { useParams } from "react-router-dom";
import FetchResults from "./fetchResults";
import { useState } from "react";
import { getPoints, getHomePoints, getAwayPoints } from "./calculation/getPoints";

import { Grid } from '@mantine/core';
import "./styles/style.scss";
import { convertToDate } from "./calculation/convertToDate";
import { getGoals, getAwayGoals, getHomeGoals } from "./calculation/getGoals";

let matchesCopy = [];

export function Test(){
    const {match,home,away} = useParams();
    const [homeTeamMatches, setHomeTeamMatches] = useState()
    const [awayTeamMatches, setAwayTeamMatches] = useState()

    const getMatches = () => {
        return new Promise ((resolve, reject) => { 
        if(matchesCopy.length < 1){
            FetchResults(home, away).then((value) => {
                matchesCopy = value;
                resolve()
              })
        }
          
        })
      }

    const matchesTab = new Array(0);


    function sortByTime(a, b) {
        if (a.START_TIME === b.START_TIME) {
            return (a.START_TIME < b.START_TIME) ? -1 : 1;
        }
        else {
            return (a.START_TIME > b.START_TIME) ? -1 : 1;
        }
    }

    function initalizeData(){
        if(matchesTab[0] && !homeTeamMatches && !awayTeamMatches){
            setHomeTeamMatches(matchesTab[0][0].sort(sortByTime));
            setAwayTeamMatches(matchesTab[0][1].sort(sortByTime));
        }
    }

    getMatches().then(() => {
        matchesTab.push(matchesCopy)
    }).then(initalizeData)

    
    return(
        <div>
            <Grid className="last-results left-last-results">
                <Grid.Col span={12} className="last-results-box">
                    <h1>Gospodarze</h1>
                    <p>W ostatnich 15 meczach zdobyli { homeTeamMatches && getPoints(homeTeamMatches.slice(0, 15), home, away)} punktów, średnia { homeTeamMatches && (getPoints(homeTeamMatches.slice(0, 15), home, away)/15).toFixed(2)} pkt na mecz, bilans bramkowy {homeTeamMatches && getGoals(homeTeamMatches.slice(0, 15),home,away)}</p>
                    <p>W ostatnich 5 meczach u siebie zdobyli {homeTeamMatches && getHomePoints(homeTeamMatches, home)} punktów, średnia {homeTeamMatches && (getHomePoints(homeTeamMatches, home)/5).toFixed(2)} pkt na mecz bilans, bramkowy {homeTeamMatches && getHomeGoals(homeTeamMatches, home)}</p>
                </Grid.Col>

            {
                homeTeamMatches && homeTeamMatches.slice(0, 15).map(match => (
                    <Grid.Col span={12} className="last-results-box">
                        <img className="clubLogo" src={match.HOME_IMAGES[0]} alt="Team Home" />
                        <img className="clubLogo" src={match.AWAY_IMAGES[0]} alt="Team Away" />
                        <a href="#top">{match.HOME_NAME} {match.HOME_SCORE_CURRENT}-{match.AWAY_SCORE_CURRENT}  ({match.HOME_SCORE_PART_1}-{match.AWAY_SCORE_PART_1})  {match.AWAY_NAME}</a><br />
                        <p>{match.ROUND}</p>
                        <p>{convertToDate(match.START_TIME)}</p>
                    </Grid.Col>
                ))
            }    

            </Grid>

            <Grid className="last-results right-last-results">
                <Grid.Col span={12} className="last-results-box">
                    <h1>Goście</h1>
                    <p>W ostatnich 15 meczach zdobyli { awayTeamMatches && getPoints(awayTeamMatches.slice(0, 15), home, away)} punktów, średnia { awayTeamMatches && (getPoints(awayTeamMatches.slice(0, 15), home, away)/15).toFixed(2)} pkt na mecz, bilans bramkowy {awayTeamMatches && getGoals(awayTeamMatches.slice(0, 15),home,away)}</p>
                    <p>W ostatnich 5 meczach na wyjeździe zdobyli {awayTeamMatches && getAwayPoints(awayTeamMatches, away)} punktów, średnia { awayTeamMatches && (getAwayPoints(awayTeamMatches, away)/5).toFixed(2)} pkt na mecz bilans, bramkowy {awayTeamMatches && getAwayGoals(awayTeamMatches, away)}</p>
                </Grid.Col>
            {
                awayTeamMatches && awayTeamMatches.slice(0, 15).map(match => (
                    <Grid.Col span={12} className="last-results-box">
                        <img className="clubLogo" src={match.HOME_IMAGES[0]} alt="Team Home" />
                        <img className="clubLogo" src={match.AWAY_IMAGES[0]} alt="Team Away" />
                        <a href="#top">{match.HOME_NAME} {match.HOME_SCORE_CURRENT}-{match.AWAY_SCORE_CURRENT} ({match.HOME_SCORE_PART_1}-{match.AWAY_SCORE_PART_1}) {match.AWAY_NAME}</a><br />
                        <p>{match.ROUND}</p>
                        <p>{convertToDate(match.START_TIME)}</p>
                    </Grid.Col>
                ))
            }
            </Grid>
        </div>
        
    )
}

export default Test