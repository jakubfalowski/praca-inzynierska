import { useState, useEffect } from "react";
import {sortByOverallDifference, sortByOverallFifa, sortByOverallFm, sortByPaceFifa, sortByPaceFm, sortByPaceDifference, sortByPhysicalityDifference, sortByPhysicalityFm, sortByPhysicalityFifa, sortByAttackFifa, sortByAttackFm, sortByAttackDifference, sortByDefensiveFifa, sortByDefensiveFm, sortByDefensiveDifference} from "./sort";

let ifFetch = true;
let a = 0;

export function TableCompare() {
  const [playersFifa, setPlayersFifa] = useState()
  const [playersFm, setPlayersFm] = useState()
  const [dataTest, setData] = useState()
  const [userPlayers, setUserPlayers] = useState(10)

  const [overallActive, setOverallActive] = useState(false);
  const [paceActive, setPaceActive] = useState(false);
  const [physicalityActive, setPhysicalityActive] = useState(false);
  const [attackActive, setAttackActive] = useState(false);
  const [defensiveActive, setDefensiveActive] = useState(false);

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
  console.log(playerTab[0][0])
}, [ifFetch]);

let playerTab = new Array(437);
for(let i=0;i<=437;i++) playerTab[i]=new Array(0);
let a = 0;
let test = false;
let noplayer = [];
let xd = [];

function exists(arr, search) {
  return arr.some(row => row.includes(search));
}

if(playersFifa && playersFm){
  let fifaCopy = playersFifa;
  for(let x = 0; x < 645; x++){
    test = false;
    for(let z = 0; z < 645; z++){
      if(fifaCopy[z].piłkarz === playersFifa[x].piłkarz && fifaCopy[z].ocena === playersFifa[x].ocena && z !== x && !xd.includes(x) && !xd.includes(z)){
          xd.push(z)
         } 
    }

    for(let y = 0; y < 1080; y++){
      if(playersFifa[x].piłkarz === playersFm[y].piłkarz && !xd.includes(x)){
        test = true;
        playerTab[a].push(playersFifa[x].piłkarz)
        playerTab[a].push(playersFifa[x].ocena)
        playerTab[a].push(playersFm[y].ocena*5)
        playerTab[a].push(playersFifa[x].szybkość)
        playerTab[a].push(playersFm[y].szybkość*5)
        playerTab[a].push(playersFifa[x].fizyczność)
        playerTab[a].push(playersFm[y].fizyczność*5)
        playerTab[a].push(playersFifa[x].strzały)
        playerTab[a].push(playersFm[y].atak*5)
        playerTab[a].push(playersFifa[x].defensywa)
        playerTab[a].push(playersFm[y].obrona*5)
        playerTab[a].push(playersFifa[x].drybling)
        playerTab[a].push(playersFifa[x].podania)
        playerTab[a].push(playersFm[y].technika*5)
        playerTab[a].push(playersFm[y].mentalność*5)
        a++;
      } 
    }
    if(test === false) noplayer.push(playersFifa[x].piłkarz)
    if(playerTab[0][0] && !dataTest) setData(playerTab.sort(sortByOverallFifa))
  }
}
console.log(xd)

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
                setData(playerTab.sort(sortByOverallFifa))
                setOverallActive(true)
                setPaceActive(false)
                setPhysicalityActive(false)
                setAttackActive(false)
                setDefensiveActive(false)
              }}>FIFA
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByOverallFm))
                setOverallActive(true)
                setPaceActive(false)
                setPhysicalityActive(false)
                setAttackActive(false)
                setDefensiveActive(false)
              }}>FM
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByOverallDifference))
                setOverallActive(true)
                setPaceActive(false)
                setPhysicalityActive(false)
                setAttackActive(false)
                setDefensiveActive(false)
              }}>Różnica
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByPaceFifa))
                setOverallActive(false)
                setPaceActive(true)
                setPhysicalityActive(false)
                setAttackActive(false)
                setDefensiveActive(false)
              }}>FIFA
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByPaceFm))
                setOverallActive(false)
                setPaceActive(true)
                setPhysicalityActive(false)
                setAttackActive(false)
                setDefensiveActive(false)
              }}>FM
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByPaceDifference))
                setOverallActive(false)
                setPaceActive(true)
                setPhysicalityActive(false)
                setAttackActive(false)
                setDefensiveActive(false)
              }}>Różnica
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByPhysicalityFifa))
                setOverallActive(false)
                setPaceActive(false)
                setPhysicalityActive(true)
                setAttackActive(false)
                setDefensiveActive(false)
              }}>FIFA
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByPhysicalityFm))
                setOverallActive(false)
                setPaceActive(false)
                setPhysicalityActive(true)
                setAttackActive(false)
                setDefensiveActive(false)
              }}>FM
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByPhysicalityDifference))
                setOverallActive(false)
                setPaceActive(false)
                setPhysicalityActive(true)
                setAttackActive(false)
                setDefensiveActive(false)
              }}>Różnica
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByAttackFifa))
                setOverallActive(false)
                setPaceActive(false)
                setPhysicalityActive(false)
                setAttackActive(true)
                setDefensiveActive(false)
              }}>FIFA
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByAttackFm))
                setOverallActive(false)
                setPaceActive(false)
                setPhysicalityActive(false)
                setAttackActive(true)
                setDefensiveActive(false)
              }}>FM
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByAttackDifference))
                setOverallActive(false)
                setPaceActive(false)
                setPhysicalityActive(false)
                setAttackActive(true)
                setDefensiveActive(false)
              }}>Różnica
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByDefensiveFifa))
                setOverallActive(false)
                setPaceActive(false)
                setPhysicalityActive(false)
                setAttackActive(false)
                setDefensiveActive(true)
              }}>FIFA
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByDefensiveFm))
                setOverallActive(false)
                setPaceActive(false)
                setPhysicalityActive(false)
                setAttackActive(false)
                setDefensiveActive(true)
              }}>FM
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByDefensiveDifference))
                setOverallActive(false)
                setPaceActive(false)
                setPhysicalityActive(false)
                setAttackActive(false)
                setDefensiveActive(true)
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
      {dataTest && 
      dataTest.map((player, index) =>
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
        
    })}</tbody></table>
    </>
  );
}

export default TableCompare;
