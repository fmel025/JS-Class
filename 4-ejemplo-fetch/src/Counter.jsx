import { useState } from "react";

const Counter = () => {
  // Ya que utilizaremos un numero que cuente la cantidad de clicks
  // que se le dan a los botones, necesitamos un estado para guardar
  // ese numero. Para eso utilizamos el hook useState
  // useState recibe como parametro el valor inicial del estado
  // y devuelve un array con dos elementos:
  // - El valor del estado
  // - Una funcion para actualizar el valor del estado
  // En este caso, el valor inicial del estado es 0
  const [value, setValue] = useState(0);

  // Con esta funcion podemos incrementar el valor del estado
  const increment = () => {
    // setValue es la funcion que nos devuelve useState
    // Le pasamos como parametro el nuevo valor del estado
    // En este caso, el nuevo valor del estado es el valor
    // actual del estado + 1
    // prevValue es el valor actual del estado
    // Y lo que devolvemos es el nuevo valor del estado
    setValue((prevValue) => prevValue + 1);
  };

  // Con esta funcion podemos decrementar el valor del estado
  // Esto es lo mismo que incrementar, pero en vez de sumar 1
  // restamos 1
  const decrement = () => {
    setValue((prevValue) => prevValue - 1);
  };

  return (
    <div className="font-mono flex flex-col justify-center gap-2 items-center h-screen bg-indigo-200">
      <span className="text-2xl font-bold">{value}</span>
      <div className="flex flex-row justify-center items-center gap-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2"
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
