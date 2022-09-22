import {useParams } from 'react-router-dom';
import { useState } from 'react';
import { playerTabFunction } from './fetchData';
import './style.css'

let render = 0;

export function AdvancedPlayer(){

    const [data, setData] = useState();
    let { name } = useParams();

    const playerTab = new Array(0);
    
    function setPlayer(){
        if(playerTab){
            for(let indexOfPlayer = 0; indexOfPlayer < playerTab[0].length; indexOfPlayer++){
                if(playerTab[0][indexOfPlayer][0] === name) setData(playerTab[0][indexOfPlayer])
            }
        }
        else console.log("error")
        
    }
    if(render < 2){
        playerTabFunction().then((value) => {
            playerTab.push(value)
        }).then(setPlayer);
        render++
    }
    

    return(
        <div>
            { data &&
            <>
                <h1> Nazwa zawodnika: {data[0]}</h1>
                <h2> Klub: {data[15]}</h2>
                <h2> Narodowość: {data[16]}</h2>
                <h4> Overall w Fifie: <div className={parseInt(data[1]) > parseInt(data[2]) ? 'ratingBox better': 'ratingBox worse'}>{data[1]}</div></h4>
                <h4> Overall w Football Managerze: <div className={parseInt(data[2]) > parseInt(data[1]) ? 'ratingBox better': 'ratingBox worse'}>{data[2]}</div></h4>
                <h4> Szybkość w Fifie: <div className={parseInt(data[3]) > parseInt(data[4]) ? 'ratingBox better': 'ratingBox worse'}>{data[3]}</div></h4>
                <h4> Szybkość w Football Managerze: <div className={parseInt(data[4]) > parseInt(data[3]) ? 'ratingBox better': 'ratingBox worse'}>{data[4]}</div></h4>
                <h4> Fizyczność w Fifie: <div className={parseInt(data[5]) > parseInt(data[6]) ? 'ratingBox better': 'ratingBox worse'}>{data[5]}</div></h4>
                <h4> Fizyczność w Football Managerze: <div className={parseInt(data[6]) > parseInt(data[5]) ? 'ratingBox better': 'ratingBox worse'}>{data[6]}</div></h4>
                <h4> Strzały w Fifie: <div className={parseInt(data[7]) > parseInt(data[8]) ? 'ratingBox better': 'ratingBox worse'}>{data[7]}</div></h4>
                <h4> Atak w Football Managerze: <div className={parseInt(data[8]) > parseInt(data[7]) ? 'ratingBox better': 'ratingBox worse'}>{data[8]}</div></h4>
                <h4> Defensywa w Fifie: <div className={parseInt(data[9]) > parseInt(data[10]) ? 'ratingBox better': 'ratingBox worse'}>{data[9]}</div></h4>
                <h4> Defensywa w Football Managerze: <div className={parseInt(data[10]) > parseInt(data[9]) ? 'ratingBox better': 'ratingBox worse'}>{data[10]}</div></h4>
                <h4> Drybling w Fifie: <div className={parseInt(data[11]) > parseInt(data[13]) ? 'ratingBox better': 'ratingBox worse'}>{data[11]}</div></h4>
                <h4> Podania w Fifie: <div className={parseInt(data[12]) > parseInt(data[13]) ? 'ratingBox better': 'ratingBox worse'}>{data[12]}</div></h4>
                <h4> Technika w Football Managerze: <div className={(parseInt(data[13]) > parseInt(data[11]) && parseInt(data[13]) > parseInt(data[12])) ? 'ratingBox better': 'ratingBox worse'}>{data[13]}</div></h4>
                <h4> Mentalność w Football Managerze: {data[14]}</h4>
            </>
            }
        </div>
    )

}
export default AdvancedPlayer;