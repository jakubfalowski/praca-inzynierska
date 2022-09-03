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
console.log(info[0])
fetchData()
  return (
    <div>a {info && info.map(information =>{
      <p>{information}</p>
    })}</div>
  );
}

export default App;
