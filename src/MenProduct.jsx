import React, { useEffect, useState } from 'react';

function MenProduct() {
  const [products, setProductData] = useState([]);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Could not fetch data');
        }
        const dataProduct = await response.json();
        setProductData(dataProduct);
      } catch (error) {
        console.log('Error Fetching data');
      }
    };
    fetchData();
  }, []); // Dependency array corrected to prevent infinite loop

  // Filter the data
  const menProducts = products.filter(product => product.category === "men's clothing");

  return (
    <div className="bg-white">
        <br></br><br></br><br></br>
    <h2 className=" text-4xl   font-extrabold dark:text-white   flex items-center justify-center ">New Men Collection 2014</h2>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {menProducts.map(product => (
            <a key={product.id} href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src={product.image} alt={product.title} className="h-full w-full object-cover object-center group-hover:opacity-75" />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenProduct;
