import React, {useState, useEffect} from "react";
import { allMatchesPush, team1Value, team2Value} from "./allMatchesPush";

import {options} from '../matchStats/fetchOption'

export let Home;
export let Away;
export let teamHome;
export let teamAway;
export let team1Matches = [];
export let team2Matches = [];
let renderH = 0;
let renderA = 0;


   export function ClubResults(props){
    
      const [clubs, setClubs] = useState([]);
      const [clubs2, setClubs2] = useState([]);
      const [teamHome, setTeamHome] = useState([]);
      const [teamAway, setTeamAway] = useState([]);
      const ifFetch = true;

      useEffect(() => {
        fetchData(props.home);
        fetchData(props.away);
      }, [ifFetch]);

      teamStrength('home');
      teamStrength('away');  

      async function fetchData(query) {
        try{
        const response = await fetch(
          `https://flashscore.p.rapidapi.com/v1/teams/results?sport_id=1&team_id=${query}&locale=en_GB&page=1`,options
        );
        const data = await response.json();
        const results = data.DATA[0].EVENTS;
        if(query === props.home){
          setClubs(results);
          if(results[0].HOME_PARTICIPANT_IDS[0] === props.home) setTeamHome(results[0].HOME_NAME);
          else setTeamHome(results[0].AWAY_NAME)
        } 
        if(query === props.away) {
          setClubs2(results);
          if(results[0].HOME_PARTICIPANT_IDS[0] === props.away) setTeamAway(results[0].HOME_NAME)
          else setTeamAway(results[0].AWAY_NAME);
        }
        
      } catch(error){
          console.log(error)
        }
      }    

      function teamStrength(team){

        if(team === 'home'){
          clubs.slice(clubs.length-15, clubs.length).map((item, lastMatches) => {
            allMatchesPush(item, lastMatches, props.home, "home");
            renderH += 1;
            if(renderH <= 15) team1Matches.push(item);
          })
          Home = team1Value/*+ homeValue */ // home
          // console.log(Home, team1Value, homeValue);
        }

        if(team === 'away'){
          clubs2.slice(clubs2.length-15, clubs2.length).map((item, lastMatches) => {
            allMatchesPush(item, lastMatches, props.away, "away");
            renderA += 1;
            if(renderA <= 15) team2Matches.push(item);
          })
          Away = team2Value/*+awayValue; */
          // console.log(Away,team2Value, awayValue);
        } 
      }
  }

export default ClubResults;

  