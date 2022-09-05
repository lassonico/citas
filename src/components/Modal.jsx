import React from 'react'

const Modal = ({paciente, handleEliminar}) => {

    console.log(paciente)
    
  return (
    <div className='fixed top-0 left-0 z-10 w-screen h-screen bg-[#000000e8] flex items-center px-5'>
        <div className='lg:w-1/3 md:w-2/3 w-full block h-auto bg-white rounded-lg p-5 md:mx-auto'>
            <h2 className='font-black text-3xl text-center mb-5'>Advertencia</h2>
            <h3 className='text-indigo-600 font-bold text-xl text-center mb-7'>¿Deseas eliminar el paciente </h3>
            <div className='flex gap-2 p-5 justify-between items-center'>
                <button
                    className='text-white w-1/2 md:text-lg uppercase py-2 px-6 bg-indigo-600 rounded-lg shadow-lg'
                >Confirmar
                </button>
                <button
                    onClick={handleEliminar}
                    className='text-white w-1/2 md:text-lg uppercase py-2 px-6 bg-red-600 rounded-lg shadow-lg'
                >Cancelar
                </button>
            </div>
        </div>
    </div>
  )
}

export default Modal