

const Paciente = ({paciente}) => {

  const {nombre, propietario,email,fecha,sintomatologia}=paciente
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
      </div>
  )
}

export default Paciente
