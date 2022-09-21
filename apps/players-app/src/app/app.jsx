import {TableCompare} from './tableCompare'
import './style.css'
import SearchPlayers from './searchPlayers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdvancedPlayer from './advancedPlayer';
import ChartStats from './chartCompareSources';
import ChartClubs from './chartClubs';

export function App() {

  return (
    <Router>
        <Routes>
          <Route path={'/'} element={<a href='/players'>Pokaż apke z piłkarzami</a>} />
          <Route path={'/players'} element={<><SearchPlayers /><br/><TableCompare /><a href='/players/charts'>Pokaż wykresy</a></>} />
          <Route path={'/players/:name'} element={<AdvancedPlayer />} />
          <Route path={'/players/charts'} element={<ChartStats />} />
          <Route path={'/players/charts/club'} element={<ChartClubs />} />

        </Routes>
      </Router>

  );
}

export default App;
