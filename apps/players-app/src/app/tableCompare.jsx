import { useState, useEffect } from "react";
import { sortByOverallDifference, sortByOverallFifa, sortByOverallFm, sortByPaceFifa, sortByPaceFm, sortByPaceDifference, sortByPhysicalityDifference, sortByPhysicalityFm, sortByPhysicalityFifa, sortByAttackFifa, sortByAttackFm, sortByAttackDifference, sortByDefensiveFifa, sortByDefensiveFm, sortByDefensiveDifference } from "./sort";

export function TableCompare() {
  const [playersFifa, setPlayersFifa] = useState()
  const [playersFm, setPlayersFm] = useState()
  const [playersData, setData] = useState()
  const [userPlayers, setUserPlayers] = useState(10)

  const [overallActive, setOverallActive] = useState(false);
  const [paceActive, setPaceActive] = useState(false);
  const [physicalityActive, setPhysicalityActive] = useState(false);
  const [attackActive, setAttackActive] = useState(false);
  const [defensiveActive, setDefensiveActive] = useState(false);

  let ifFetch = true;

  async function fetchFifa() {
    try{
        const response = await fetch(`http://localhost:3000/api/fifa`);
        const data = await response.json();
        setPlayersFifa(data);
    } catch(error){
      console.log(error)
    }
}
async function fetchFm() {
  try{
      const response = await fetch(`http://localhost:3000/api/fm`);
      const data = await response.json();
      setPlayersFm(data);
  } catch(error){
    console.log(error)
  }
}

useEffect(() => {
  fetchFifa();
  fetchFm();
}, [ifFetch]);

let playerTab; 

if(playersFifa && playersFm){

  playerTab = new Array(437);
  for(let i=0;i<=437;i++) playerTab[i]=new Array(0);

  let doubleSource = false;
  let doubleNameTab = [];
  let fifaCopy = playersFifa;

  for(let indexFifa = 0; indexFifa < 645; indexFifa++){
    for(let indexCopyFifa = 0; indexCopyFifa < 645; indexCopyFifa++){
      if(fifaCopy[indexCopyFifa].name === playersFifa[indexFifa].name && fifaCopy[indexCopyFifa].rating === playersFifa[indexFifa].rating && indexCopyFifa !== indexFifa && !doubleNameTab.includes(indexFifa) && !doubleNameTab.includes(indexCopyFifa)){
          doubleNameTab.push(indexCopyFifa)
         } 
    }
    
    doubleSource = false;
    let indexPlayerTab = 0;

    for(let indexFm = 0; indexFm < 1080; indexFm++){
      if(playersFifa[indexFifa].name === playersFm[indexFm].name && !doubleNameTab.includes(indexFifa)){
        doubleSource = true;
        playerTab[indexPlayerTab].push(playersFifa[indexFifa].name)
        playerTab[indexPlayerTab].push(playersFifa[indexFifa].rating)
        playerTab[indexPlayerTab].push(playersFm[indexFm].rating*5)
        playerTab[indexPlayerTab].push(playersFifa[indexFifa].pace)
        playerTab[indexPlayerTab].push(playersFm[indexFm].pace*5)
        playerTab[indexPlayerTab].push(playersFifa[indexFifa].physicality)
        playerTab[indexPlayerTab].push(playersFm[indexFm].physicality*5)
        playerTab[indexPlayerTab].push(playersFifa[indexFifa].shots)
        playerTab[indexPlayerTab].push(playersFm[indexFm].attack*5)
        playerTab[indexPlayerTab].push(playersFifa[indexFifa].defensive)
        playerTab[indexPlayerTab].push(playersFm[indexFm].defensive*5)
        playerTab[indexPlayerTab].push(playersFifa[indexFifa].dribble)
        playerTab[indexPlayerTab].push(playersFifa[indexFifa].pass)
        playerTab[indexPlayerTab].push(playersFm[indexFm].technique*5)
        playerTab[indexPlayerTab].push(playersFm[indexFm].mentality*5)
        indexPlayerTab++;
      } 
    }
    
    let playerOneSourceTab = [];

    if(doubleSource === false) playerOneSourceTab.push(playersFifa[indexFifa].name)
    if(playerTab[0][0] && !playersData) setData(playerTab.sort(sortByOverallFifa))
  }
}

  return (
    <>
    <input
      type="number"
      min="5"
      max="50"
      value={userPlayers}
      onChange={(e) => setUserPlayers(e.target.valueAsNumber)}
    />
    <table border="red 1px solid">
      <thead>
        <tr>
          <td rowSpan={2}>Imie i nazwisko</td>
          <td>
            <button onClick={() => {
                if(playerTab){
                  setData(playerTab.sort(sortByOverallFifa))
                  setOverallActive(true)
                  setPaceActive(false)
                  setPhysicalityActive(false)
                  setAttackActive(false)
                  setDefensiveActive(false)
                }
                
              }}>FIFA
            </button>
          </td>
          <td>
            <button onClick={() => {
                if(playerTab){
                  setData(playerTab.sort(sortByOverallFm))
                  setOverallActive(true)
                  setPaceActive(false)
                  setPhysicalityActive(false)
                  setAttackActive(false)
                  setDefensiveActive(false)
                }
              }}>FM
            </button>
          </td>
          <td>
            <button onClick={() => {
                if(playerTab){
                  setData(playerTab.sort(sortByOverallDifference))
                  setOverallActive(true)
                  setPaceActive(false)
                  setPhysicalityActive(false)
                  setAttackActive(false)
                  setDefensiveActive(false)
                }
              }}>Różnica
            </button>
          </td>
          <td>
            <button onClick={() => {
                if(playerTab){
                  setData(playerTab.sort(sortByPaceFifa))
                  setOverallActive(false)
                  setPaceActive(true)
                  setPhysicalityActive(false)
                  setAttackActive(false)
                  setDefensiveActive(false)
                }
              }}>FIFA
            </button>
          </td>
          <td>
            <button onClick={() => {
                if(playerTab){
                  setData(playerTab.sort(sortByPaceFm))
                  setOverallActive(false)
                  setPaceActive(true)
                  setPhysicalityActive(false)
                  setAttackActive(false)
                  setDefensiveActive(false)
                }
              }}>FM
            </button>
          </td>
          <td>
            <button onClick={() => {
                if(playerTab){
                  setData(playerTab.sort(sortByPaceDifference))
                  setOverallActive(false)
                  setPaceActive(true)
                  setPhysicalityActive(false)
                  setAttackActive(false)
                  setDefensiveActive(false)
                }
              }}>Różnica
            </button>
          </td>
          <td>
            <button onClick={() => {
                if(playerTab){
                  setData(playerTab.sort(sortByPhysicalityFifa))
                  setOverallActive(false)
                  setPaceActive(false)
                  setPhysicalityActive(true)
                  setAttackActive(false)
                  setDefensiveActive(false)
                }
              }}>FIFA
            </button>
          </td>
          <td>
            <button onClick={() => {
                if(playerTab){
                  setData(playerTab.sort(sortByPhysicalityFm))
                  setOverallActive(false)
                  setPaceActive(false)
                  setPhysicalityActive(true)
                  setAttackActive(false)
                  setDefensiveActive(false)
                }
              }}>FM
            </button>
          </td>
          <td>
            <button onClick={() => {
                if(playerTab){
                  setData(playerTab.sort(sortByPhysicalityDifference))
                  setOverallActive(false)
                  setPaceActive(false)
                  setPhysicalityActive(true)
                  setAttackActive(false)
                  setDefensiveActive(false)
                }
              }}>Różnica
            </button>
          </td>
          <td>
            <button onClick={() => {
                if(playerTab){
                  setData(playerTab.sort(sortByAttackFifa))
                  setOverallActive(false)
                  setPaceActive(false)
                  setPhysicalityActive(false)
                  setAttackActive(true)
                  setDefensiveActive(false)
                }
              }}>FIFA
            </button>
          </td>
          <td>
            <button onClick={() => {
                if(playerTab){
                  setData(playerTab.sort(sortByAttackFm))
                  setOverallActive(false)
                  setPaceActive(false)
                  setPhysicalityActive(false)
                  setAttackActive(true)
                  setDefensiveActive(false)
                }
              }}>FM
            </button>
          </td>
          <td>
            <button onClick={() => {
                if(playerTab){
                  setData(playerTab.sort(sortByAttackDifference))
                  setOverallActive(false)
                  setPaceActive(false)
                  setPhysicalityActive(false)
                  setAttackActive(true)
                  setDefensiveActive(false)
                }
              }}>Różnica
            </button>
          </td>
          <td>
            <button onClick={() => {
                if(playerTab){
                  setData(playerTab.sort(sortByDefensiveFifa))
                  setOverallActive(false)
                  setPaceActive(false)
                  setPhysicalityActive(false)
                  setAttackActive(false)
                  setDefensiveActive(true)
                }
              }}>FIFA
            </button>
          </td>
          <td>
            <button onClick={() => {
                if(playerTab){
                  setData(playerTab.sort(sortByDefensiveFm))
                  setOverallActive(false)
                  setPaceActive(false)
                  setPhysicalityActive(false)
                  setAttackActive(false)
                  setDefensiveActive(true)
                }
              }}>FM
            </button>
          </td>
          <td>
            <button onClick={() => {
                if(playerTab){
                  setData(playerTab.sort(sortByDefensiveDifference))
                  setOverallActive(false)
                  setPaceActive(false)
                  setPhysicalityActive(false)
                  setAttackActive(false)
                  setDefensiveActive(true)
                }
              }}>Różnica
            </button>
          </td>
        </tr>
        <tr>
          <td colSpan={3}>Ocena ogólna</td>
          <td colSpan={3}>Szybkość</td>
          <td colSpan={3}>Fizyczność</td>
          <td colSpan={3}>Atak</td>
          <td colSpan={3}>Obrona</td>
        </tr>
      </thead>
      <tbody>
      {playersData ? 
      playersData.map((player, index) =>
        {
          if(index < userPlayers) return(
            <tr>
              <td>{player[0]}</td>
              <td className={overallActive ? 'active' : ''}>{player[1]}</td>
              <td className={overallActive ? 'active' : ''}>{player[2]}</td>
              <td className={overallActive ? 'active' : ''}>{Math.abs(parseInt(player[1]) - parseInt(player[2]))}</td>
              <td className={paceActive ? 'active' : ''}>{player[3]}</td>
              <td className={paceActive ? 'active' : ''}>{player[4]}</td>
              <td className={paceActive ? 'active' : ''}>{Math.abs(parseInt(player[3]) - parseInt(player[4]))}</td>
              <td className={physicalityActive ? 'active' : ''}>{player[5]}</td>
              <td className={physicalityActive ? 'active' : ''}>{player[6]}</td>
              <td className={physicalityActive ? 'active' : ''}>{Math.abs(parseInt(player[5]) - parseInt(player[6]))}</td>
              <td className={attackActive ? 'active' : ''}>{player[7]}</td>
              <td className={attackActive ? 'active' : ''}>{player[8]}</td>
              <td className={attackActive ? 'active' : ''}>{Math.abs(parseInt(player[7]) - parseInt(player[8]))}</td>
              <td className={defensiveActive ? 'active' : ''}>{player[9]}</td>
              <td className={defensiveActive ? 'active' : ''}>{player[10]}</td>
              <td className={defensiveActive ? 'active' : ''}>{Math.abs(parseInt(player[9]) - parseInt(player[10]))}</td>
            </tr>
          )
        
    }): <tr><td colSpan="16">Brak wyników pobranych z API</td></tr>}</tbody></table>
    </>
  );
}

export default TableCompare;
