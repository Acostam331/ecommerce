import React, { useEffect, useState } from 'react';
import { getOneProduct } from '../services/products.services';
import { cartState } from '../state/atoms/cartState';
import { useRecoilState } from 'recoil';

const OneProduct = ({ id, setOneProductInfo }) => {
  const [product, setProduct] = useState({});
  const [text, setText] = useState('Add to cart');
  const [cart, setCart] = useRecoilState(cartState);
  const [isProduct, setIsProduct] = useState(false);

  const handleOneProduct = async () => {
    const newProduct = await getOneProduct(id);

    if (newProduct) {
      setProduct(newProduct.data);
      setIsProduct(true);
    }
  };

  const handleNoProduct = () => {
    setOneProductInfo({ id: '', isOneProduct: false });
  };

  const handleCart = () => {
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (!isProductInCart) {
      setCart((cart) => [...cart, product]);
      setText('Remove from cart');
    } else {
      setCart((cart) => cart.filter((item) => item.id !== product.id));
      setText('Add to cart');
    }
  };

  useEffect(() => {
    handleOneProduct();
  }, []);

  useEffect(() => {
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (isProductInCart) {
      setText('Remove from cart');
    } else {
      setText('Add to cart');
    }
  }, [product]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      {isProduct && (
        <div className="flex h-[90vh] w-full justify-center items-center bg-green-50">
          <div className="flex flex-col md:flex-row w-full md:w-3/4 h-4/5 md:h-3/4 bg-white rounded-lg p-4">
            <img
              src={product.img}
              alt="Product"
              className="w-auto md:w-1/2 h-1/2 md:h-full object-contain"
            />
            <div className="flex flex-col justify-evenly h-1/2 md:h-auto px-8">
              <p className="text-2xl">
                <b>{product.name}</b>
              </p>
              <p className="text-xl">{product.description}</p>
              <p className="text-xl">
                <b>Price:</b> ${product.price}
              </p>
              <p className="text-xl">
                <b>Brand:</b> {product.category.name}
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center w-full gap-4">
                <button
                  className="text-2xl bg-green-50 px-8 rounded-lg"
                  onClick={() => {
                    handleCart();
                  }}
                >
                  {text}
                </button>
                <button
                  className="text-2xl bg-green-50 px-8 rounded-lg"
                  onClick={() => {
                    {
                      handleNoProduct();
                    }
                  }}
                >
                  back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OneProduct;
