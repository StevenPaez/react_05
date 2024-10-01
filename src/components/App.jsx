import { useState } from 'react';
import '../styles/App/App.css'
import ItemListado from './ItemListado'

function App() {
  const [endPoint, setEndPoint] = useState('users');

  const onSubmit = (e) => {
    const tipo = e.target.outerText === 'Usuarios' ? 'users' : 'comments';
    setEndPoint(tipo);
  }

  return (
    <>
      <h1>Usuarios</h1>
      <ItemListado endPoint={endPoint}></ItemListado>
      <button
        onClick={onSubmit}
      >
        Comentarios
      </button>
      <button
        onClick={onSubmit}
        style={{marginLeft: 20}}
      >
        Usuarios
      </button>
    </>
  )
}

export default App
