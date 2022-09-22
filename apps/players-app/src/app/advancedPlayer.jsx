import {useParams } from 'react-router-dom';
import { useState } from 'react';
import { playerTabFunction } from './fetchData';
import { Table } from '@mantine/core';
import './style.scss'

export function AdvancedPlayer(){

    const [data, setData] = useState();
    let { name } = useParams();

    const playerTab = new Array(0);
    
    function setPlayer(){
        if(playerTab[0]){
            for(let indexOfPlayer = 0; indexOfPlayer < playerTab[0].length; indexOfPlayer++){
                if(playerTab[0][indexOfPlayer][0] === name) setData(playerTab[0][indexOfPlayer])
            }
        }
        else console.log("error")
        
    }

    playerTabFunction().then((value) => {
        playerTab.push(value)
    }).then(setPlayer);

    

    return(
        <div className="ap" style={{
            backgroundColor: "#ffffff",
            width: "1600px"
          }}>
            { data &&
    
                <Table className="tbl" horizontalSpacing="xl" verticalSpacing="xs">
                    <caption>
                        <h2> Nazwa zawodnika: {data[0]}</h2>
                        <h2> Klub: {data[15]}</h2>
                        <h2> Narodowość: {data[16]}</h2>
                    </caption>
                    <tbody>
                        <tr className='statBox head'>
                                <td className='ratingBox'></td>
                                <td className='ratingBox'>FIFA</td>
                                <td className='ratingBox'>Football Manager</td>
                            </tr>
                        <tr className='statBox'>
                            <td>Overall</td>
                            <td className={parseInt(data[1]) > parseInt(data[2]) ? 'ratingBox better': parseInt(data[1]) === parseInt(data[2]) ? 'ratingBox same' : 'ratingBox worse'}>{data[1]}</td>
                            <td className={parseInt(data[2]) > parseInt(data[1]) ? 'ratingBox better': parseInt(data[1]) === parseInt(data[2]) ? 'ratingBox same' : 'ratingBox worse'}>{data[2]}</td>
                        </tr>
                        <tr className='statBox'>
                            <td>Szybkość</td>
                            <td className={parseInt(data[3]) > parseInt(data[4]) ? 'ratingBox better': parseInt(data[3]) === parseInt(data[4]) ? 'ratingBox same' : 'ratingBox worse'}>{data[3]}</td>
                            <td className={parseInt(data[4]) > parseInt(data[3]) ? 'ratingBox better': parseInt(data[3]) === parseInt(data[4]) ? 'ratingBox same' : 'ratingBox worse'}>{data[4]}</td>
                        </tr>
                        <tr className='statBox'>
                            <td>Fizyczność</td>
                            <td className={parseInt(data[5]) > parseInt(data[6]) ? 'ratingBox better': parseInt(data[5]) === parseInt(data[6]) ? 'ratingBox same' : 'ratingBox worse'}>{data[5]}</td>
                            <td className={parseInt(data[6]) > parseInt(data[5]) ? 'ratingBox better': parseInt(data[5]) === parseInt(data[6]) ? 'ratingBox same' : 'ratingBox worse'}>{data[6]}</td>
                        </tr>
                        <tr className='statBox'> 
                            <td>Atak</td>
                            <td className={parseInt(data[7]) > parseInt(data[8]) ? 'ratingBox better': parseInt(data[7]) === parseInt(data[8]) ? 'ratingBox same' : 'ratingBox worse'}>{data[7]}</td>
                            <td className={parseInt(data[8]) > parseInt(data[7]) ? 'ratingBox better': parseInt(data[7]) === parseInt(data[8]) ? 'ratingBox same' : 'ratingBox worse'}>{data[8]}</td>
                        </tr>
                        <tr className='statBox'> 
                            <td>Defensywa</td>
                            <td className={parseInt(data[9]) > parseInt(data[10]) ? 'ratingBox better': parseInt(data[9]) === parseInt(data[10]) ? 'ratingBox same' : 'ratingBox worse'}>{data[9]}</td>
                            <td className={parseInt(data[10]) > parseInt(data[9]) ? 'ratingBox better': parseInt(data[9]) === parseInt(data[10]) ? 'ratingBox same' : 'ratingBox worse'}>{data[10]}</td>
                        </tr>
                        <tr className='statBox'>
                            <td>Drybling / Podania</td>
                            <td className={parseInt(data[11]) + parseInt(data[12]) > parseInt(data[13])*2 ? 'ratingBox better': parseInt(data[11]) + parseInt(data[12]) === parseInt(data[13]) ? 'ratingBox same' : 'ratingBox worse'}>{data[11]} / {data[12]}</td>
                            <td className={(parseInt(data[13])*2 > parseInt(data[11]) + parseInt(data[12])) ? 'ratingBox better': (parseInt(data[13])*2  === parseInt(data[11]) + parseInt(data[12])) ? 'ratingBox same': 'ratingBox worse'}>{data[13]}</td>
                        </tr>          
                        <tr className='statBox'>
                            <td>Mentalność</td>
                            <td className='ratingBox same'> - </td>
                            <td className='ratingBox same' colSpan={2}>{data[14]}</td>
                        </tr>      
                        {/*  */}
                    </tbody>
                </Table>
            }
        </div>
    )

}
export default AdvancedPlayer;