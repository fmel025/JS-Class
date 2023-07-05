import "./Login.css";
// Importar esto antes de login:
import { useState } from "react";

function Login() {
  // Variables y estados dentro de un componente
  // useState, esta keyword nos permite crear una variable que es exclusiva para el componente (pueden ser varias), y dependiendo de estos valores un componente se debe renderizar.

  // Hagan esto dentro de su componente Login
  // TODO: Cambiar esto a username
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    // La linea 15 se hace porque se tiene que detener que el formulario recargue la pagina
    event.preventDefault();
    alert("El username ingresado es: " + email);
    alert("La contraseña ingresada es: " + password);
  };

  // Va a cambiar el valor del email por el del input
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  // Va a cambiar el valor de la password por el input de password
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  return (
    <>
      <div className="login-container">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre de usuario:
            <input type="text" name="username" placeholder="Usuario" 
            onChange={handleChangeEmail}
            />
          </label>
          <label>
            Contraseña:
            <input type="password" name="password" placeholder="********"
            onChange={handleChangePassword} />
          </label>
          <input type="submit" value="Iniciar sesión" />
        </form>
      </div>
    </>
  );
}

export default Login;

// Tarea: Investigar sobre el DOM virtual
// Tambien investiguen sobre el ciclo de vida de un componente (eso les
// puede sumar puntos)
