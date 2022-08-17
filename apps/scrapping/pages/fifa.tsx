import axios from 'axios';
import cheerio from 'cheerio';
import async from 'async';

export function Fifa(player, times) {

    let info = "Brak podanego zawodnika";
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

    for(i; i <= times; i++) {adding(i); }
    
    function adding(numberOfPage){
        axios.get(`https://www.futhead.com/22/players/?club=all&league=13&page=${numberOfPage}&level=all_nif&bin_platform=ps`).then((res) => {
            const $ = cheerio.load(res.data);
            const playerName = $('.player-name');
            const rating = $('.fut22');
            const pace = $('.player-right .player-stat:nth-of-type(1) .value');
            const shots = $('.player-right .player-stat:nth-of-type(2) .value');
            const passing = $('.player-right .player-stat:nth-of-type(3) .value');
            const dribbling = $('.player-right .player-stat:nth-of-type(4) .value');
            const defending = $('.player-right .player-stat:nth-of-type(5) .value');
            const physicality = $('.player-right .player-stat:nth-of-type(6) .value');

            $(playerName).each((i ,el) => {
                const item = $(el).text();
                nameTab.push(item);
            })

            $(rating).each((i ,el) => {
                const item = $(el).text();
                if(parseInt(item) > 10) ratingTab.push(item);
            })

            $(pace).each((i ,el) => {
                const item = $(el).text();
                if(parseInt(item) > 10) paceTab.push(item);
            })

            $(shots).each((i ,el) => {
                const item = $(el).text();
                if(parseInt(item) > 10) shotsTab.push(item);
            })

            $(passing).each((i ,el) => {
                const item = $(el).text();
                if(parseInt(item) > 10) passingTab.push(item);
            })

            $(dribbling).each((i ,el) => {
                const item = $(el).text();
                if(parseInt(item) > 10) dribblingTab.push(item);
            })

            $(defending).each((i ,el) => {
                const item = $(el).text();
                if(parseInt(item) > 10) defendingTab.push(item);
            })

            $(physicality).each((i ,el) => {
                const item = $(el).text();
                if(parseInt(item) > 10) physicalityTab.push(item);
            })
    })
    }
    // eslint-disable-next-line no-inner-declarations
    function setInfo(player){
        setTimeout(function(){ 
            if(nameTab.indexOf(player) > -1){
                numberOfRow = nameTab.indexOf(player);
                info = "Zawdonik: "+nameTab[numberOfRow]+", ogólna ocena: "+ratingTab[numberOfRow]+", szybkość: "+paceTab[numberOfRow]+", strzały: "+shotsTab[numberOfRow]+", podania: "+passingTab[numberOfRow]+", drybling: "+dribblingTab[numberOfRow]+", defensywa: "+defendingTab[numberOfRow]+", fizyczność: "+physicalityTab[numberOfRow];
                console.log(info)
            }
            else info = 'Brak podanego zawodnika'
            console.log(dribblingTab)
        }, 3000);
    }
    setInfo(player);
  }

export default Fifa;