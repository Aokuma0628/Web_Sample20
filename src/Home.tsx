import { VFC } from 'react';
import './App.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Samp1 from './samp1/Samp1';


const showHomePage = () => {
  return (
    <div>
      <h1 id="home-title">サンプル20選</h1>
      <nav>
        <p><Link to="/samp1">Samp1</Link></p>
        <p><Link to="/samp2">Samp2</Link></p>
        <p><Link to="/samp3">Samp3</Link></p>
        <p><Link to="/samp4">Samp4</Link></p>
        <p><Link to="/samp5">Samp5</Link></p>
      </nav>
    </div>
  );
};


const showSampPage = () => {
  return (
    <div>
      <Routes>
        <Route path="samp1" element={<Samp1 />} />
      </Routes>
    </div>
  );
};


const Home: VFC = () => {
  const location = useLocation();
  const isHome  = location.pathname === '/';
  return (
    <div className="home">
      {isHome ? showHomePage() : showSampPage()}
    </div>
  );
};

export default Home;
