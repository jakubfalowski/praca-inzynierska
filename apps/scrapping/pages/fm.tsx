import axios from 'axios';
import cheerio from 'cheerio';

const nameTab = [];
const attTab = [];
const defTab = [];
const techTab = [];
const menTab = [];
const phyTab = [];
const speTab = [];

export function Fm(player){

let info = "Brak podanego zawodnika";
let numberOfRow = 0;
let i = 0;

for(i; i <= 26; i++) {adding(i); }

function adding(numberOfPage) {
    axios.get(`https://fmdataba.com/21/l/2613/premier-league/best-players/${numberOfPage}`).then((res) => {
        const $ = cheerio.load(res.data);
        const playerName = $('strong');
        const att = $('.veri61');
        const def = $('.veri61:nth-of-type(3)');
        const tech = $('.veri61:nth-of-type(4)');
        const men = $('.veri61:nth-of-type(5)');
        const phy = $('.veri61:nth-of-type(6)');
        const spe = $('.veri61:nth-of-type(7)');

        $(playerName).each((i ,el) => {
            const item = $(el).text();
            nameTab.push(item);
        })
        
        $(att).each((i ,el) => {
            const item = $(el).text();
            attTab.push(item);
        })

        $(def).each((i ,el) => {
            const item = $(el).text();
            defTab.push(item);
        })

        $(tech).each((i ,el) => {
            const item = $(el).text();
            techTab.push(item);
        })

        $(men).each((i ,el) => {
            const item = $(el).text();
            menTab.push(item);
        })

        $(phy).each((i ,el) => {
            const item = $(el).text();
            phyTab.push(item);
        })

        $(spe).each((i ,el) => {
            const item = $(el).text();
            speTab.push(item);
        })
    })

    // eslint-disable-next-line no-inner-declarations
    function setInfo(player){
        setTimeout(function(){ 
            if(nameTab.indexOf(player) > -1){
                numberOfRow = nameTab.indexOf(player);
                info = "Zawdonik: "+nameTab[numberOfRow]+", atak: "+attTab[numberOfRow]+", obrona "+defTab[numberOfRow]+", technika: "+techTab[numberOfRow]+", mental: "+menTab[numberOfRow]+", fizyczność: "+phyTab[numberOfRow]+", szybkość: "+speTab[numberOfRow];
                console.log(info)
            }
            else info = 'Brak podanego zawodnika'
        }, 3000);
    }
    setInfo(player);
  }
}

export default Fm;