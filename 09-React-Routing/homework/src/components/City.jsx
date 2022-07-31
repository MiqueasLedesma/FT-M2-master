import React from 'react'

export const City = ({ cityId }) => {
  if (!cityId) {
    alert('La ciudad no existe!');
    return <div>La ciudad NO existe</div>
  }
  return (
    <div className="ciudad">
    <div className="container">
        <h2>{cityId.name}</h2>
        <div className="info">
            <div>Temperatura: {(cityId.temp)} ºC</div>
            <div>Clima: {cityId.weather}</div>
            <div>Viento: {cityId.wind} km/h</div>
            <div>Cantidad de nubes: {cityId.clouds}</div>
            <div>Latitud: {cityId.latitud}º</div>
            <div>Longitud: {cityId.longitud}º</div>
        </div>
</div>
</div>
  )
}
