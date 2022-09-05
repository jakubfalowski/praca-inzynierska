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


  return (<>
    <table>
      <tr><td>Imie i nazwisko</td><td>Ocena ogólna</td></tr>
      {playersFifa && playersFifa.map(information =>(
        <tr>
          <td>{information.pilkarz}</td>
          <td>{information.ocena}</td>
        </tr>
    ))}</table>
    <table>
      <tr><td>Imie i nazwisko</td><td>Ocena ogólna</td></tr>
      {playersFm && playersFm.map(information =>(
        <tr>
          <td>{information.pilkarz}</td>
          <td>{information.ocena}</td>
        </tr>
    ))}</table></>
  );
}

export default App;
