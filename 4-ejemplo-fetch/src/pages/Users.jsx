import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';

const Users = () => {

  // Estados o states: Son variables las cuales representan un valor que puede cambiar a lo largo del tiempo, el cual puede ser modificado por el usuario o por el sistema.
  // En react los estados son inmutables, es decir, no se pueden modificar directamente, sino que se deben modificar con la funcion que nos provee el hook useState.
  // Un hook es una funcion que nos permite agregar funcionalidades a componentes funcionales.
  // useState: Es un hook que nos permite crear estados en componentes funcionales.
  // Estos estados lo que hacen es cambiar o re-renderizar el componente cada vez que cambian de valor.
  // useState devuelve un arreglo el cual contiene el estado y un setter para cambiar el valor del estado.
  // Para asignar un valor inicial, se envia dentro del useState
  // El estado inicial tambien puede ser una prop.
  const [users, setUsers] = useState([]);

  // En este ejemplo users posee el valor y setUsers es la funcion la cual actualizara el estado.

  // Vamos a llamar a una API donde recogere datos de usuarios los cuales mostrare en pantalla
  // Para cargar datos en nuestro componente antes de que se renderice un componente se hace mediante el hook de useEffect el cual recibe una funcion la cual se ejecutara cuando el componente se renderice y un arreglo el cual contiene las dependencias por el cual este se va a re-ejecutar.
  // El siguiente ejemplo se ejecutara cuando el componente se renderice por primera vez, ya que el arreglo de dependencias esta vacio y lo que hace es cargar un arreglo de 20 usuarios.

  // TODO (Tarea): Investigar que es, como funciona y para que sirve Supabase. 
  useEffect(() => {
    fetch('https://random-data-api.com/api/v2/users?size=20')
      .then((res) => res.json())
      // Con la data que obtuvimos se la pasamos a la funcion setUsers para que actualice el estado.
      .then((data) => setUsers(data));
  }, [])

  return (
    <div className="grid grid-cols-3 gap-4">
      {users.map((user, index) => (
        <UserCard
          key={index}
          username={user.username}
          email={user.email}
          avatarUrl={user.avatar}
        />
      ))}
    </div>
  );
};
``
export default Users;
