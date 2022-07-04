import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { history } from '../../config/init';

const NotFound = () => {

  const navigate = useNavigate()

  return (
    <div>
      La pagina que estas buscando no existe.
      <button onClick={() => navigate(-1)}>
        Ir al Inicio
      </button>
    </div>
  )
}

export default NotFound