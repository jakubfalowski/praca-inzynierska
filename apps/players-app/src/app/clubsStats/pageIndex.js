import React, {useEffect, useState} from "react";
import ClubAll from "./clubAll";
import { convertToDate } from "./convertToDate";
import {options} from './fetchOption';
import { Grid } from '@mantine/core';

export let teamH;
export let teamA;

export function PageIndex(){
    const [dataset, setDataset] = useState();
    const [leagueName, setLeagueName] = useState();
    const date = new Date();
    let today = [];
    // for(let i = 0; i < 20; i++){
    //     today[i] = date.getFullYear()+'-'+(date.getMonth()+2)+'-'+(date.getDate()-i);
    // } 
    for(let i = 0; i < 7; i++){
        today[i] = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+(date.getDate()+i);
    } 
    let ifFetch = true;
    
    async function fetchData(query) {
        try{
            const response = await fetch(`https://flashscore.p.rapidapi.com/v1/tournaments/fixtures?tournament_stage_id=${query}&locale=en_GB&page=1`,options);
            const data = await response.json();
            setLeagueName(data.DATA[0].NAME);
            const results = data.DATA[0].EVENTS;
            setDataset(results);
        } catch(error){
          console.log(error)
        }
    }

      useEffect(() => {
        fetchData('4fofM1vn');
      }, [ifFetch]);

    return(
        <>
        <h2 className="leagueName">{leagueName}</h2>
        <Grid grow>
            { dataset !== undefined && dataset.map((data, i) => {
                for(let daysMatch=7; daysMatch>0; daysMatch--){
                    if(convertToDate(data.START_TIME).endsWith(today[daysMatch])){
                        // https://mantine.dev/dates/date-picker/#min-and-max-dates przerobic na to
                        return(
                            <Grid.Col md={4} sm={6} xs={12}>
                                <img className="clubLogo" src={`${data.HOME_IMAGES[0]}`} alt={data.HOME_NAME} /><img src={`${data.AWAY_IMAGES[0]}`} alt={data.AWAY_NAME} /><a href={`/results/${data.EVENT_ID}/${data.HOME_PARTICIPANT_IDS[0]}/${data.AWAY_PARTICIPANT_IDS[0]}`}>{data.HOME_NAME} - {data.AWAY_NAME} <br /></a><p>{convertToDate(data.START_TIME)}</p>
                            </Grid.Col>)
                    }
                }  
            })}
        </Grid>
        </>
    )
}
export default PageIndex