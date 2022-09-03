import { useState } from "react";

export function App() {
  const [info, setInfo] = useState()
  async function fetchData() {
    try{
        const response = await fetch(`http://localhost:3000/api/fifa`);
        const data = await response.json();
        setInfo(data);
    } catch(error){
      console.log(error)
    }
}

fetchData()
  return (
    <table>
      <tr><td>Imie i nazwisko</td><td>Ocena ogólna</td></tr>
      {info && info.map(information =>(
        <tr>
          <td>{information.pilkarz}</td>
          <td>{information.ocena}</td>
        </tr>
    ))}</table>
  );
}

export default App;
