import { useState } from 'react'
import './App.css'
import { Buscador } from './componets/Buscador'

function App() {
  const [ciudades, setCiudades] = useState([])
  const [buscador, setBuscador] = useState(' ')

  const peticionApi = async (ciudad) => {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${ciudad}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ee49666199mshddfe0ec3e78793ep11d5aejsn81acd6240afa',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const nuevaCiudad = result;
      setCiudades([nuevaCiudad, ...ciudades])
    } catch (error) {
      console.error(error);
    }
}

  return (
    <>
      
      <div className="container">
        <header>
          <Buscador buscador={buscador} setBuscador={setBuscador} peticionApi={peticionApi}/>

        </header>
        <main className="container-header">
          { ciudades.map( (ciudad)=>{ return <article className='card' key={ciudad.location.tz_id}>
            <div className="card-header">
              <div className="card-header-icon">
                <img src={`http:${ciudad.current.condition.icon}`} alt="icon weather api"/>
              </div>
              <div className="card-header-info">
                <p className="card-header-info-condition">{ciudad.current.condition.text}</p>
                <p className="card-header-info-temp">{ciudad.current.temp_c}<spam>°</spam></p>
                <p className="card-header-info-city">{ciudad.location.name}, {ciudad.location.region}, {ciudad.location.country}</p>
              </div>
            </div>
            <div className="card-body">
              <p className="card-body-info-wind">
                Wind: <span>{ciudad.current.wind_kph},{ciudad.current.wind_dir} km/h</span>
              </p>
              <p className="card-body-info-humidity">
                Humidity: <span>{ciudad.current.humidity}%</span>
              </p>
              <p className="card-body-info-pressure">
                Pressure: <span>{ciudad.current.pressure_in}%</span>
              </p>
            </div>
          </article>})}
        </main>
        <div>

        </div>
      </div>

    </>
  )
}

export default App
