let team1Value = 0;
let team2Value = 0;
let team1;
let team2;
let homeMatches = [];
let awayMatches = [];
let goals = 0;

let allTab = [];

export function allMatchesPush(dataHome, codeTeamHome, dataAway, codeTeamAway){
    let multiplier = 1;

    console.log(dataHome, dataAway);

    function git(){
        dataHome.slice(dataHome.length-15, dataHome.length).map((item, queueMatch) => {
            obliczenia(item, queueMatch, true);
        });
        dataAway.slice(dataAway.length-15, dataAway.length).map((item, queueMatch) => {
            obliczenia(item, queueMatch, false);
        });
    }
    
    // git().then(() => {
    //     allTab.push(team1, team1Value, homeMatches, team2, team2Value, awayMatches, goals)
    //     console.log(allTab)
    // })

    // if(lastMatches === 0 && option === "home") renderH += 1;
    // if(lastMatches === 0 && option === "away") renderA += 1;

    function obliczenia(item, queueMatch, ifHome){
        if(queueMatch < 5) multiplier = 0.75
        else if(queueMatch < 10) multiplier = 1
        else multiplier = 1.25

        if(ifHome) { // dla team1 gospodarze
            if(item.HOME_SCORE_CURRENT === item.AWAY_SCORE_CURRENT) team1Value += (1*multiplier); // remis zawsze 1 punkt do przodu
            if(item.HOME_PARTICIPANT_IDS[0]===codeTeamHome){ //jesli grają u siebie
              team1 = item.HOME_NAME;
              homeMatches.push(item) // dodaj do eksportowanej tablicy gdzie sa mecze u siebie (team 1 ma taka tablice, team2 mecze wyjazdowe)
              if(item.HOME_SCORE_CURRENT > item.AWAY_SCORE_CURRENT) team1Value += (3*multiplier); // graja u siebie wiec jesli bramek gospodarzy jest wiecej niz gosci to dodaj im 3 punkty
              goals += parseInt(item.HOME_SCORE_CURRENT)+parseInt(item.AWAY_SCORE_CURRENT) 
            }
            else if(item.AWAY_PARTICIPANT_IDS[0]===codeTeamHome){ // jesli graja na wyjezdzie
              if(item.HOME_SCORE_CURRENT < item.AWAY_SCORE_CURRENT) team1Value += (3*multiplier); // 3 punkty dla gosci
              goals += parseInt(item.HOME_SCORE_CURRENT)+parseInt(item.AWAY_SCORE_CURRENT)
            }
          }
      
          else if(!ifHome) { //dla team2 goscie
            if(item.HOME_SCORE_CURRENT === item.AWAY_SCORE_CURRENT) team2Value += (1*multiplier); // remis
            if(item.HOME_PARTICIPANT_IDS[0]===codeTeamAway){ // jesli graja u siebie
              team2 = item.HOME_NAME;
              if(item.HOME_SCORE_CURRENT > item.AWAY_SCORE_CURRENT) team2Value += (3*multiplier); // i team2 strzeli wiecej goli to maja 3 punkty
              goals += parseInt(item.HOME_SCORE_CURRENT)+parseInt(item.AWAY_SCORE_CURRENT)
            }
            else if(item.AWAY_PARTICIPANT_IDS[0]===codeTeamAway){ // jesli na wyjezdzie
              awayMatches.push(item); // dodaj do tablicy mecze na wyjezdzie
              if(item.HOME_SCORE_CURRENT < item.AWAY_SCORE_CURRENT) team2Value += (3*multiplier); // wiecej goli na wyjedzie +3 punkty
              goals += parseInt(item.HOME_SCORE_CURRENT)+parseInt(item.AWAY_SCORE_CURRENT)
            }
          }
    }
    
    
}
export default allMatchesPush;