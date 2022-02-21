import { Route, Routes } from 'react-router-dom';
import { LeaguesComponent } from '../../components';
import { NavBar } from '../../shared/ui';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LeaguesComponent />} />
      </Routes>
    </>
  );
}

export default App;
