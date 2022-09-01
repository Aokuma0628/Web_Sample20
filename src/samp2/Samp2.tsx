import { FC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../Home';
import Movie from './MovieLogic';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const pagekStyle = css`
  background-color: #242333;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 750px;
  /* width: 600px; */
  font-family: 'Lato', sans-serif;
  margin: 0;
`;

const titleStyle = css`
  text-align: center;
  margin: 20px 0 20px;
`;

const returnTopStyle = css`
 margin-top: auto;
  position: flex;
  bottom: 0;
`;

const Samp2: FC = () => {
  return (
    <div className="Samp2" css={pagekStyle}>
      <h2 css={titleStyle}>サンプル2</h2>
      <Movie />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <p css={returnTopStyle}><Link className="return-top" to="/">トップページに戻る</Link></p>
    </div>
  );
};

export default Samp2;
