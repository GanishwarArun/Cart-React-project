import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/Cart.jsx";
import Cart from "./Cart.jsx";

function Products() {
    const [showModal, setshowModal] = useState(false);
    const [products, setProducts] = useState([]);
    const {cartItems, addToCart } = useContext(CartContext);

    const toggle = () => {
        setshowModal(!showModal);
    };
    
    async function getProducts() {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
      <div className="flex flex-col justify-center bg-orange-100">
        <div className="flex justify-between items-center px-20 py-5">
          <h1 className="mt-10 mb-10 font-bold font-mono text-2xl text-blue-800 text-center uppercase">
            Arun's Shopping
          </h1>

          

          {!showModal && (
            <button
              className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded font-bold text-white text-xs uppercase focus:outline-none focus:bg-gray-700"
              onClick={toggle}
            >
              Cart ({cartItems.length})
            </button>
          )}
        </div>

        <div className="gap-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md px-10 py-10 rounded-lg"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="rounded-md h-48"
              />
              <div className="mt-4">
                <h1 className="font-bold text-lg uppercase">{product.title}</h1>
                <p className="mt-2 text-gray-600 text:sm">
                  {product.description.slice(0, 40)}...
                </p>

                <p className="mt-2 text-gray-800">${product.price}</p>
              </div>
              {/* add to cart button */}
              <div className="flex justify-between items-center mt-6">
                <button
                  className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700 px-4 py-2 rounded font-bold text-white text-xs uppercase focus:outline-none"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <Cart showModal={showModal} toggle={toggle} />
      </div>
    );



}

export default Products;
