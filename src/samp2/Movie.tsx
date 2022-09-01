/* eslint-disable max-len */
import React, { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Props } from './MovieLogic';


const movieContainerStyle = css`
  margin: 2px 0;
`;

const movieContainerSelectStyle = css`
  background-color: #fff;
  border: 0;
  border-radius: 5px;
  font-size: 14px;
  margin-left: 10px;
  padding: 5px 15px 5px 15px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
`;

const containerStyle = css`
  background-color: #242333;
  perspective: 1000px;
  margin-bottom: 30px;
  margin-left: 70px;
`;

const showcaseStyle = css`
  background: rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  border-radius: 5px;
  color: #777;
  list-style-type: none;
  display: flex;
  justify-content: space-between;

  & .showcase.seat:not(.occupied):hover {
    cursor: default;
    transform: scale(1);
  }
`;

const showcaseListStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`;

const showcaseListSmallStyle = css`
  margin-left: 2px;
`;

const rowStyle = css`
  display: flex;
  margin: 0 auto;

  & div.seat {
    background-color: #444451;
    height: 12px;
    width: 15px;
    margin: 3px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
  & div.seat.occupied {
    background-color: #fff;
  }

  & div.seat.selected {
    background-color: #6feaf6;
  }

  & div.seat:nth-of-type(2) {
    margin-right: 18px;
  }

  & div.seat:nth-last-of-type(2) {
    margin-left: 18px;
  }

  & div.seat:not(.occupied):hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const screenStyle = css`
  background-color: #fff;
  height: 70px;
  position:relative;
  width: 200px;
  margin: 0 0 15px 0;
  transform: rotateX(-45deg);
  box-shadow: 0 3px 10px rgba(255, 255, 255, 0.7);
`;

const textStyle = css`
  margin: 5px 0;
  & span {
    color: #6feaf6;
  }
`;


const Movie: FC<Props> = ({seatArr, count, total, price, clickHandle, changeHandle}) => {

  return (
    <div>
      <div className="movie-container" css={movieContainerStyle}>
        <label >Pick a movie:</label>
        <select id="movie" css={movieContainerSelectStyle} onChange={changeHandle} value={price}>
          <option value="10">Avengers: Endgame ($10)</option>
          <option value="12">Joker ($12)</option>
          <option value="8" >Toy Story 4 ($8)</option>
          <option value="9" >The Lion King ($9)</option>
        </select>
      </div>

      <ul className="showcase" css={showcaseStyle}>
        <li css={[showcaseListStyle, rowStyle]}>
          <div className="seat"></div>
          <small css={showcaseListSmallStyle}>N/A</small>
        </li>
        <li css={[showcaseListStyle, rowStyle]}>
          <div className="seat selected"></div>
          <small css={showcaseListSmallStyle}>Selected</small>
        </li>
        <li css={[showcaseListStyle, rowStyle]}>
          <div className="seat occupied"></div>
          <small css={showcaseListSmallStyle}>Occupied</small>
        </li>
      </ul>

      <div className="container" css={containerStyle}>
        <div className="screen" css={screenStyle}></div>

        <div className="row" css={rowStyle}>
          {/* TODO: Hard Coding */}
          <div className={seatArr[0] ? 'seat selected' : 'seat'} onClick={() => clickHandle(0)}></div>
          <div className={seatArr[1] ? 'seat selected' : 'seat'} onClick={() => clickHandle(1)}></div>
          <div className={seatArr[2] ? 'seat selected' : 'seat'} onClick={() => clickHandle(2)}></div>
          <div className={seatArr[3] ? 'seat selected' : 'seat'} onClick={() => clickHandle(3)}></div>
          <div className={seatArr[4] ? 'seat selected' : 'seat'} onClick={() => clickHandle(4)}></div>
          <div className={seatArr[5] ? 'seat selected' : 'seat'} onClick={() => clickHandle(5)}></div>
          <div className={seatArr[6] ? 'seat selected' : 'seat'} onClick={() => clickHandle(6)}></div>
          <div className={seatArr[7] ? 'seat selected' : 'seat'} onClick={() => clickHandle(7)}></div>
        </div>
        <div className="row" css={rowStyle}>
          <div className={seatArr[8] ? 'seat selected' : 'seat'} onClick={() => clickHandle(8)}></div>
          <div className={seatArr[9] ? 'seat selected' : 'seat'} onClick={() => clickHandle(9)}></div>
          <div className={seatArr[10] ? 'seat selected' : 'seat'} onClick={() => clickHandle(10)}></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className={seatArr[11] ? 'seat selected' : 'seat'} onClick={() => clickHandle(11)}></div>
          <div className={seatArr[12] ? 'seat selected' : 'seat'} onClick={() => clickHandle(12)}></div>
          <div className={seatArr[13] ? 'seat selected' : 'seat'} onClick={() => clickHandle(13)}></div>
        </div>
        <div className="row" css={rowStyle}>
          <div className={seatArr[14] ? 'seat selected' : 'seat'} onClick={() => clickHandle(14)}></div>
          <div className={seatArr[15] ? 'seat selected' : 'seat'} onClick={() => clickHandle(15)}></div>
          <div className={seatArr[16] ? 'seat selected' : 'seat'} onClick={() => clickHandle(16)}></div>
          <div className={seatArr[17] ? 'seat selected' : 'seat'} onClick={() => clickHandle(17)}></div>
          <div className={seatArr[18] ? 'seat selected' : 'seat'} onClick={() => clickHandle(18)}></div>
          <div className={seatArr[19] ? 'seat selected' : 'seat'} onClick={() => clickHandle(19)}></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
        </div>
        <div className="row" css={rowStyle}>
          <div className={seatArr[20] ? 'seat selected' : 'seat'} onClick={() => clickHandle(20)}></div>
          <div className={seatArr[21] ? 'seat selected' : 'seat'} onClick={() => clickHandle(21)}></div>
          <div className={seatArr[22] ? 'seat selected' : 'seat'} onClick={() => clickHandle(22)}></div>
          <div className={seatArr[23] ? 'seat selected' : 'seat'} onClick={() => clickHandle(23)}></div>
          <div className={seatArr[24] ? 'seat selected' : 'seat'} onClick={() => clickHandle(24)}></div>
          <div className={seatArr[25] ? 'seat selected' : 'seat'} onClick={() => clickHandle(25)}></div>
          <div className={seatArr[26] ? 'seat selected' : 'seat'} onClick={() => clickHandle(26)}></div>
          <div className={seatArr[27] ? 'seat selected' : 'seat'} onClick={() => clickHandle(27)}></div>
        </div>
        <div className="row" css={rowStyle}>
          <div className={seatArr[28] ? 'seat selected' : 'seat'} onClick={() => clickHandle(28)}></div>
          <div className={seatArr[29] ? 'seat selected' : 'seat'} onClick={() => clickHandle(29)}></div>
          <div className={seatArr[30] ? 'seat selected' : 'seat'} onClick={() => clickHandle(30)}></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className={seatArr[31] ? 'seat selected' : 'seat'} onClick={() => clickHandle(31)}></div>
          <div className={seatArr[32] ? 'seat selected' : 'seat'} onClick={() => clickHandle(32)}></div>
          <div className={seatArr[33] ? 'seat selected' : 'seat'} onClick={() => clickHandle(33)}></div>
        </div>
        <div className="row" css={rowStyle}>
          <div className={seatArr[34] ? 'seat selected' : 'seat'} onClick={() => clickHandle(34)}></div>
          <div className={seatArr[35] ? 'seat selected' : 'seat'} onClick={() => clickHandle(35)}></div>
          <div className={seatArr[36] ? 'seat selected' : 'seat'} onClick={() => clickHandle(36)}></div>
          <div className={seatArr[37] ? 'seat selected' : 'seat'} onClick={() => clickHandle(37)}></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className={seatArr[38] ? 'seat selected' : 'seat'} onClick={() => clickHandle(38)}></div>
        </div>
      </div>

      <p className="text" css={textStyle}>
        You have selected <span id="count">{count}</span> 
        seats for a price of $<span id="total">{total}</span>
      </p>
    </div>
  );
};

export default Movie;
