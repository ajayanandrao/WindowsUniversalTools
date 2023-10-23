import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Error from './Error';
import Footer from './Footer';
import Gears from './Gears';
import "./Mixin.scss";
import Navbar from './Navbar';

import CollactionCard from './pages/CollactionCard';
import Compress from './pages/Compress';


import ScrollToTop from './ScrollTop';
import GameName from './pages/game/GameName';
import GameNameDetail from './pages/game/GameNameDetail';
import AppsDetail from './pages/Free Apps/AppsDetail';

function App() {
  return (
    <>
      <Router basename="/WindowsUniversalTools">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Compress />} />

          <Route path='gameName' element={<GameName />} />
          <Route path='gameName/:id' element={<GameNameDetail />} />

          <Route path='apps/:id' element={<AppsDetail />} />

          <Route path='*' element={<Error />} />
          <Route path='/gears/' element={<Gears />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

