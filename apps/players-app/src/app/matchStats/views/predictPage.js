import { useState } from "react";
import { useParams } from "react-router-dom";

import { Grid } from '@mantine/core';

import FetchResults from "../fetchResults";

import { getPoints, getHomePoints, getAwayPoints } from "../calculation/getPoints";
import { getGoals, getAwayGoals, getHomeGoals } from "../calculation/getGoals";
import { convertToDate } from "../calculation/convertToDate";
import { sortByTime } from "../calculation/sortByTime";
import { getTeamStrength } from "../calculation/getTeamStrength";
import { getWinner } from "../calculation/getWinner";

import "../styles/style.scss";


let matchesCopy = [];

export function PredictPage(){
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

    function initalizeData(){
        if(matchesTab[0] && !homeTeamMatches && !awayTeamMatches){
            setHomeTeamMatches(matchesTab[0][0].sort(sortByTime));
            setAwayTeamMatches(matchesTab[0][1].sort(sortByTime));
        }
    }

    let XD1;
    let XD2;
    if(homeTeamMatches && awayTeamMatches){
        XD1 = getTeamStrength(homeTeamMatches.slice(0, 15), home, true);
        XD2 = getTeamStrength(awayTeamMatches.slice(0, 15), away, false)
    }

    getMatches().then(() => {
        matchesTab.push(matchesCopy)
    }).then(initalizeData)

    
    return(
        <div>
            <h1>Gospodarze: {XD1 && XD2 && getWinner(XD1, XD2).home}</h1>
            <h1>Remis: {XD1 && XD2 && getWinner(XD1, XD2).draw}</h1>
            <h1>Goście: {XD1 && XD2 && getWinner(XD1, XD2).away}</h1>
            <Grid className="last-results left-last-results">
                <Grid.Col span={12} className="last-results-box">
                    <h1>Gospodarze</h1>
                    <p>W ostatnich 15 meczach zdobyli { homeTeamMatches && getPoints(homeTeamMatches.slice(0, 15), home, away)} punktów, średnia { homeTeamMatches && (getPoints(homeTeamMatches.slice(0, 15), home, away)/15).toFixed(2)} pkt na mecz, bilans bramkowy {homeTeamMatches && getGoals(homeTeamMatches.slice(0, 15),home,away)}</p>
                    <p>W ostatnich 5 meczach u siebie zdobyli {homeTeamMatches && getHomePoints(homeTeamMatches, home)} punktów, średnia {homeTeamMatches && (getHomePoints(homeTeamMatches, home)/5).toFixed(2)} pkt na mecz bilans, bramkowy {homeTeamMatches && getHomeGoals(homeTeamMatches, home)}</p>
                    <p>Siła tej drużyny na podstawie formy i gry u siebie: {homeTeamMatches && getTeamStrength(homeTeamMatches.slice(0, 15), home, true)}</p>
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
                    <p>Siła tej drużyny na podstawie formy i gry na wyjeździe: {awayTeamMatches && getTeamStrength(awayTeamMatches.slice(0, 15), away, false)}</p>
                    <p>Procent na wygraną </p>
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

export default PredictPage;