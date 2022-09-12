import { useState, useEffect } from "react";
import {sortByOverallDifference, sortByOverallFifa, sortByOverallFm} from "./sort";

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

let previousOverall = 100;
let amountBetter = 0;
let amountSame = 0;
let amountWorse = 0;

let amount;

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
          <td>FIFA</td>
          <td>FM</td>
          <td>FIFA</td>
          <td>FM</td>
          <td>FIFA</td>
          <td>FM</td>
          <td>FIFA</td>
          <td>FM</td>
          <td colSpan={2}>FIFA</td>
          <td>FM</td>
          <td>FM</td>
        </tr>
        <tr>
          <td colSpan={3}>Ocena ogólna</td>
          <td colSpan={2}>Szybkość</td>
          <td colSpan={2}>Fizyczność</td>
          <td colSpan={2}>Atak</td>
          <td colSpan={2}>Obrona</td>
          <td>Drybling</td>
          <td>Podania</td>
          <td>Technika</td>
          <td>Mentalność</td>
        </tr>
      </tbody>
      {dataTest && 
      dataTest.map((player, index) =>
        {
          if(player[1] === previousOverall){
            amountSame += 1;
            amount = index-amountSame
          } 
          else{
            amount = index;
            amountSame = 0;
          }
          previousOverall = player[1]

          if(index < userPlayers) return(
            <tr>
              <td>{player[0]}</td>
              <td>
                {player[1]}
                lepszy niż {(100-amount/436*100).toFixed(2)}
              </td>
              <td>{player[2]}</td>
              <td>{Math.abs(parseInt(player[1]) - parseInt(player[2]))}</td>
              <td>{player[3]}</td>
              <td>{player[4]}</td>
              <td>{player[5]}</td>
              <td>{player[6]}</td>
              <td>{player[7]}</td>
              <td>{player[8]}</td>
              <td>{player[9]}</td>
              <td>{player[10]}</td>
              <td>{player[11]}</td>
              <td>{player[12]}</td>
              <td>{player[13]}</td>
              <td>{player[14]}</td>
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
