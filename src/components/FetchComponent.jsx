import React, { useEffect, useState } from "react";

export const FetchComponent = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); //por defecto siempre estara cargando
  const [errors, setErrors] = useState('');

  const getUsuariosAjaxPms = () => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json()) // convirtiendo la respuesta json a un objeto
      .then(
        (res_final) => {
          setUsers(res_final.data);
          console.log("USERS", users);
        },
        (error) => {
          console.log(error);
          setErrors(error.message);
        }
      );
  };

  const getUsuariosAjaxAsyncAw = () => {
    setTimeout(async () => {
      try {
        const request = await fetch("https://reqres.in/api/users?page=1");
        const { data } = await request.json();

        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setErrors(error.message)
      }
    }, 1000);
  };

  /* useEffect(() => {
    getUsuariosAjaxPms()
}, []) */

  useEffect(() => {
    getUsuariosAjaxAsyncAw();
  }, []);

  if (errors !== "") {
    return (
    <div className="error"><strong>Error: {errors}</strong></div>
    )

  } else if (loading == true) {
    //Cuando esta todo cargando
    return (
    <div className="loading">Cargando datos...</div>
    )

  } else if (loading == false && errors === '') {

    //cuando todo esta ok
    return (
      <div>
        <h2>Listado de usuarios via Ajax</h2>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <img src={user.avatar} width="80" />
              &nbsp;
              {user.email}
            </li>
          );
        })}
      </div>
    );
  }
};
