import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';



export default function App() {
  return (
    <div className="card">
      <img
        src="./css/desafio react.png"
        alt="Gramado"
        className="card-image"
      />
      <div className="card-body">
        <div className="badge">9 DIAS / 8 NOITES</div>
        <h2 className="title">Pacotes para Gramado</h2>
        <div className="rating">
          <span className="score">9.4</span>
          <span className="stars">★★★☆☆</span>
        </div>
        <p className="departure">Saindo de São Paulo</p>
        <p className="combo">Hotel + Aéreo</p>
        <div className="discount">Economize R$84</div>
        <div className="price-info">
          <p className="old-price">R$ 1.266</p>
          <p className="new-price">R$ 1.182</p>
          <p className="note">Taxas e impostos não inclusos</p>
        </div>
      </div>
    </div>
  );
}




