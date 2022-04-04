import React, { useEffect, useReducer } from 'react'
import { ContactosReducer } from '../reducers/ContactosReducer'
import FormulariAdd from './FormulariAdd'
import TablaContactos from './TablaContactos'


const Contactos = () => {

    const init = () => {
        const contactos = localStorage.getItem('contactos')
        console.log(contactos);
        return contactos ? JSON.parse(contactos) : []
    }

    /* const [state, dispatch] = useReducer(ContactosReducer, []) */
    const [state, dispatch] = useReducer(ContactosReducer, [], init)
    
    useEffect(() => {
      localStorage.setItem('contactos', JSON.stringify(state))
    }, [state])
    

  return (
    <div className='container mt-3'>
            <FormulariAdd dispatch={dispatch} />
            <TablaContactos contactos={state} dispatch={dispatch} />
    </div>
  )
}

export default Contactos