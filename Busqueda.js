import React from "react";
import "./Busqueda.css";
import {contactoContext} from "./../Context/contactoProvider";

function Busqueda(props)
{
    let {valorBusqueda,setValorBusqueda}=React.useContext(contactoContext);
    function actualizaTexto(event) 
    {
        console.log(event.target.value);
        setValorBusqueda(event.target.value);
        
    }

    return(
        <div className="contenedor">
            <input onChange={actualizaTexto}
            value={valorBusqueda}></input>
           
        </div>
    );
}

export default Busqueda;


/*
<button> dale click</button>
            <h2>{props.valorBusqueda}</h2>
            */