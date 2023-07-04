import React from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes}) => {
  
  
  return (

    <div className="md:w-1/2 lg:w-3/5 ml-1 md:h-screen overflow-scroll">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-20 text-center">
        Administra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y citas</span>
      </p>

      {pacientes.map((paciente)=>{
       
        return (
          <Paciente key={paciente.id} paciente={paciente}/>
        )
      })}

      
      
    </div>
  );
};

export default ListadoPacientes;
