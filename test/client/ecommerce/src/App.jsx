import { useEffect, useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import {
  getAllProducts,
  getProductsByCategory,
} from './services/products.services';
import { getAllCategories } from './services/categories.services';
import './App.css';
import OneProduct from './components/OneProduct';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [oneProductInfo, setOneProductInfo] = useState({
    id: '',
    isOneProduct: false,
  });

  const handleAllProducts = async () => {
    const newProducts = await getAllProducts();

    if (newProducts.data) {
      setProducts(newProducts.data);
    }
  };

  const handleAllCategories = async () => {
    const newCategories = await getAllCategories();

    if (newCategories.data) {
      setCategories(newCategories.data);
    }
  };

  const handleCategory = async (category) => {
    const newProducts = await getProductsByCategory(category);

    if (newProducts.data) {
      setProducts(newProducts.data);
    }
  };

  useEffect(() => {
    handleAllProducts();
    handleAllCategories();
  }, [oneProductInfo]);

  useEffect(() => {
    if (category == 0) {
      handleAllProducts();
    } else {
      handleCategory(category);
    }
  }, [category]);

  return (
    <div className="flex flex-col bg-green-50">
      <Header />
      {oneProductInfo.isOneProduct ? (
        <OneProduct
          id={oneProductInfo.id}
          setOneProductInfo={setOneProductInfo}
        />
      ) : (
        <>
          <div className="flex w-full py-4 justify-evenly items-center gap-4">
            {products && (
              <p className="text-lg text-slate-600">
                Showing {products.length} results
              </p>
            )}
            {categories && (
              <>
                <select
                  name="categories"
                  id="categories"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  className="text-xl"
                >
                  <option value="0">Default</option>
                  {categories.map((category) => {
                    return (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    );
                  })}
                </select>
              </>
            )}
          </div>
          <div className="flex w-full justify-center items-center p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
              {products &&
                products.map((product) => {
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
        </>
      )}
    </div>
  );
}

export default App;
