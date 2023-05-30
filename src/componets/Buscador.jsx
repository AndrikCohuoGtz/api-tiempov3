import React from "react";
import './Buscador.css'
export const Buscador = ({buscador, setBuscador, peticionApi}) => {
    
    const generarBusqueda = ({target}) => {
        setBuscador(target.value)
    }
    const agregarTarjeta = async (e) =>{
        e.preventDefault()
        const nuevaCiudad =+ await peticionApi(buscador) 

        console.log(nuevaCiudad)
    }
    
    return (
        <div>
            <input type="text" className="input" name="buscador" value={buscador} onChange={generarBusqueda}/>
            <button type="submit" className="btn" onClick={agregarTarjeta}>Buscar</button>
        </div>
    )
}