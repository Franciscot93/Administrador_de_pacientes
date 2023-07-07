import React from "react";
import { useState,useEffect } from "react";
import Error from "./Error";
const Formulario = ({pacientes,setPacientes,paciente}) => {

  const [nombre,setNombre]=useState('');
  const [propietario,setPropietario]=useState('');
  const [email,setEmail]=useState('');
  const [fecha,setFecha]=useState('');
  const [sintomas,setSintomas]=useState('');

  const [error,setError]=useState(false)

  useEffect(()=>{
    if(paciente){
      setNombre(paciente.nombre)
    setPropietario(paciente.propietario)
    setEmail(paciente.email)
    setFecha(paciente.fecha)
    setSintomas(paciente.sintomatologia)
    }
    


  },[paciente])

  const generarId=()=>{
      const date=(Date.now()).toString(36)
      const random=((Math.random()).toString(36)).substring(2)

      return date+random
  }
  
const handleSubmit=(e)=>{
  e.preventDefault()
 // validacion
 if([nombre, propietario,email,fecha,sintomas].includes('')){
  setError(true)
  return
 }
  setError(false)
  const paciente= {'nombre':nombre,'propietario':propietario,'email':email,'fecha':fecha,'sintomatologia':sintomas,'id':generarId()}
  setPacientes([...pacientes,paciente])


  setNombre('')
  setPropietario('')
  setEmail('')
  setFecha('')
  setSintomas('')


  
}

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form 
      onSubmit={handleSubmit}
      className="bg-white shadow-md mb-10 rounded-lg py-10 px-5 mx-5" action="">
        
        {error ? <Error mensaje={'Se registran errores, revisa los datos'} />:null}
        
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascotaNombre"
          >
            Nombre Mascota
          </label>
          <input
            id="mascotaNombre"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietarioNombre"
          >
            Nombre Propietario
          </label>
          <input
            id="propietarioNombre"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e)=> setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="emailPropietario"
          >
            E-MAIL
          </label>
          <input
            id="emailPropietario"
            type="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="propietario@email.com"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="fechaDeAlta"
          >
            Fecha de alta
          </label>
          <input
            id="fechaDeAlta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e)=> setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="sintomas"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e)=> setSintomas(e.target.value)}
          />
        </div>
        

        <input type="submit" 
        className=" bg-indigo-600 w-full p-3 text-white hover:bg-indigo-700 cursor-pointer transition-colors uppercase font-bold"
        value="Agregar Paciente"/>
      </form>
    </div>
  );
};

export default Formulario;
