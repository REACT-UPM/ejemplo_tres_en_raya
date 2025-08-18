import * as React from 'react';
import { Routes, Route, Link } from "react-router";
import Tictactoe from './TicTacToe';
import Juego2 from './Juego2';
import Home from './Home';


export default function App() {
  return (
    <div className='App'>
      <h1>Mis Juegos</h1>
        <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
          <Link to="/">Home</Link> |{' '}
          <Link to="/tictactoe">TicTacToe</Link> |{' '}
          <Link to="/juego2">Juego2</Link>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tictactoe" element={<Tictactoe />} />
        <Route path="juego2" element={<Juego2 />} />
      </Routes>
    </div>
  );
}