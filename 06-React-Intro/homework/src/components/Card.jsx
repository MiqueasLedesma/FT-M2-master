import React from 'react';

export default function Card(props) {
  // acá va tu código

const tempMax = props.max

const tempMin = props.min

  return <div>
    <button onClick={props.onClose}>x</button>
    <p>Max</p>
    <p>{tempMax}°C</p>
    <p>Min</p>
    <p>{tempMin}°C</p>
    <p>Ciudad</p>
    <h4>{props.name}</h4>
  <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Error!" />
  </div>
};