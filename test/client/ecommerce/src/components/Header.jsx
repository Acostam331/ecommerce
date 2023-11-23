import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-center items-center w-full bg-white gap-12 h-[10vh]">
      <button className="hidden md:block text-2xl border-b-2 border-green-100">
        Home
      </button>
      <button className="hidden md:block text-2xl">Features</button>
      <button className="hidden md:block text-2xl">About</button>
      <button className="hidden md:block text-2xl">Info</button>
    </div>
  );
};

export default Header;
