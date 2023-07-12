import { useState, useEffect, useMemo } from "react";

// useState se utiliza para crear estados (variables) que son propias del componente los cuales nos ayudan a renderizar o actualizar las vistas o permitirnos a hacer ciertas cosas cuando estas tengan un cierto valor. useState se ejecuta al inicio de la carga de un componente.

// Ahora veremos una nueva funcion o hook llamada, useEffect.
// useEffect nos permite realizar operaciones antes de que un componente se cargue y tambien para actualizar los datos de un componente dado cuando una condicion o una flag cambie.

const Sum = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  // hooks: Son funciones en react que nos permiten hacer ciertas cosas. Como manejar estados, manipular datos de un componente durante algun determinado tiempo en el ciclo de vida, etc.

  // useMemo no siempre es recomendado usarlo (ahorita solo es para dar el ejemplo), este hook sirve cuando necesitamos obtener un valor resultante de un calculo el cual es muy complejo, para que este calculo solo se ejecute, cuando los datos del arreglo de dependencias cambien, en ese momento el dato se va a recalcular.
  const sum = useMemo(() => num1 + num2, [num1, num2]);


  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  // Si el arreglo de dependencias del use effect esta vacio, solo se ejecutara el useEffect cuando el componente se cargue por primera vez. Si el arreglo de dependencias tiene valores, entonces el useEffect se ejecutara cada vez que uno de esos valores cambie.

  // Ahora incluiremos useEffect
  // useEffect lo que hace es que esto se ejecuta cuando se crea un componente (antes del render y cuando se actualicen ciertos valores)

  // useEffect pide un arreglo de datos en los cuales el re ejecutara la funcion si los valores de ese arreglo cambian.
  // useEffect se usa cuando necesito ejecutar una funcion cada vez que un valor cambie o cuando necesito realizar operaciones para cargar datos antes de que el componente se cargue.


  // Si solo necesito ejecutarlo una vez, entonces el arreglo de dependencias debe estar vacio.

  // || se ejecutara siempre y cuando uno de los valores sea nulo
  // En nuestro ejemplo si el input esta vacio lo que estoy diciendo es que el valor que voy a a asignar es un 0.
  const handleChangeNum1 = (event) => {
    event.preventDefault();
    setNum1(Number(event.target.value || 0));
  };

  const handleChangeNum2 = (event) => {
    event.preventDefault();
    setNum2(Number(event.target.value || 0));
  };

  return (
    <>
      <main className="w-full grid grid-cols-2 bg-neutral-200 h-screen">
        <form className="bg-white m-2 shadow-md rounded px-8 py-6 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="num1"
            >
              Numero 1
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="num1"
              id="num1"
              placeholder="Ingresa un numero"
              value={num1}
              onChange={handleChangeNum1}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="num2"
            >
              Numero 2
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="num2"
              id="num2"
              placeholder="Ingresa un numero"
              value={num2}
              onChange={handleChangeNum2}
            />
          </div>
        </form>
        <div className="bg-white m-2 shadow-md rounded px-8 py-6 mb-4">
          <p className="text-gray-700 text-base font-bold mb-2">
            La suma de {num1} + {num2} es:
          </p>
          <p className="text-gray-700 text-base font-bold mb-2">{sum}</p>
        </div>
      </main>
    </>
  );
};

export default Sum;


// Tarea:
// Agregar un input extra para que el usuario pueda ingresar un numero 3 y mostrar la multiplicacion de los 3 numeros en pantalla.