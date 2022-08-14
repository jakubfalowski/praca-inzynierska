import axios from 'axios';
import cheerio from 'cheerio';
import async from 'async';

let info = "Brak podanego zawodnika";

export function Fifa(player, times) {

    const nameTab = [];
    const ratingTab = [];
    const paceTab = [];
    const shotsTab = [];
    const passingTab = [];
    const dribblingTab = [];
    const defendingTab = [];
    const physicalityTab = [];
    let numberOfRow = 0;
    let i = 1;

    setInterval(function() { 
        for(i; i <= times; i++) adding(i);
    }, 1000);
    
    function adding(numberOfPage){
        axios.get(`https://www.futbin.com/players?page=${numberOfPage}&league=13&version=all_nif`).then((res) => {
            const $ = cheerio.load(res.data);
            const playerName = $('.player_name_players_table');
            const rating = $('.rating');
            const pace = $('tbody tr td:nth-of-type(9)');
            const shots = $('tbody tr td:nth-of-type(10)');
            const passing = $('tbody tr td:nth-of-type(11)');
            const dribbling = $('tbody tr td:nth-of-type(12)');
            const defending = $('tbody tr td:nth-of-type(13)');
            const physicality = $('tbody tr td:nth-of-type(14)');

            $(playerName).each((i ,el) => {
                const item = $(el).text();
                nameTab.push(item);
            })

            $(rating).each((i ,el) => {
                const item = $(el).text();
                if(item !== '') ratingTab.push(item);
            })

            $(pace).each((i ,el) => {
                const item = $(el).text();
                paceTab.push(item);
            })

            $(shots).each((i ,el) => {
                const item = $(el).text();
                shotsTab.push(item);
            })

            $(passing).each((i ,el) => {
                const item = $(el).text();
                passingTab.push(item);
            })

            $(dribbling).each((i ,el) => {
                const item = $(el).text();
                dribblingTab.push(item);
            })

            $(defending).each((i ,el) => {
                const item = $(el).text();
                defendingTab.push(item);
            })

            $(physicality).each((i ,el) => {
                const item = $(el).text();
                physicalityTab.push(item);
            })

            // eslint-disable-next-line no-inner-declarations
            function setInfo(player){
                
                if(nameTab.indexOf(player) > -1){
                    numberOfRow = nameTab.indexOf(player);
                    info = "Zawdonik: "+nameTab[numberOfRow]+", ogólna ocena: "+ratingTab[numberOfRow]+", szybkość: "+paceTab[numberOfRow]+", strzały: "+shotsTab[numberOfRow]+", dribling: "+dribblingTab[numberOfRow]+", defensywa: "+defendingTab[numberOfRow]+", fizyczność: "+physicalityTab[numberOfRow];
                    console.log(info)
                }
                else info = 'Brak podanego zawodnika'
            }
            setInfo(player);
    })
    }

    // }
  }

export default Fifa;