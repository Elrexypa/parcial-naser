import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

function App() {
  const [cardData, setCardData] = useState(null);

  const handleFormSubmit = (nombre, artista) => {
    setCardData({ nombre, artista });
  };

  return (
    <div className="App">
      <h1>Te queremos conocer</h1>
      <Form onFormSubmit={handleFormSubmit} />

      {cardData && <Card nombre={cardData.nombre} artista={cardData.artista} />}
    </div>
  );
}

export default App;