import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Autocomplete, Button, Group } from '@mantine/core';
import { playerTabFunction } from "./fetchData";
import { sortByOverallFifa } from './sort';

export function SearchPlayers(){

    const playerTab = new Array(0);
    const names = new Array(0);
    const ref = useRef(null);
    const navigate = useNavigate();

    playerTabFunction().then((value) => {
        playerTab.push(value)
      }).then(addNamesTab).then(names.sort(sortByOverallFifa))

      function addNamesTab(){
        if(playerTab.length > 0){
          playerTab[0].sort(sortByOverallFifa);
          for(let i = 0; i<426; i++){
              names.push(playerTab[0][i][0])
          }
        } 
      }
      
    return (
        <Group>
            <Autocomplete
            label="Wyszukiwanie szczegółowe piłkarzy"
            placeholder="Wpisz nazwę zawodnika"
            data={names}
            ref={ref}
            />
            <Button variant="gradient" gradient={{ from: 'teal', to: 'violet', deg: 60 }} onClick={()=>{
                navigate(ref.current.value !== '' && ref.current.value);
            }}>Przekieruj</Button>
        </Group>
      );
}
export default SearchPlayers;