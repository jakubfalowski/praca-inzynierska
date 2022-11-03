import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './mainPage';

import TableCompare from './playersStats/tableCompare';
import SearchPlayers from './playersStats/searchPlayers';
import AdvancedPlayer from './playersStats/advancedPlayer';
import ChartStats from './playersStats/chartCompareSources';
import ChartClubs from './playersStats/chartClubs';

import PageIndex from './matchStats/views/matchPage';
import PredictPage from './matchStats/views/predictPage';

import '../styles.scss';

export function App() {

  return (
    <Router>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/players'} element={<><SearchPlayers /><br/><TableCompare /><a href='/players/charts'>Pokaż wykresy</a></>} />
          <Route path={'/players/:name'} element={<AdvancedPlayer />} />
          <Route path={'/players/charts'} element={<ChartStats />} />
          <Route path={'/players/charts/club'} element={<ChartClubs />} />

          <Route path={'/clubs/:match/:home/:away'} element={<PredictPage />} />
          <Route path={"/clubs"} element ={<PageIndex />} />

        </Routes>
      </Router>

  );
}

export default App;
