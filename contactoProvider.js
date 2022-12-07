import React from "react";



const contactoContext=React.createContext();
function contactoProvider(props) {

    let contactos;
  

  if (!localStorage.contactos) 
  {
    localStorage.setItem("contactos",JSON.stringify([]));
    const contactos=[];
  }
  else{
    const contactos=JSON.parse(localStorage.contactos);
  }

  let [contactosList,setContactosList]=React.useState(contactos);
  let [valorBusqueda,setValorBusqueda]=React.useState("");
  let [modal,setModal]=React.useState(false);

  let cantidadAmigos=contactosList.length;
  let contactosFiltro;

  function borrarAmigo(telefono) 
  {
    const indice=contactos.findIndex(contacto=>contacto.telefono==telefono	);
    let contactoTemporal=[...contactos];
    contactoTemporal.splice(indice,1);
    localStorage.setItem("contactos",JSON.stringify(contactoTemporal));
    setContactosList(contactoTemporal);
  }
  function AgregarAmigo(amigp) {
    let contactoTemporal=[...contactos];
    contactoTemporal.push(amigp);
    localStorage.setItem("contactos",JSON.stringify(contactoTemporal));
    setContactosList(contactoTemporal);
  }



  return (
    <React.Fragment>
    <contactoProvider>
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
      </contactoProvider>

    </React.Fragment>
    
  );

    return(
        <contactoContext.Provider value={{
            cantidadAmigos,
            valorBusqueda,
            setValorBusqueda,
            contactosFiltro,
            borrarAmigo,
            AgregarAmigo
        }}>
            {props.children}
        </contactoContext.Provider>
    );

}

export {contactoContext, contactoProvider};