import React from 'react';
import Card from './Card';
import { useRecoilValue } from 'recoil';
import { cartState } from '../state/atoms/cartState';

const Cart = ({ setOneProductInfo }) => {
  const cartData = useRecoilValue(cartState);

  return (
    <div className="flex justify-center w-1/2 h-[90vh] fixed right-0 bottom-0 bg-green-100 z-30 overflow-y-auto py-8">
      <div className="grid grid-cols-1 gap-24">
        {cartData &&
          cartData.map((product) => {
            const { id, category, name, price, img } = product;

            return (
              <Card
                key={id}
                img={img}
                id={id}
                title={name}
                price={price}
                category={category.name}
                setOneProduct={setOneProductInfo}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Cart;
