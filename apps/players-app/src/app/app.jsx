import {TableCompare} from './playersStats/tableCompare'
import './style.scss'
import SearchPlayers from './playersStats/searchPlayers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdvancedPlayer from './playersStats/advancedPlayer';
import ChartStats from './playersStats/chartCompareSources';
import ChartClubs from './playersStats/chartClubs';
import FetchSofaScore from './playersStats/fetchSofascore';

import PageIndex from './clubsStats/pageIndex';
import ClubAll from './clubsStats/clubAll';

export function App() {

  return (
    <Router>
        <Routes>
          <Route path={'/'} element={<a href='/players'>Pokaż apke z piłkarzami</a>} />
          <Route path={'/players'} element={<><SearchPlayers /><br/><TableCompare /><a href='/players/charts'>Pokaż wykresy</a></>} />
          <Route path={'/players/:name'} element={<AdvancedPlayer />} />
          <Route path={'/players/charts'} element={<ChartStats />} />
          <Route path={'/players/charts/club'} element={<ChartClubs />} />
          <Route path={'/test'} element={<FetchSofaScore />} />

          <Route path={"/main"} element ={<PageIndex />} />
        <Route path={"/results/:match/:home/:away"} element ={<ClubAll/>} />

        </Routes>
      </Router>

  );
}

export default App;
