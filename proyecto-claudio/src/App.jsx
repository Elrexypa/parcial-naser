import {useState} from 'react'
import './App.css'
import Card from './components/Card'
import Form from './components/Form'

function App() {

  const [comprar, setComprar] = useState(false); 

  let extintores = [ 
    {id: 1, clase: 'ABC', agente: 'Hallon'},
    {id: 2, clase: 'ABC', agente: 'Polvo'},
    {id: 3, clase: 'BC', agente: 'Co2'},
    {id: 4, clase: 'A', agente: 'Agua'},
  ]

  return (
    <>
      {extintores.map((matafuego) => <Card matafuego={matafuego} key={matafuego.id} setComprar={setComprar} />)}
      {comprar && <Form/>}
    </>
  )
}

export default App
