import { Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ruRU } from '@mui/material/locale';
import {
  LeagueNameComponent,
  LeaguesComponent,
  TeamsComponent,
} from '../../components';
import { NavBar } from '../../shared/ui';

function App() {
  const theme = createTheme({}, ruRU);

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route path="/" element={<LeaguesComponent />} />
        <Route path="leagues/:id" element={<LeagueNameComponent />} />
        <Route path="teams" element={<TeamsComponent />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
