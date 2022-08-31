import { FC } from 'react';
import './Samp1.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../Home';
import FormLogic from './FormLogic';

const Samp1: FC = () => {
  return (
    <div className="Samp1">
      <h2>サンプル1</h2>
      <FormLogic />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <p><Link className="return-top" to="/">トップページに戻る</Link></p>
    </div>
  );
};

export default Samp1;
