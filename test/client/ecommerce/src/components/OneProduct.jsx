import React, { useEffect, useState } from 'react';
import { getOneProduct } from '../services/products.services';

const OneProduct = ({ id, setOneProductInfo }) => {
  const [product, setProduct] = useState({});
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

  useEffect(() => {
    handleOneProduct();
  }, []);

  useEffect(() => {
    console.log(product.name);
  }, [product]);

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
              <div className="flex justify-center items-center w-full">
                <button
                  className="text-2xl bg-green-50 w-1/2 rounded-lg"
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
