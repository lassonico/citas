import { useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Exito from './components/Exito'

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});
  const [exito, setExito] = useState(false);

  useEffect(() =>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
    setExito(true);
    setTimeout(() =>{
      setExito(false);
    }, 4000)
    window.scroll(0,0)
  }
  
  return (
    <div className="container mx-auto md:mt-5 mt-2">
      <Header />
      <div className='my-7 md:flex mx-auto relative'>
        {exito && <Exito>El paciente ha sido eliminado!</Exito>}
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
        />
        <Listado
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
