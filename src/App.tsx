import { FC } from 'react';
import Home from './Home';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const footerStyle = css`
  border-top-style: solid;
  background-color: azure;
  position: relative;
  height: 100px;
`;

const copyRightStyle = css`
  font-size: 20px;
  text-align: center;
  top: 30%;
  position: relative;
`;

const mainStyle = css`
  height: 830px;
`;

const App: FC = () => {
  return (
    <div className="App">
      <div className="main" css={mainStyle}>
        <Home />
      </div>
      <footer css={footerStyle}>
        <p css={copyRightStyle}>🄫2022年 aokuma</p>
      </footer>
    </div>
  );
};

export default App;
