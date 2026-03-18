function Product({ name, price, addToCart }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <button onClick={() => addToCart({ name, price })}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;