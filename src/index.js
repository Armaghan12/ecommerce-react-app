import Product from "./components/Product";

function App() {
  return (
    <div>
      <h1>Our Products</h1>

      <Product name="iPhone" price={1000} />
      <Product name="Laptop" price={2000} />

    </div>
  );
}

export default App;