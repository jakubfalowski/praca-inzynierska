export let homeValue = 0;
export let team1;

export function homeMatchesPush(item,lastMatches, query){
      team1 = item.HOME_NAME;
      if(lastMatches === 0) homeValue = 0;
      if(parseInt(item.HOME_SCORE_CURRENT) === parseInt(item.AWAY_SCORE_CURRENT)) homeValue += 1;
      else if(parseInt(item.HOME_SCORE_CURRENT) > parseInt(item.AWAY_SCORE_CURRENT)) homeValue += 3;
      console.log("home Value:"+homeValue)
}