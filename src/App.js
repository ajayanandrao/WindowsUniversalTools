import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Error from './Error';
import Footer from './Footer';
import Gears from './Gears';
import "./Mixin.scss";
import Navbar from './Navbar';
import Onedrive from './pages/App/Onedrive';
import People from './pages/App/People';
import Photos from './pages/App/Photos';
import Store from './pages/App/Store';
import Todo from './pages/App/Todo';
import Weather from './pages/App/Weather';
import CollactionCard from './pages/CollactionCard';
import Compress from './pages/Compress';
import Candy from './pages/game/Candy';
import Dragon from './pages/game/Dragon';
import Gta from './pages/game/Gta';
import Halo from './pages/game/Halo';
import MC from './pages/game/MC';

import ScrollToTop from './ScrollTop';

function App() {
  return (
    <>
      <Router basename="/WindowsUniversalTool">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Compress />} />
          <Route path='/Asphalt_8/' element={<CollactionCard />} />
          <Route path='/Gta/' element={<Gta />} />
          <Route path='/Halo/' element={<Halo />} />
          <Route path='/Mc/' element={<MC />} />
          <Route path='/Candy/' element={<Candy />} />
          <Route path='/Dragon/' element={<Dragon />} />

          <Route path='/Onedrive/' element={<Onedrive />} />
          <Route path='/Todo/' element={<Todo />} />
          <Route path='/People/' element={<People />} />
          <Route path='/Photos/' element={<Photos />} />
          <Route path='/Weather/' element={<Weather />} />
          <Route path='/Store/' element={<Store />} />
          <Route path='*' element={<Error />} />
          <Route path='/gears/' element={<Gears />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
