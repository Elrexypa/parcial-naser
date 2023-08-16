import React from 'react'

const Card = ({matafuego, setComprar}) =>{
    return(
        <div >
            <h3>{matafuego.agente}</h3>
            <h4>{matafuego.clase}</h4>
            <button onClick={ () => setComprar(true)}>Seleccionar extintor</button>
        </div>
    )
}

export default Card
