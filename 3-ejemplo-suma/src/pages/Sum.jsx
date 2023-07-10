import { useState, useEffect } from "react";

// useState se utiliza para crear estados (variables) que son propias del componente los cuales nos ayudan a renderizar o actualizar las vistas o permitirnos a hacer ciertas cosas cuando estas tengan un cierto valor. useState se ejecuta al inicio de la carga de un componente.

// Ahora veremos una nueva funcion o hook llamada, useEffect.
// useEffect nos permite realizar operaciones antes de que un componente se cargue y tambien para actualizar los datos de un componente dado cuando una condicion o una flag cambie.

const Sum = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(() => num1 + num2);

  // Ahora incluiremos useEffect
  // useEffect lo que hace es que esto se ejecuta cuando se crea un componente (antes del render y cuando se actualicen ciertos valores)

  useEffect(() => {
    setSum(num1 + num2);
  }, [num1, num2]);

  const handleChangeNum1 = (event) => {
    event.preventDefault();
    setNum1(Number(event.target.value));
  };

  const handleChangeNum2 = (event) => {
    event.preventDefault();
    setNum2(Number(event.target.value));
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
              type="number"
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
              type="number"
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
