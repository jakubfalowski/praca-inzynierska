import * as request from 'request';
import * as cheerio from 'cheerio';
import Forebet from './forebet';
import Fifa from './fifa';

export function Index() {
    Forebet('Pogon Szczecin','Wisla Plock');
    Fifa('Harry Kane');
  }

export default Index;