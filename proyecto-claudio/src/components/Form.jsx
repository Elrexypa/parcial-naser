import React, { useState } from 'react';

const Form = ({ onFormSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [artista, setArtista] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre.trim().length < 3 || nombre.trim().startsWith(' ') || artista.trim().length < 6) {
      setErrorMessage('Por favor chequea que la información sea correcta');
    } else {
      setErrorMessage('');
      onFormSubmit(nombre, artista);
    }
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre" > </label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          placeholder='Ingresa tu nombre'
          onChange={(e) => setNombre(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="artista" > </label>
        <input
          type="text"
          id="artista"
          value={artista}
          placeholder='Tu Banda o Artista favorito'
          onChange={(e) => setArtista(e.target.value)}
          required
        /><br /><br />

        <button id='boton' type="submit">Enviar</button>
      </form>
      
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default Form;