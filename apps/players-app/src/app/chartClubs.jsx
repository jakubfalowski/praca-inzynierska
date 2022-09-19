import { useState } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis,Tooltip, Legend } from "recharts";
import { playerTabFunction } from "./fetchData";
import { sortByOverallFifa } from "./sort";

const clubsName = ["Liverpool","Tottenham", "West Ham", "Wolves", "Brighton", "Crystal Palac", "West Brom", "Sheffield Uni", "Burnley", "Arsenal", "Fulham", "Leeds Utd", "Newcastle"
, "Leicester", "Southampton", "Manchester Un", "Manchester Ci", "Aston Villa", "Everton", "Chelsea"];

let clubsTab = [];
for(let a = 0; a < 20; a++){
    clubsTab.push(
        {name: clubsName[a], playersFifa: 0, ratingFifa: 0, paceFifa: 0, shotsFifa: 0, passFifa: 0,dribbleFifa: 0, defensiveFifa: 0,physicalityFifa: 0, 
            playersFm: 0, ratingFm: 0, attackFm: 0, defensiveFm: 0, techniqueFm: 0, mentalityFm: 0, physicalityFm: 0, paceFm: 0})
}


export function ChartClubs(){

    const [on, setOn] = useState(false)

    playerTabFunction().then((stat) => {
        const bestSquad = stat.sort(sortByOverallFifa);
        // console.log(stat)
        bestSquad.map(player =>{
            let clubIndex = clubsName.indexOf(player[15]);
            if(clubsTab[clubIndex]){
                if(clubsTab[clubIndex].playersFifa < 15 && clubsTab[clubIndex].playersFm < 15){
                    clubsTab[clubIndex].ratingFifa += parseInt(player[1]);
                    clubsTab[clubIndex].ratingFm += parseInt(player[2]);
                    clubsTab[clubIndex].paceFifa += parseInt(player[3]);
                    clubsTab[clubIndex].paceFm += parseInt(player[4]);
                    clubsTab[clubIndex].physicalityFifa += parseInt(player[5]);
                    clubsTab[clubIndex].physicalityFm += parseInt(player[6]);
                    clubsTab[clubIndex].shotsFifa += parseInt(player[7]);
                    clubsTab[clubIndex].attackFm += parseInt(player[8]);
                    clubsTab[clubIndex].defensiveFifa += parseInt(player[9]);
                    clubsTab[clubIndex].defensiveFm += parseInt(player[10]);
                    clubsTab[clubIndex].dribbleFifa += parseInt(player[11]);
                    clubsTab[clubIndex].passFifa += parseInt(player[12]);
                    clubsTab[clubIndex].techniqueFm += parseInt(player[13]);
                    clubsTab[clubIndex].mentalityFm += parseInt(player[14]);

                    clubsTab[clubIndex].playersFifa++;
                    clubsTab[clubIndex].playersFm++;
                } 
            }

        })
        console.log(clubsTab)
      }).then(()=>{
        setOn(true)
      })

      return (
        <div style={{
          backgroundColor: "#ffffff",
          width: "1600px"
        }}>
          <h2 className='center'>Średnia ocena danej statystyki</h2>
        { on === true &&
          <BarChart
          width={1500}
          height={400}
          data={clubsTab}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis  />
          <Tooltip  />
          <Legend />
          <Bar dataKey="ratingFifa" stackId="a" fill="#8A4CE8" />
          <Bar dataKey="ratingFm" stackId="a" fill="#A61D6F" />
        </BarChart>
        }
        </div>
      );

}
export default ChartClubs;