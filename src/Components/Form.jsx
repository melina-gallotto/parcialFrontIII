import { useState } from 'react'
import Card from './Card'

const Form = () => {

    const [usuario, setUsuario] = useState({
        nombre: '',
        peliculaFavorita: ''
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        // Capturo y valido los inputs
        if(usuario.nombre.length >= 3 && usuario.peliculaFavorita.length >= 6){
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }
    console.log(usuario)
    
  return (
    <div>
        <label>Ingresa tu nombre </label>
        <input type = "text" value={usuario.nombre} 
            onChange={(event) => setUsuario({...usuario, nombre: event.target.value})}
        />
        <label>Ingresa tu película favorita </label>
        <input type = "text"value={usuario.peliculaFavorita} 
            onChange={(event) => setUsuario({...usuario, peliculaFavorita: event.target.value})}
        />
        <button type="submit" onClick={handleSubmit}>Enviar</button>
        {show && <Card />}
        {error && <h4 style={{color: 'red'}}>Por favor chequea que la información sea correcta</h4>}
    </div>
  )
}

export default Form