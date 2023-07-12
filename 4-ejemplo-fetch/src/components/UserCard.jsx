const UserCard = ({ username, email, avatarUrl }) => {
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
