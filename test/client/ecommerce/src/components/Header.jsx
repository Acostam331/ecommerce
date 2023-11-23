import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Header = ({ isCart, setIsCart }) => {
  return (
    <div className="flex w-full justify-between bg-white h-[10vh] fixed top-0 px-8 z-50">
      <div className=""></div>
      <div className="flex justify-center items-center w-ful gap-12">
        <button className="hidden md:block text-2xl border-b-2 border-green-100">
          Home
        </button>
        <button className="hidden md:block text-2xl">Features</button>
        <button className="hidden md:block text-2xl">About</button>
        <button className="hidden md:block text-2xl">Info</button>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="h-full"
          onClick={() => {
            setIsCart(!isCart);
          }}
        >
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default Header;
