// Props o properties: Son una forma de enviar datos desde un componente padre a un hijo. Las props son una de las características fundamentales de React y son utilizadas para comunicar y compartir información entre componentes.
// Todos los datos dentro de las llaves {} son las propiedades que un padre le envia a un hijo.
// Las props se reciben antes de que se renderice el componente
// En este ejemplo las propiedades que recibe el componente UserCard son username, email, avatarUrl.
// Por si en algun momento a mi se me olvida mandar las propiedades de un padre a un hijo, lo que puedo hacer es setear valores por defecto por si en algun momento los llego a necesitar.
// La forma de hacer eso, es a la par de la propiedad, poner un igual y luego poner un valor por defecto.

const UserCard = ({
  username = "default",
  email = "default@hotmail.com",
  avatarUrl = "https://random.png",
  arreglo = [],
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-xs mx-auto">
      <div className="flex items-center justify-center">
        <img
          src={avatarUrl}
          alt={`${username}'s avatar`}
          className="w-16 h-16 rounded-full"
        />
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold">{username}</p>
        <p className="text-gray-500">{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
