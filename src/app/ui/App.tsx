import { Route, Routes } from 'react-router-dom';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
import {
  LeagueNameComponent,
  LeaguesComponent,
  TeamsComponent,
} from '../../components';
import { NavBar } from '../../shared/ui';

function App() {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <NavBar />
      <Routes>
        <Route path="/" element={<LeaguesComponent />} />
        <Route path="leagues/:id" element={<LeagueNameComponent />} />
        <Route path="teams" element={<TeamsComponent />} />
      </Routes>
    </LocalizationProvider>
  );
}

export default App;
