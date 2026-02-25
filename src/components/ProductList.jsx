import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const products = [
  {
    category: "Indoor Plants",
    items: [
      { id: 1, name: "Snake Plant", price: 299, image: "https://via.placeholder.com/150" },
      { id: 2, name: "Peace Lily", price: 349, image: "https://via.placeholder.com/150" },
      { id: 3, name: "Spider Plant", price: 199, image: "https://via.placeholder.com/150" },
      { id: 4, name: "Aloe Vera", price: 249, image: "https://via.placeholder.com/150" },
      { id: 5, name: "Money Plant", price: 199, image: "https://via.placeholder.com/150" },
      { id: 6, name: "ZZ Plant", price: 399, image: "https://via.placeholder.com/150" },
    ],
  },
  {
    category: "Outdoor Plants",
    items: [
      { id: 7, name: "Rose Plant", price: 299, image: "https://via.placeholder.com/150" },
      { id: 8, name: "Hibiscus", price: 349, image: "https://via.placeholder.com/150" },
      { id: 9, name: "Tulsi", price: 149, image: "https://via.placeholder.com/150" },
      { id: 10, name: "Jasmine", price: 249, image: "https://via.placeholder.com/150" },
      { id: 11, name: "Bougainvillea", price: 399, image: "https://via.placeholder.com/150" },
      { id: 12, name: "Sunflower", price: 199, image: "https://via.placeholder.com/150" },
    ],
  },
  {
    category: "Succulents",
    items: [
      { id: 13, name: "Echeveria", price: 199, image: "https://via.placeholder.com/150" },
      { id: 14, name: "Haworthia", price: 249, image: "https://via.placeholder.com/150" },
      { id: 15, name: "Cactus", price: 179, image: "https://via.placeholder.com/150" },
      { id: 16, name: "Sedum", price: 199, image: "https://via.placeholder.com/150" },
      { id: 17, name: "Jade Plant", price: 299, image: "https://via.placeholder.com/150" },
      { id: 18, name: "Aloe Mini", price: 149, image: "https://via.placeholder.com/150" },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>

      <h1>Our Plants Collection</h1>

      {products.map((category) => (
        <div key={category.category}>
          <h2>{category.category}</h2>
          <div className="product-grid">
            {category.items.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button
                  onClick={() => dispatch(addItem(product))}
                  disabled={isInCart(product.id)}
                >
                  {isInCart(product.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
