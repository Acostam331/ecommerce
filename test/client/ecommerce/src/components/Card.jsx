import React from 'react';

const Card = ({ id, img, title, price, category, setOneProduct }) => {
  return (
    <div className="flex flex-col justify-between items-center w-[80vw] md:w-[23.3vw] h-auto md:h-[30vw] bg-white rounded-lg py-4">
      <img className="w-5/6 h-1/2 object-contain" src={img} alt="Product" />
      <p className="text-2xl">{title}</p>
      <p className="text-xl">${price}</p>
      <p className="text-xl">{category}</p>
      <button
        className="text-2xl bg-green-50 rounded-lg px-4 py-2"
        onClick={() => {
          setOneProduct({ id: id, isOneProduct: true });
        }}
      >
        See more
      </button>
    </div>
  );
};

export default Card;
