import { useState, useEffect } from "react";
let ifFetch = true;

export function App() {
  const [playersFifa, setPlayersFifa] = useState()
  const [playersFm, setPlayersFm] = useState()
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
  console.log(noplayer)
  console.log(playerTab)
}




  return (
    <>
    <h1>Porównanie statystyk piłkarzy z Premier League w Fifie, Football Managerze i SofaScore (soon), z webscrappingu(cheerio) i własnych API(next.js)</h1>
    <table border="red 1px solid">
      <tbody>
        <tr>
          <td rowSpan={2}>Imie i nazwisko</td>
          <td>FIFA</td>
          <td>FM</td>
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
          <td colSpan={2}>Ocena ogólna</td>
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
      {playerTab && playerTab.map(player =>(
        <tr>
          <td>{player[0]}</td>
          <td>{player[1]}</td>
          <td>{player[2]}</td>
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
    ))}</table></>
  );
}

export default App;
