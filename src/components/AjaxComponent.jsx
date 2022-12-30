import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {
  const [users, setUsers] = useState([])

  // Generico /básico para rellenar este estado

  const getStaticUsers = () => {
    setUsers([ // a lo que quiero que cambie
      {
        id: 7,
        email: 'michael.lawson@reqres.in',
        first_name: 'cin',
        last_name: 'Lawson',
        avatar: 'https://reqres.in/img/faces/7-image.jpg'
      },
      {
        id: 8,
        email: 'lindsay.ferguson@reqres.in',
        first_name: 'cin',
        last_name: 'Ferguson',
        avatar: 'https://reqres.in/img/faces/8-image.jpg'
      },
      {
        id: 9,
        email: 'tobias.funke@reqres.in',
        first_name: 'cin',
        last_name: 'Funke',
        avatar: 'https://reqres.in/img/faces/9-image.jpg'
      }
    ])
  }

  useEffect(() => {
    getStaticUsers()
  }, [])

  return (
    <div>
      <h2>Listado de usuarios via Ajax</h2>
      {users.map(user => {
        return <li key={user.id}>{user.name}</li>
      })}
    </div>
  )
}
