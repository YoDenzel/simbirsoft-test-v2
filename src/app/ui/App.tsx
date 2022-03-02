import { Route, Routes } from 'react-router-dom';
import {
  LeagueNameComponent,
  LeaguesComponent,
  TeamsComponent,
} from '../../components';
import { NavBar } from '../../shared/ui';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LeaguesComponent />} />
        <Route path="leagues/:id" element={<LeagueNameComponent />} />
        <Route path="teams" element={<TeamsComponent />} />
      </Routes>
    </>
  );
}

export default App;
