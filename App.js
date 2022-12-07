import logo from './logo.svg';
import './App.css';
import React from 'react';

import Busqueda from './Busqueda/Busqueda';
import Lista from './Lista/Lista';
import Contacto from './Contacto/Contacto';
import AgregarAmigo from './AgregarAmigo';
import {contactoContext,contactoProvider} from './Context/contactoProvider';
import ModalAmigo from './ModalAmigo';


function App() 
{

  
  return (
    <contactoProvider>
      <contactoContext.Consumer>

      {({
cantidadAmigos,
valorBusqueda,
setValorBusqueda,
contactosFiltro,
borrarAmigo,
modal
      )}=(
        <React.Fragment>
        <h1>h1 desde App.js</h1>
    <Busqueda valorBusqueda={valorBusqueda} setValorBusqueda={setValorBusqueda} />
    <Lista valorBusqueda={valorBusqueda}/>
    <AgregarAmigo />
    <Lista>
     {
        contactosFiltro.map((contacto)=>
        {
          return(<contacto 
                  nombre={contacto.nombre}
                  telefono={contacto.telefono}
                  correo={contacto.correo}
                  borrarAmigo={()=>borrarAmigo(contacto.telefono)}/>)
        })
      }

    </Lista>
    {contactosFiltro.length===0 && <h1> No hay Amigos T_T</h1>}
    {modal && <ModalAmigo />}
    </React.Fragment>

      )}
      </contactoProvider>
      </contactoContext.Consumer>
    </React.Fragment>
    
  );
}




export default App;
