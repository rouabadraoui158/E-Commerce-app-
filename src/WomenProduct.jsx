import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function WomenProduct() {
  const [product, setProduct] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const url = 'https://fakestoreapi.com/products';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch the API');
        }
        const dataProduct = await response.json();
        setProduct(dataProduct);
      } catch (error) {
        console.log('Error while fetching data');
      }
    };
    fetchData();
  }, []);

  // Filtering Women Products 
  const WomenClothes = product.filter(products => products.category === "women's clothing");

  const ProductChoice = (product) => {
    alert('Over View image');
    setSelectedProduct(product);
    setShow(true);
  };

  return (
    <div className="bg-white">
      <br /><br /><br />
      <h2 className="text-4xl font-extrabold dark:text-white flex items-center justify-center">
        New Women Collection 2014
      </h2>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {WomenClothes.map(product => (
            <Link to="#" onClick={() => ProductChoice(product)} key={product.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src={product.image} alt={product.title} className="h-full w-full object-cover object-center group-hover:opacity-75" />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
            </Link>
          ))}
          {show && selectedProduct && (
            <div className="relative z-10" role="dialog" aria-modal="true">
              <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" aria-hidden="true"></div>
              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                  <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                    <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                      <button type="button" className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8" onClick={() => setShow(false)}>
                        <span className="sr-only">Close</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                        <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                          <img src={selectedProduct.image} className="object-cover object-center" alt={selectedProduct.title} />
                        </div>
                        <div className="sm:col-span-8 lg:col-span-7">
                          <section aria-labelledby="information-heading" className="mt-2">
                            <h3 className="sr-only">Product information</h3>
                            <p className="text-2xl text-gray-900">{selectedProduct.count}</p>
                          </section>
                          <section aria-labelledby="options-heading" className="mt-10">
                            <h3 id="options-heading" className="sr-only">Product options</h3>
                            <form>
                              <fieldset aria-label="Choose a color">
                                <legend className="text-sm font-medium text-gray-900">Color</legend>
                                <div className="mt-4 flex items-center space-x-3">
                                  <label aria-label="White" className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none">
                                    <input type="radio" name="color-choice" value="White" className="sr-only" />
                                    <span aria-hidden="true" className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-white"></span>
                                  </label>
                                  <label aria-label="Gray" className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none">
                                    <input type="radio" name="color-choice" value="Gray" className="sr-only" />
                                    <span aria-hidden="true" className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-200"></span>
                                  </label>
                                  <label aria-label="Black" className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none">
                                    <input type="radio" name="color-choice" value="Black" className="sr-only" />
                                    <span aria-hidden="true" className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-900"></span>
                                  </label>
                                </div>
                              </fieldset>
                              <fieldset className="mt-10" aria-label="Choose a size">
                                <div className="flex items-center justify-between">
                                  <div className="text-sm font-medium text-gray-900">Size</div>
                                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                                </div>
                                <div className="mt-4 grid grid-cols-4 gap-4">
                                  <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                                    <input type="radio" name="size-choice" value="XXS" className="sr-only" />
                                    <span>XXS</span>
                                    <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                  </label>
                                  <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                                    <input type="radio" name="size-choice" value="XS" className="sr-only" />
                                    <span>XS</span>
                                    <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                  </label>
                                  <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                                    <input type="radio" name="size-choice" value="S" className="sr-only" />
                                    <span>S</span>
                                    <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                  </label>
                                  <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                                    <input type="radio" name="size-choice" value="M" className="sr-only" />
                                    <span>M</span>
                                    <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                  </label>
                                  <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                                    <input type="radio" name="size-choice" value="L" className="sr-only" />
                                    <span>L</span>
                                    <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                  </label>
                                  <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                                    <input type="radio" name="size-choice" value="XL" className="sr-only" />
                                    <span>XL</span>
                                    <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                  </label>
                                  <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                                    <input type="radio" name="size-choice" value="XXL" className="sr-only" />
                                    <span>XXL</span>
                                    <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                  </label>
                                  <label className="group relative flex cursor-not-allowed items-center justify-center rounded-md border bg-gray-50 px-4 py-3 text-sm font-medium uppercase text-gray-200 hover:bg-gray-50 focus:outline-none sm:flex-1">
                                    <input type="radio" name="size-choice" value="XXXL" disabled className="sr-only" />
                                    <span>XXXL</span>
                                    <span aria-hidden="true" className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                                      <svg className="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                                        <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                                      </svg>
                                    </span>
                                  </label>
                                </div>
                              </fieldset>
                              <button type="submit" className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Add to bag
                              </button>
                            </form>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WomenProduct;
