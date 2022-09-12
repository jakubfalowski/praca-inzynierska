import { useState, useEffect } from "react";
import {sortByOverallDifference, sortByOverallFifa, sortByOverallFm, sortByPaceFifa, sortByPaceFm, sortByPaceDifference, sortByPhysicalityDifference, sortByPhysicalityFm, sortByPhysicalityFifa, sortByAttackFifa, sortByAttackFm, sortByAttackDifference, sortByDefensiveFifa, sortByDefensiveFm, sortByDefensiveDifference} from "./sort";

let ifFetch = true;

export function App() {
  const [playersFifa, setPlayersFifa] = useState()
  const [playersFm, setPlayersFm] = useState()
  const [dataTest, setData] = useState()
  const [userPlayers, setUserPlayers] = useState(10)

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

let playerTab = new Array(437);
for(let i=0;i<=437;i++) playerTab[i]=new Array(0);
let a = 0;
let test = false;
let noplayer = [];

if(playersFifa && playersFm){
  for(let x = 0; x < 645; x++){
    test = false;
    for(let y = 0; y < 1080; y++){
      if(playersFifa[x].piłkarz === playersFm[y].piłkarz){
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
  }
}

  return (
    <>
    <h1>Porównanie statystyk piłkarzy z Premier League w Fifie, Football Managerze i SofaScore (soon), z webscrappingu(cheerio) i własnych API(next.js)</h1>
    <table border="red 1px solid">
      <tbody>
        <tr>
          <td rowSpan={2}>Imie i nazwisko</td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByOverallFifa))
              }}>FIFA
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByOverallFm))
              }}>FM
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByOverallDifference))
              }}>Różnica
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByPaceFifa))
              }}>FIFA
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByPaceFm))
              }}>FM
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByPaceDifference))
              }}>Różnica
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByPhysicalityFifa))
              }}>FIFA
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByPhysicalityFm))
              }}>FM
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByPhysicalityDifference))
              }}>Różnica
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByAttackFifa))
              }}>FIFA
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByAttackFm))
              }}>FM
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByAttackDifference))
              }}>Różnica
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByDefensiveFifa))
              }}>FIFA
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByDefensiveFm))
              }}>FM
            </button>
          </td>
          <td>
            <button onClick={() => {
                setData(playerTab.sort(sortByDefensiveDifference))
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
      </tbody>
      {dataTest && 
      dataTest.map((player, index) =>
        {
          if(index < userPlayers) return(
            <tr>
              <td>{player[0]}</td>
              <td>
                {player[1]}
              </td>
              <td>{player[2]}</td>
              <td>{Math.abs(parseInt(player[1]) - parseInt(player[2]))}</td>
              <td>{player[3]}</td>
              <td>{player[4]}</td>
              <td>{Math.abs(parseInt(player[3]) - parseInt(player[4]))}</td>
              <td>{player[5]}</td>
              <td>{player[6]}</td>
              <td>{Math.abs(parseInt(player[5]) - parseInt(player[6]))}</td>
              <td>{player[7]}</td>
              <td>{player[8]}</td>
              <td>{Math.abs(parseInt(player[7]) - parseInt(player[8]))}</td>
              <td>{player[9]}</td>
              <td>{player[10]}</td>
              <td>{Math.abs(parseInt(player[9]) - parseInt(player[10]))}</td>
            </tr>
          )
        
    })}</table>
    <input
      type="number"
      min="5"
      max="50"
      value={userPlayers}
      onChange={(e) => setUserPlayers(e.target.valueAsNumber)}
    />
    
    </>
  );
}

export default App;
