import React from 'react'

const SegundoComponente = () => {

    const libros =["El Hobbit", "El Silmarillion", "El Señor de los Anillos"]

  return (
    <div className='segundo-componente'>
      <h1>Listado de libros</h1>
      <ul>
        {
            libros.map((libro, indice) => {
                return <li key={indice}>{libro}</li>
            })
        }
      </ul>
    </div>
  )
}

export default SegundoComponente
