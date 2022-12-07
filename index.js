import React from "react";
import './ModalAmigo.css';  
import {contactoContext} from "./../Context/contactoProvider";
import AgregarAmigo from "../AgregarAmigo";




function ModalAmigo() {

    let {setModal} = React.useContext(contactoContext);
    let [amigui,serAmigui]=React.useState
    const modal_cancelar=(event)=>{
        event.preventDefault();
        setModal(false);
    }

    const modal_guardar=(event)=>{
        event.preventDefault();
        AgregarAmigo(amigui);
        setModal(false);
    }

    const onChangeNombre=(event)=>{
        let amiguiTemporal=amigui;
        amiguiTemporal.nommbre=event.target.value;
        setAmigui(amiguiTemporal);
    }



    return(
        <div className="modal">
        <h1 className="modal_header"> Modal Amigo</h1>
        <form className="modal_formulario">
            <input typeof="text" placeholder="Nombre" value={amigui.nommbre} onChange={modal_guardar}/>
            <input typeof="text" placeholder="Email" value={amigui.correo}/>
            <input typeof="text" placeholder="Telefono" value={amigui.telefono}/>
            <button typeof="sumbit" oneClick={modal_guardar}>Guardar</button>
            <button oneClick={modal_cancelar}>Cancelar</button>
        </form>

        </div>
    )
}

export default ModalAmigo;