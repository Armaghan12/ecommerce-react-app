import { useState } from "react";
import Product from "./components/Product";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Our Products</h1>

      <Product name="iPhone" price={1000} addToCart={addToCart} />
      <Product name="Laptop" price={2000} addToCart={addToCart} />

      <h2>Cart Items: {cart.length}</h2>
    </div>
  );
}

export default App;