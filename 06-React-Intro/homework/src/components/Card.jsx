import React from 'react';
import s from '../styles/Card.module.css'

export default function Card(props) {
  // acá va tu código

  const tempMax = props.max

  const tempMin = props.min

  return (
    <div className= {`${s.card}`} >
    <h4>{props.name}</h4>
    <button onClick={props.onClose} className={`${s.btn}`}>x</button>
    <div className={`${s.middleDiv}`}>
    <p>Max</p>
    <p>{tempMax}</p>
    <p>Min</p>
    <p>{tempMin}</p>
    </div>
  <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Error!" />
  </div >
  )
};