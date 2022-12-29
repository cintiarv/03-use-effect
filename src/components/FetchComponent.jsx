import React, { useEffect, useState } from 'react'


export const FetchComponent = () => {
    const [users, setUsers] = useState([])


const getUsuariosAjaxPms = () => {
    fetch('https://reqres.in/api/users?page=2')
    .then(res => res.json()) //convirtiendo la respuesta json a un objeto
    .then(res_final => {
        setUsers(res_final.data)
        console.log('USERS', users);
    },
    error => {
        console.log(error);
    })
} 

const getUsuariosAjaxAsyncAw = async() => {
const request = await  fetch('https://reqres.in/api/users?page=1')
const {data} = await request.json()
setUsers(data)
}

/* useEffect(() => {
    getUsuariosAjaxPms()
}, []) */

useEffect(() => {
    getUsuariosAjaxAsyncAw()
}, [])

  return (
    <div>
        <h2>Listado de usuarios via Ajax</h2>
{users.map(user=> {
    return <li key={user.id}>{user.email}</li>
})}
    </div>
  )
}
