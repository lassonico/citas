import {useState, useEffect} from "react"
import Errores from "./Errores";
import Exito from "./Exito";
// El estado es: en qué se encuentra la app
// La funcion useState no se puede crear dentro de condicionales
const Formulario = ({ pacientes ,setPacientes, paciente}) => {

    const [nombre, setPaciente] = useState('');
    const [referencia, setReferencia] = useState('');
    const [email, setEmail] = useState('');
    const [contacto, setContacto] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);
    const [exito, setExito] = useState(false);

    useEffect(() => {
        if( Object.keys(paciente).length > 0 ) {
            setPaciente(paciente.nombre);
            setReferencia(paciente.referencia);
            setEmail(paciente.email);
            setContacto(paciente.contacto);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
    }, [paciente])

    const generarId = () => {
        const num1 = Math.random().toString(36).substring(2)
        const num2 = Date.now().toString(36);
        return num1 + num2
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validacion de form
        if([nombre, referencia, email, contacto, fecha, sintomas].includes('')){
            console.log('Todos los campos son obligatorios')
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 4000);
            return;
        }
        // Objeto de nombre
        const objPaciente = {
            nombre,
            referencia,
            email,
            contacto,
            fecha,
            sintomas
        }

        if(paciente.id){
         //Editando el registro
            objPaciente.id = paciente.id
            const pacienteActualizado = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState );
            setPacientes(pacienteActualizado);
            setPaciente({});
        }else{
         // Nuevo registro
            objPaciente.id = generarId();
            // Tomamos una copia del objeto existente para que no se reescriba el anterior y me cree uno nuevo.
            setPacientes([...pacientes, objPaciente]);
            setExito(true)
            setTimeout(() => {
                setExito(false)
            }, 4000)
            
        }
        // Reiniciamos el form
        setPaciente('');
        setReferencia('');
        setContacto('');
        setEmail('');
        setFecha('')
        setSintomas('');
        window.scroll(0,0)
    }

  return (
    <>  
        {error && <Errores>Todos los campos son obligatorios!!</Errores>}
        {exito && <Exito>El paciente se agregado exitosamente!</Exito>}
        <div className="md:w-1/2 lg:w-2/5 mx-2 md:mx-0">
            <h2 className="font-black text-3xl text-start">Seguimiento a Pacientes</h2>
            <p className="text-lg my-5 text-start">Agrega a tus Pacientes y {''} <span className="font-bold text-xl text-indigo-600">Gestionalos</span></p>
            <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl p-5 mb-10 h-auto">
                <div className="mb-3">
                    <label htmlFor="nombre" className="block font-semibold text-lg text-gray-600">Nombre Paciente</label>
                    <input 
                        type="text"
                        placeholder="Nombre del nombre"
                        className="w-full border p-2 mt-1 rounded-md text-lg outline-1 outline-indigo-400"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setPaciente(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="referencia" className="block font-semibold text-lg text-gray-600">Acompañante</label>
                    <input 
                        type="text"
                        placeholder="Nombre del acompañante"
                        className="w-full border p-2 mt-1 rounded-md text-lg outline-1 outline-indigo-400"
                        id="referencia"
                        value={referencia}
                        onChange={(e) => setReferencia(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="block font-semibold text-lg text-gray-600">Email</label>
                    <input 
                        type="text"
                        placeholder="correo@mail.co"
                        className="w-full border p-2 mt-1 rounded-md text-lg outline-1 outline-indigo-400"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3 flex gap-3 justify-between">
                    <div className="w-1/2">
                        <label htmlFor="contacto" className="block font-semibold text-lg text-gray-600">Teléfono</label>
                        <input 
                            type="text"
                            inputMode="number"
                            placeholder="Telefono de contacto"
                            className="w-full border p-2 mt-1 rounded-md text-lg outline-1 outline-indigo-400"
                            id="contacto"
                            value={contacto}
                            onChange={(e)=> setContacto(e.target.value)}
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="fecha" className="block font-semibold text-lg text-gray-600">Fecha de alta</label>
                        <input 
                            type="date"
                            className="w-full border p-2 mt-1 rounded-md text-lg outline-1 outline-indigo-400"
                            id="fecha"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="sintomas" className="block font-semibold text-lg text-gray-600">Sintomas</label>
                    <textarea 
                        type="text"
                        placeholder="Sintomas del paciente"
                        className="w-full border p-2 mt-1 rounded-md text-lg outline-1 outline-indigo-400"
                        id="sintomas"
                        value={sintomas}
                        onChange={(e)=> setSintomas(e.target.value)}
                    />
                </div>
                <input 
                    type="submit"
                    className="bg-indigo-600 pt-2 pb-3 px-7 text-white my-3 w-full rounded-md text-xl uppercase shadow-xl cursor-pointer hover:bg-indigo-800 duration-[0.3s]"
                    value={ paciente.id ? "Guardar Cambios" : "Agregar Paciente" }
                />
            </form>
        </div>
    </>
  )
}

export default Formulario