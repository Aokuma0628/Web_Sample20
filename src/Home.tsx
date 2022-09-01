import { FC } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Samp1 from './samp1/Samp1';
import Samp2 from './samp2/Samp2';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const linkStyle = css`
  text-align: center;
  padding: 5px 0;
  font-size: 20px;
`;

const titleStyle = css`
  text-align: center;
  margin: 20px 0;
  color: rgba(0,0,255,0.6555);
  font-size: 30px;
  text-decoration: underline;
  text-decoration-color: black;
`;

const showHomePage = () => {
  return (
    <div>
      <h1 css={titleStyle}>サンプル20選</h1>
      <nav>
        <p css={linkStyle}><Link to="/samp1">Samp1</Link></p>
        <p css={linkStyle}><Link to="/samp2">Samp2</Link></p>
      </nav>
    </div>
  );
};


const showSampPage = () => {
  return (
    <div>
      <Routes>
        <Route path="samp1" element={<Samp1 />} />
        <Route path="samp2" element={<Samp2 />} />
      </Routes>
    </div>
  );
};


const Home: FC = () => {
  const location = useLocation();
  const isHome  = location.pathname === '/';
  return (
    <div className="home">
      {isHome ? showHomePage() : showSampPage()}
    </div>
  );
};

export default Home;
