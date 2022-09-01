import { FC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../Home';
import FormLogic from './FormLogic';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const titleStyle = css`
  text-align: center;
  margin: 20px 0 20px;
`;

const returnTopStyle = css`
 margin-top: auto;
  position: flex;
  bottom: 0;
`;

const pageStyle = css`
  background-color: #f9fafb;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 700px;
  margin: 0;
  box-sizing: border-box;
`;

const Samp1: FC = () => {
  return (
    <div className="Samp1" css={pageStyle}>
      <h2 css={titleStyle}>サンプル1</h2>
      <FormLogic />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <p css={returnTopStyle}><Link className="return-top" to="/">トップページに戻る</Link></p>
    </div>
  );
};

export default Samp1;
