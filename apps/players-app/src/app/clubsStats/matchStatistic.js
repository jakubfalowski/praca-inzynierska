import { useEffect, useState } from "react";

export function MatchStatistic(props){
    const [statistic, setStatistic] = useState([]);

    const ifFetch = true
    // const matchID = 'KWLYpDWA';
    const fetchURL = `https://flashscore.p.rapidapi.com/v1/events/statistics?locale=en_GB&event_id=${props.matchID}`
    let home = 0;
    let away = 0;

    async function fetchData() {
        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Host': 'flashscore.p.rapidapi.com',
              'X-RapidAPI-Key': '1941a7725amshe72888a2f321827p18582bjsnddf354460ab2'
            }
          };

        const response = await fetch(fetchURL,options);
        const data = await response.json();
        const results = data.DATA[0].GROUPS[0].ITEMS;
        setStatistic(results);
      }
      
      useEffect(() => {
        fetchData();
        console.log("a")
      }, [ifFetch]);


      statistic.map(item => {
        if(item.INCIDENT_NAME === 'Ball Possession'){
            home += parseFloat(item.VALUE_HOME)*0.7;
            away += parseFloat(item.VALUE_AWAY)*0.7;
        }
        if(item.INCIDENT_NAME === 'Shots on Goal'){
          home += Math.floor(item.VALUE_HOME/item.VALUE_AWAY)*90;
          away += Math.floor(item.VALUE_HOME/item.VALUE_AWAY)*90;
        }
        if(item.INCIDENT_NAME === 'Shots off Goal'){
          home += Math.floor(item.VALUE_HOME/item.VALUE_AWAY)*40;
          away += Math.floor(item.VALUE_HOME/item.VALUE_AWAY)*40;
        }
        if(item.INCIDENT_NAME === 'Attacks'){
          home += Math.floor(item.VALUE_HOME/item.VALUE_AWAY)*30;
          away += Math.floor(item.VALUE_HOME/item.VALUE_AWAY)*30;
        }
        if(item.INCIDENT_NAME === 'Dangerous Attacks'){
          home += Math.floor(item.VALUE_HOME/item.VALUE_AWAY)*100;
          away += Math.floor(item.VALUE_HOME/item.VALUE_AWAY)*100;
        }
        if(item.INCIDENT_NAME === 'Corner Kicks'){
          home += Math.floor(item.VALUE_HOME/item.VALUE_AWAY)*40;
          away += Math.floor(item.VALUE_HOME/item.VALUE_AWAY)*40;
        }  
      })
      return(
          <div>
            <button> O </button>
            <table>
              <thead>
                <th>
                  <td></td>
                  <td>Gospodarze</td>
                  <td>Goście</td>
                </th>
              </thead>
              <tbody>
            {statistic.map(item => {
              return(
                <>
                  {item.INCIDENT_NAME === 'Ball Possession'? <tr><td>Posiadanie piłki</td><td>{item.VALUE_HOME}</td><td>{item.VALUE_AWAY}</td></tr>: null}
                  {item.INCIDENT_NAME === 'Shots on Goal'? <tr><td>Strzały celne</td><td>{item.VALUE_HOME}</td><td>{item.VALUE_AWAY}</td></tr>: null}
                  {item.INCIDENT_NAME === 'Shots off Goal'? <tr><td>Strzały niecelne</td><td>{item.VALUE_HOME}</td><td>{item.VALUE_AWAY}</td></tr>: null}
                  {item.INCIDENT_NAME === 'Attacks'? <tr><td>Ataki</td><td>{item.VALUE_HOME}</td><td>{item.VALUE_AWAY}</td></tr>: null}
                  {item.INCIDENT_NAME === 'Dangerous Attacks'? <tr><td>Niebezpieczne ataki</td><td>{item.VALUE_HOME}</td><td>{item.VALUE_AWAY}</td></tr>: null}
                  {item.INCIDENT_NAME === 'Corner Kicks'? <tr><td>Rzuty rożne</td><td>{item.VALUE_HOME}</td><td>{item.VALUE_AWAY}</td></tr>: null}
                </>
                
              )}
              )}
              </tbody>
            </table>
            <p>Gospodarze: {home}</p>
            <p>Goście: {away}</p>
          </div>
      )
}
export default MatchStatistic;