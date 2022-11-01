import { options } from "./fetchOption";

export const FetchResults = async (team1, team2) =>{
    let render = 0;
    let matchArray = [];
    if(render < 1){
        try{
            const response1 = await fetch(
                `https://flashscore.p.rapidapi.com/v1/teams/results?sport_id=1&team_id=${team1}&locale=en_GB&page=1`,options
            );
            const data1 = await response1.json();
            const results1 = data1.DATA[0].EVENTS;
            matchArray.push(results1);
    
            const response2 = await fetch(
                `https://flashscore.p.rapidapi.com/v1/teams/results?sport_id=1&team_id=${team2}&locale=en_GB&page=1`,options
            );
            const data2 = await response2.json();
            const results2 = data2.DATA[0].EVENTS;
            matchArray.push(results2);
            render++;
            return matchArray;
        }
    
        catch(error){
            console.log(error)
        }
    }
    
}

export default FetchResults;
