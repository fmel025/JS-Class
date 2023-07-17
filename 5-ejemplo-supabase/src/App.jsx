import Users from "./pages/Users"

// Componente funcional sintaxis:

// function nombreDelComponente()
// El return devuelve el html que queremos mostrar en pantalla

// main.jsx renderiza la aplicacion entera, y lo que esta dentro
// de el sera renderizado en pantalla
// App.jsx es un componente que se renderiza dentro de main.jsx
// App.jsx es un componente funcional, es decir, una funcion
// que devuelve un html

// Tarea: Investigar sobre la estructura de carpetas de un proyecto en react

function App() {
  return (
    <>
      <Users />
    </>
  )
}

export default App
