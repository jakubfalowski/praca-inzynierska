import * as request from 'request';
import * as cheerio from 'cheerio';
import Forebet from './forebet';
import Fifa from './fifa';
import Fm from './fm';

export function Index() {
    Forebet('Stal Mielec','Slask Wroclaw');
    Fifa();
    Fm('Christian Pulisic');
  }

export default Index;