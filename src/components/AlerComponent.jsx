import React, { useEffect } from 'react'

export const AlerComponent = () => {

    //montar y desmontar un componente
    useEffect(() => {
        //cuando el componente se monta, solo se ejecuta una vez
      alert('component is rendered')

      return() => {
        alert('Component desmontado')
      }
    }, [])
    



  return (
    <div>
        <h1>hola cin c:</h1>
        <button onClick={e => {
            alert('Welcome!')
        }}>Mostrar alerta</button>
    </div>
  )
}
