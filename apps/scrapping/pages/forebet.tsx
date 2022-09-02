import axios from 'axios';
import cheerio from 'cheerio';
import { cardFB } from './cardFB';

let info;

export async function Forebet(team1, team2) {

    const axiosTest = async () =>{
        const response = await axios.get('https://www.forebet.com/pl/prognozy-pi%C5%82karskie-polska/ekstraklasa');
        return response.data;
    }

    const data = await axiosTest();
    const $ = cheerio.load(data);
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
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            info = {"gospodarze": homeName[numberOfRow],"goście":awayName[numberOfRow], "szanse na gospodarzy":percentsAmount[numberOfRow*3], "szanse na remis":percentsAmount[numberOfRow*3+1], "szanse na gości":percentsAmount[numberOfRow*3+2], "przewidywany wynik":resultTab[numberOfRow]}
        }
    }
    setInfo(team1, team2);
    console.log(info)
    return info;
}

export default Forebet;