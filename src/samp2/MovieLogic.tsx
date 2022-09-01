import React, { FC, useState } from 'react';
import Movie from './Movie';

export type Props = {
  seatArr: boolean[];
  count: number;
  total: number;
  price: number;
  clickHandle: ( idx: number) => void;
  changeHandle: (e: React.ChangeEvent<HTMLSelectElement>) => void ;
};

enum INIT_VALUE {
  INIT_MOVIE_PRICE = 10,
  INIT_SEAT_COUNT = 48,
}

const getMovieSeat = (): boolean[] => {
  const seatArrStr = localStorage.getItem('seatArr');
  let movieSeat:boolean[] = [];

  if (seatArrStr) {
    movieSeat = JSON.parse(seatArrStr);
  }
  else {
    movieSeat = new Array<boolean>(INIT_VALUE.INIT_SEAT_COUNT);
    movieSeat.fill(false);
  }

  return movieSeat;
};

const getMoviePrice = (): number => {
  const moviePriceStr = localStorage.getItem('selectedMoviePrice');
  
  let moviePrice = INIT_VALUE.INIT_MOVIE_PRICE;

  if (moviePriceStr) {
    moviePrice = parseInt(moviePriceStr);
  }

  return moviePrice;
};

const MovieLogic: FC = () => {
  const movieSeat = getMovieSeat();
  const moviePrice = getMoviePrice();
  const selectedCount = movieSeat.filter((val) => val === true).length;

  const [seatArr, setSeatArr] = useState(movieSeat);
  const [count, setCount] = useState(selectedCount);
  const [price, setPrice] = useState(moviePrice);
  const [total, setTotal] = useState(moviePrice * selectedCount);

  const updateSelectedCount = () => {
    const selectSeats = seatArr.filter((val) => val === true);
    const selectSeatsCount = selectSeats.length;

    localStorage.setItem('seatArr', JSON.stringify(seatArr));

    setCount(selectSeatsCount);
    setTotal(selectSeatsCount * price);
  };

  const changeSeatState = (idx: number): void => {
    seatArr[idx] = !seatArr[idx];
    setSeatArr([...seatArr]);
    updateSelectedCount();
  };

  const changeMoviePrice = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const moviePrice = parseInt(e.target.value, 10);
    setPrice(moviePrice);
    setTotal(moviePrice * count);

    localStorage.setItem('selectedMoviePrice', String(moviePrice));
  };

  return (
    <>
      <Movie seatArr={seatArr} count={count} total={total} price={price} 
        clickHandle={changeSeatState} changeHandle={changeMoviePrice} />
    </>
  );
};

export default MovieLogic;
