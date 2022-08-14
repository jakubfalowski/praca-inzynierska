import axios from 'axios';
import cheerio from 'cheerio';

let info;

export function Forebet(team1, team2) {

    axios.get('https://www.forebet.com/pl/prognozy-pi%C5%82karskie-polska/ekstraklasa').then((res) => {
        const $ = cheerio.load(res.data);
        const homeTeam = $('.homeTeam');
            const awayTeam = $('.awayTeam');
            const percents = $('.fprc span');
            const result = $('.ex_sc');
            const homeName = [];
            const awayName = [];
            const percentsAmount = [];
            const resultTab = [];
            let numberOfRow = 0;

            $(homeTeam).each((i ,el) => {
                const item = $(el).text();
                homeName.push(item);
            })

            $(awayTeam).each((i ,el) => {
                const item = $(el).text();
                awayName.push(item);
            })

            $(percents).each((i ,el) => {
                const item = $(el).text();
                if(item !== '1' && item !== 'X' && item !== '2') percentsAmount.push(item);
            })

            $(result).each((i ,el) => {
              const item = $(el).text();
              if(item !== 'Prognoza wyniku') resultTab.push(item);
          })

            // eslint-disable-next-line no-inner-declarations
            function setInfo(teamH, teamA){
                if(homeName.indexOf(teamH) === awayName.indexOf(teamA)){
                    numberOfRow = homeName.indexOf(teamH);
                    info = homeName[numberOfRow]+" "+awayName[numberOfRow]+" "+percentsAmount[numberOfRow*3]+" "+percentsAmount[numberOfRow*3+1]+" "+percentsAmount[numberOfRow*3+2]+" "+resultTab[numberOfRow];
                }
                else info = "Brak podanego meczu"
                console.log(info);
            }
            setInfo(team1, team2);
        })
    }

export default Forebet;