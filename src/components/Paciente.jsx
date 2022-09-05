import { useState } from "react";
import Exito from "./Exito";

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {


  const {nombre, referencia, email, contacto, fecha, sintomas, id} = paciente;

  const handleEliminar = () => {
      const confirma = confirm(`Deseas eliminar al paciente: ${nombre}?`)
      if(confirma){
        eliminarPaciente(id);
      }
  }

  return (
    <>
      <div className="bg-white shadow-xl rounded-xl p-5 md:mx-auto mb-4 w-full md:flex justify-between relative items-start gap-2">
            <div className="border py-2 px-3 rounded shadow md:w-1/2">
                <p className="font-normal text-md text-indigo-600">Nombre: {''}
                <samp className="text-black font-sans">{nombre}</samp></p>
                <p className="font-normal text-md text-indigo-600">Acompañante: {''}
                <span className="text-black">{referencia}</span></p>
                <p className="font-normal text-md text-indigo-600">Email: {''}
                <span className="text-black">{email}</span></p>
                <p className="font-normal text-md text-indigo-600">Telefono: {''}
                <samp className="text-black">{contacto}</samp></p>
                <p className="font-normal text-md text-indigo-600">Fecha: {''}
                <span className="text-black">{fecha}</span></p>
                <div className="flex gap-2 p-2 items-center justify-center">
                  <button
                      onClick={() => setPaciente(paciente)}
                      className="pt-1 pb-2 px-9 md:px-14 bg-indigo-600 text-white rounded-lg shadow-lg cursor-pointer my-1 hover:bg-indigo-700 mx-auto duration-300">Editar
                  </button>
                  <button
                      onClick={handleEliminar}
                      className="pt-1 pb-2 px-8 md:px-10 bg-red-600 text-white rounded-lg shadow-lg cursor-pointer my-1 hover:bg-red-700 mx-auto duration-300">Eliminar
                  </button>
                </div>
            </div>
            <div className="border py-2 px-3 rounded shadow md:w-1/2">
                <p className="font-semibold text-md text-indigo-700 text-justify">Síntomas: {''}<br/>
                <span className="text-black font-normal">{sintomas}</span></p>
                <button
                  onClick={handleEliminar}
                  className=" text-white font-normal text-md border pt-0 pb-1 px-[5px] leading-none bg-red-600 rounded-full hover:bg-red-700 absolute top-2 right-2">x</button>
            </div>
        </div>
    </>
  )
}

export default Paciente