import { useEffect } from 'react'
import Paciente from "./Paciente"

const Listado = ({pacientes, setPaciente, eliminarPaciente}) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 top-0 right-0">

      { pacientes && pacientes.length ? (

        <>
          <h2 className="font-black text-3xl text-center md:text-start ml-2">Lista de pacientes</h2>
          <p className="text-lg my-5 text-center md:text-start ml-2">Gestiona tus {""}<span className="font-bold text-xl text-indigo-600">Pacientes y citas</span></p>
          <div className="top-auto right-auto h-screen md:overflow-y-scroll mx-0 md:mx-2 px-2">
            { pacientes.map( paciente => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))} 
          </div>
        </>

      ) : (

        <>
          <h2 className="font-black text-3xl text-start ml-2">Aun no tienes Pacientes</h2>
          <p className="text-lg my-5 text-start ml-2">Agrega tus pacientes {""}<span className="font-bold text-xl text-indigo-600">Y los podrás ver en ésta sección</span></p>
        </>

      )
      
      } 
    </div>
  )
}

export default Listado