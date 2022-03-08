import { Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ruRU } from '@mui/material/locale';
import { grey, blue } from '@mui/material/colors';
import {
  LeagueNameComponent,
  LeaguesComponent,
  TeamNameComponent,
  TeamsComponent,
} from '../../components';
import { NavBar } from '../../shared/ui';

export function App() {
  const theme = createTheme(
    {
      palette: {
        primary: {
          main: blue[700],
          dark: '#000',
        },
        secondary: {
          main: grey[700],
        },
      },
    },
    ruRU,
  );

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route path="/" element={<LeaguesComponent />} />
        <Route path="leagues/:id" element={<LeagueNameComponent />} />
        <Route path="teams" element={<TeamsComponent />} />
        <Route path="teams/:id" element={<TeamNameComponent />} />
      </Routes>
    </ThemeProvider>
  );
}
