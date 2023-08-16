import {useState} from 'react'
import './App.css'
import Card from './components/Card'
import Form from './components/Form'

function App() {

  const [comprar, setComprar] = useState(false); 

  let extintores = [ 
    {id: 1,  agente: 'Hallon', clase: 'ABC'},
    {id: 2,  agente: 'Polvo', clase: 'ABC'},
    {id: 3,  agente: 'Co2', clase: 'BC'},
    {id: 4,  agente: 'Agua', clase: 'A'},
  ]

  return (
    <>
      {extintores.map((matafuego) => <Card matafuego={matafuego} key={matafuego.id} setComprar={setComprar} />)}
      {comprar && <Form/>}
    </>
  )
}

export default App
