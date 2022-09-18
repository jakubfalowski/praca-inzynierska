import { Autocomplete } from '@mantine/core';
import { playerTabFunction } from "./fetchData";

export function SearchPlayers(){

    const playerTab = new Array(0);
    const names = new Array(0);

    playerTabFunction().then((value) => {
        playerTab.push(value)
      }).then(addNamesTab)

      function addNamesTab(){
        for(let i = 0; i<426; i++){
            names.push(playerTab[0][i][0])
        }
        console.log(names)
      }

    return (
        <Autocomplete
          label="Your favorite framework/library"
          placeholder="Pick one"
          data={names}
        />
      );
}
export default SearchPlayers;