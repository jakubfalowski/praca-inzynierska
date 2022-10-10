import { useParams } from "react-router-dom";
import { useState } from "react";

import ClubResults, {team1Matches, team2Matches} from "./clubResults"
import allMatchesPush, {team1Value, team2Value, goals,homeMatches, awayMatches} from "./allMatchesPush";
import './style.css'
import { Table, Button, Collapse, Grid } from '@mantine/core';
import MatchPrediction from "./matchPrediction";
import TableApp from "./tableApp";

    export let homeValue = 0;
    export let awayValue = 0;
    let renderA = 0;
    let renderH = 0;

export function ClubAll(){
    const [openedMyApp, setOpenMyApp] = useState(false);
    const [openedBetApp, setOpenBetApp] = useState(false);
    const {match,home,away} = useParams();

    let textButtonMyApp;
    if(openedBetApp === false) textButtonMyApp = "rozwiń";
    else textButtonMyApp = "zwiń";

    let textButtonBetApp;
    if(openedMyApp === false) textButtonBetApp = "rozwiń";
    else textButtonBetApp = "zwiń";
    

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
    <ClubResults home={home} away={away}/>
    <h2>Na podstawie formy ostatnich meczy</h2>
    <Button onClick={() => setOpenMyApp((o) => !o)}>
        {textButtonMyApp}
      </Button>
    <Collapse in={openedMyApp}>
        <TableApp />
        <h2>Zasada liczenia</h2>
        <Grid grow>
        <Grid.Col span={6}>
            <h3>Łączne punkty gospodarzy {homeValue+team1Value}</h3>
            <h4> u siebie: {homeValue}</h4>
            {homeMatches.slice(homeMatches.length-5,homeMatches.length).map((match, i) =>{
                if(i === 0) renderH += 1;
                if(renderH <= 1) {
                    if(parseInt(match.HOME_SCORE_CURRENT) === parseInt(match.AWAY_SCORE_CURRENT)) homeValue += 1;
                    else if(parseInt(match.HOME_SCORE_CURRENT) > parseInt(match.AWAY_SCORE_CURRENT)) homeValue += 3;
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
      </Collapse>
    <h2>Na podstawie kursów bukmacherskich</h2>
    <Button onClick={() => setOpenBetApp((o) => !o)}>
        {textButtonBetApp}
      </Button>
    <Collapse in={openedBetApp}>
        <Table captionSide="bottom" className="odds">
            <caption>Na podstawie kursów</caption>
            <thead>{td2}</thead>
            <tbody>{row2}</tbody>
        </Table>
    </Collapse>
    </>
    )
}

export default ClubAll