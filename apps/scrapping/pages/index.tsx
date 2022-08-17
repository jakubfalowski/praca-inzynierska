import * as request from 'request';
import * as cheerio from 'cheerio';
import Forebet from './forebet';
import Fifa from './fifa';

export function Index() {
    Forebet('Pogon Szczecin','Wisla Plock');
    Fifa('James Tarkowski', 13);
  }

export default Index;