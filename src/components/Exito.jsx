import React from 'react'

const Exito = ({children}) => {
  return (
    <div className="fixed top-4 left-5 py-3 px-5 bg-lime-500 rounded-lg shadow-gray-400 shadow-lg bounce">
        <p className="text-white font-semibold text-lg">{children}</p>
    </div>
  )
}

export default Exito