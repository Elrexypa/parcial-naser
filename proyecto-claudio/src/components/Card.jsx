import React from 'react';

const Card = ({ nombre, artista }) => {
  return (
    <div className="Card">
      <h1>Hola {nombre}</h1> 
      <h2><strong>Nos agrada saber que tu Banda o Artista favorito es:</strong> {artista}</h2>
    </div>
  );
};

export default Card;

