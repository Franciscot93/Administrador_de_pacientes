

const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {
  

  const handleEliminar=()=>{
    const confirmar= confirm('Deseas eliminar este paciente?')
    if(confirmar){eliminarPaciente(id)}
  }
  

  const {nombre, propietario,email,fecha,sintomatologia,id}=paciente
  return (
    <div className="mt-3 mx-5 my-10 px-5 py-10 rounded-xl bg-white shadow-md">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {""}
          <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {""}
          <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {""}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta: {""}
          <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas: {""}
          <span className="font-normal normal-case">{sintomatologia}</span>
        </p>

        <div className="flex justify-between mt-10 ">
          <button onClick={()=>setPaciente(paciente)} className="transition-colors shadow-md py-2 px-10 bg-indigo-600 hover:bg-indigo-700 font-bold text-white rounded-sm m-1 text-center" type="button">
            Editar
          </button>

          <button onClick={handleEliminar} className="transition-colors shadow-md py-2 px-10 bg-red-600 hover:bg-red-700 font-bold text-white rounded-sm m-1  text-center" type="button">
            Eliminar
          </button>
        </div>

      </div>
  )
}

export default Paciente
