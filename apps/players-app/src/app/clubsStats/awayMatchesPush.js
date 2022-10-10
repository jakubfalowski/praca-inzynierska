export let awayValue = 0;
export let team2;

export function awayMatchesPush(item,lastMatches, query){
    team2 = item.AWAY_NAME;
    if(lastMatches === 0) awayValue = 0;
    if(parseInt(item.HOME_SCORE_CURRENT) === parseInt(item.AWAY_SCORE_CURRENT)) awayValue += 1;
    else if(parseInt(item.HOME_SCORE_CURRENT) < parseInt(item.AWAY_SCORE_CURRENT)) awayValue += 3;
}