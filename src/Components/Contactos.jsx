import React, { useEffect, useReducer, useState } from 'react';
import { ContactosReducer } from '../reducers/ContactosReducer';
import FormulariAdd from './FormulariAdd';
import TablaContactos from './TablaContactos';

const Contactos = () => {
    const init = () => {
        const contactos = localStorage.getItem('contactos');
        console.log(contactos);
        return contactos ? JSON.parse(contactos) : [];
    };

    /* const [state, dispatch] = useReducer(ContactosReducer, []) */
    const [state, dispatch] = useReducer(ContactosReducer, [], init);

    useEffect(() => {
        localStorage.setItem('contactos', JSON.stringify(state));
    }, [state]);

    const [formview, setFormview] = useState(false);

    return (
        <div className="container mt-3">
            <button onClick={() => setFormview(!formview)} className='btn btn-success'>
                {formview ? '- Cerrar Formulario' : '+ Agregar Contacto'}
            </button>
            {formview && <FormulariAdd dispatch={dispatch} />}

            <TablaContactos contactos={state} dispatch={dispatch} />
        </div>
    );
};

export default Contactos;
