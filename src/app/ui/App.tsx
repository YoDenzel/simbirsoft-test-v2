import { Route, Routes } from 'react-router-dom';
import { LeaguesComponent, TeamsComponent } from '../../components';
import { NavBar } from '../../shared/ui';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LeaguesComponent />} />
        <Route path="/teams" element={<TeamsComponent />} />
      </Routes>
    </>
  );
}

export default App;
