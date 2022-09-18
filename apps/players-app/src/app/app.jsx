import {TableCompare} from './tableCompare'
import './style.css'
import SearchPlayers from './searchPlayers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdvancedPlayer from './advancedPlayer';

export function App() {

  return (
    <Router>
        <Routes>
          <Route path={'/players'} element={<><SearchPlayers /><br/><TableCompare /></>} />
          <Route path={'/players/:name'} element={<AdvancedPlayer />} />
        </Routes>
      </Router>

  );
}

export default App;
