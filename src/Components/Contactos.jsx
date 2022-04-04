import React, { useReducer } from 'react'
import { ContactosReducer } from '../reducers/ContactosReducer'
import FormulariAdd from './FormulariAdd'
import TablaContactos from './TablaContactos'

const contactos = [
    {
        id: "0001",
        nombre: "Camilo",
        numero: "323346585"
    },
    {
        id: "0002",
        nombre: "Luis",
        numero: "45646465"
    },
    {
        id: "0002d",
        nombre: "Luisa",
        numero: "45646465"
    },
]

const Contactos = () => {

    const [state, dispatch] = useReducer(ContactosReducer, contactos)

    
  return (
    <div className='container mt-3'>
            <FormulariAdd dispatch={dispatch} />
            <TablaContactos contactos={state} dispatch={dispatch} />
    </div>
  )
}

export default Contactos