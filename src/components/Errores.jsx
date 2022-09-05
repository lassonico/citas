import React from 'react'

const Errores = ({children}) => {
  return (
    <div className="fixed top-4 left-5 py-3 px-5 bg-red-600 rounded-lg shadow-gray-400 shadow-lg animate-bounce">
        <p className="text-white font-semibold text-lg">{children}</p>
    </div>
  )
}

export default Errores