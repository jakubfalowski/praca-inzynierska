import { useParams } from "react-router-dom";
import React, {useState, useEffect} from "react";

import ClubResults, {team1Matches, team2Matches} from "./clubResults"
import './style.scss'
import { Table, Button, Collapse, Grid } from '@mantine/core';
import MatchPrediction from "./matchPrediction";
import { calculate1x2 } from "./calculate1x2";


    let Home;
    let Away;
    let homeValue = 0;
    let awayValue = 0;
    let renderA = 0;
    let renderH = 0;
    let homeMatches = [];
    let awayMatches = [];
    let multiplier = 1;
    let team1Value = 0;
    let team2Value = 0;

    let goals = 0;
    let team1;
    let team2;

export function ClubAll(){
    const {match,home,away} = useParams();
    const [clubs, setClubs] = useState([]);
    const [clubs2, setClubs2] = useState([]);
    const [teamHome, setTeamHome] = useState([]);
    const [teamAway, setTeamAway] = useState([]);
    const ifFetch = true;

      teamStrength('home');
      teamStrength('away');  


    

      function teamStrength(team){

        if(team === 'home'){
          clubs.slice(clubs.length-15, clubs.length).map((item, lastMatches) => {
            // allMatchesPush(item, lastMatches, home, "home");
            renderH += 1;
            if(renderH <= 15) team1Matches.push(item);
          })
          Home = team1Value+homeValue // home
          // console.log(Home, team1Value, homeValue);
        }

        if(team === 'away'){
          clubs2.slice(clubs2.length-15, clubs2.length).map((item, lastMatches) => {
            // allMatchesPush(item, lastMatches, away, "away");
            renderA += 1;
            if(renderA <= 15) team2Matches.push(item);
          })
          Away = team2Value+awayValue;
          // console.log(Away,team2Value, awayValue);
        } 
      }

    const td2 =(
        <tr>
            <td> </td>
            <td>Gospodarze</td>
            <td>Remis</td>
            <td>Goście</td>
        </tr>
    )

    const row2 = (<MatchPrediction match={match}/>)
    return(
    <>
    <h2>{teamHome} - {teamAway}</h2>
    <ClubResults/>
    <h2>Na podstawie formy ostatnich meczy</h2>
    <Table captionSide="bottom" className="myScript">
    <caption>Moja aplikacja</caption>
    <thead>
    <tr>
      <td>Dokładny wynik</td>
      <td>Gospodarze</td>
      <td>Remis</td>
      <td>Goście</td>
    </tr>
    </thead>
    <tbody>{calculate1x2(Math.round(Home/(Home+Away)*100),Math.round(Away/(Home+Away)*100), goals)}</tbody>
</Table>
        <h2>Zasada liczenia</h2>
        <Grid grow>
        <Grid.Col span={6}>
            <h3>Łączne punkty gospodarzy {homeValue+team1Value}</h3>
            <h4> u siebie: {homeValue}</h4>
            {homeMatches.length > 0  && homeMatches.slice(homeMatches.length-5,homeMatches.length).map((match, i) =>{
                console.log(homeValue, renderH)
                if(i === 0) renderH += 1;
                if(renderH <= 1) {
                    if(parseInt(match.HOME_SCORE_CURRENT) === parseInt(match.AWAY_SCORE_CURRENT)){
                        console.log("hv+1")
                        homeValue += 1;
                    } 
                    else if(parseInt(match.HOME_SCORE_CURRENT) > parseInt(match.AWAY_SCORE_CURRENT)){
                        console.log("hv+3")
                        homeValue += 3;
                    } 
                }
                return(<p><i>{match.HOME_NAME}</i> {match.HOME_SCORE_CURRENT}:{match.AWAY_SCORE_CURRENT} {match.AWAY_NAME} </p>)
                
            })
            }
            <h4> forma: {team1Value}</h4>
            {team1Matches.map(match => (
                <p>{match.HOME_NAME} {match.HOME_SCORE_CURRENT}:{match.AWAY_SCORE_CURRENT} {match.AWAY_NAME}</p>
            ))}
        </Grid.Col>
        <Grid.Col span={6}>
            <h3>Łączne punkty gości {awayValue+team2Value}</h3>
            <h4>na wyjeździe: {awayValue}</h4>
            {awayMatches.slice(awayMatches.length-5, awayMatches.length).map((match, i) =>{
                if(i === 0) renderA +=1;
                if(renderA <= 1) {
                    if(parseInt(match.HOME_SCORE_CURRENT) === parseInt(match.AWAY_SCORE_CURRENT)) awayValue += 1;
                    else if(parseInt(match.HOME_SCORE_CURRENT) < parseInt(match.AWAY_SCORE_CURRENT)) awayValue += 3;
                }
                return(<p>{match.HOME_NAME} {match.HOME_SCORE_CURRENT}:{match.AWAY_SCORE_CURRENT} <i>{match.AWAY_NAME}</i> </p>) 
            })
            }
            <h4> forma: {team2Value}</h4>
            {team2Matches.map(match => (
                <p>{match.HOME_NAME} {match.HOME_SCORE_CURRENT}:{match.AWAY_SCORE_CURRENT} {match.AWAY_NAME}</p>
            ))}
        </Grid.Col>
        </Grid>
        <p>Łaczna liczba goli obydwu drużyn w ostatnich 15 meczach: {goals}</p>
    <h2>Na podstawie kursów bukmacherskich</h2>
        <Table captionSide="bottom" className="odds">
            <caption>Na podstawie kursów</caption>
            <thead>{td2}</thead>
            <tbody>{row2}</tbody>
        </Table>
    </>
    )
}

export default ClubAll