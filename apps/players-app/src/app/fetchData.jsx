export const playersFifaFunction = async () => {
  try{
      const response = await fetch(`http://localhost:3000/api/fifa`);
      const data = await response.json();
      return data;
  } catch(error){
    console.log(error)
  }
}

export const playersFmFunction = async () => {
  try{
      const response = await fetch(`http://localhost:3000/api/fm`);
      const data = await response.json();
      return data;
  } catch(error){
    console.log(error)
  }
}

