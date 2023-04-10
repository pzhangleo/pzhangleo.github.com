import React from 'react';

type ProfileCardProps = {
  name: string;
  avatarUrl: string;
  bio: string;
};

const ProfileCard = ({ name, avatarUrl, bio }: ProfileCardProps) => (
  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
    <div className="w-full flex justify-center mb-4">
      <img
        src={avatarUrl}
        alt="Avatar"
        className="rounded-full h-32 w-32 flex items-center justify-center border-2 border-indigo-500"
      />
    </div>
    <div className="text-center">
      <h2 className="text-gray-800 text-2xl font-bold">{name}</h2>
      <p className="text-gray-600 text-sm">Software Engineer</p>
      <p className="text-gray-600 mx-auto max-w-xl text-base font-medium mt-4">{bio}</p>
    </div>
  </div>
);

export default ProfileCard;
