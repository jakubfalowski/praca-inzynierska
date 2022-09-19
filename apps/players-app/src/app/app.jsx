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
          <Route path={'/players'} element={<><SearchPlayers /><br/><TableCompare /></>} />
          <Route path={'/players/:name'} element={<AdvancedPlayer />} />
          <Route path={'/players/charts'} element={<ChartStats />} />
          <Route path={'/'} element={<ChartClubs />} />
        </Routes>
      </Router>

  );
}

export default App;
