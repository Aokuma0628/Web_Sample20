import { VFC } from 'react';
import './App.css';
import Home from './Home';

const App: VFC = () => {
  return (
    <div className="App">
      <div className="main">
        <Home />
      </div>
      <footer id='footer-style'>
        <p id="copy-right">🄫2022年 aokuma</p>
      </footer>
    </div>
  );
};

export default App;
