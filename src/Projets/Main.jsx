import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import "./styles.css";

const products = [
  { id: 1, name: "Running Shoes", price: 120, category: "Men", img: "/images/photo1.jpg", desc: "High quality running shoes for daily training." },
  { id: 2, name: "Soccer Ball", price: 25, category: "Men", img: "/images/photo2.jpg", desc: "Official size soccer ball perfect for matches." },
  { id: 3, name: "Fitness Watch", price: 199, category: "Men", img: "/images/photo3.jpg", desc: "Track your activity and heart rate 24/7." },
  { id: 4, name: "Women Sneakers", price: 110, category: "Women", img: "/images/photo4.jpg", desc: "Comfortable sneakers with stylish design." },
  { id: 5, name: "Yoga Mat", price: 40, category: "Women", img: "/images/photo2.jpg", desc: "Eco-friendly mat for yoga and pilates." },
];

// ===== Home Page =====
function Home({ cart, setCart }) {
  const navigate = useNavigate();
  const addToCart = (product) => setCart([...cart, product]);

  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">Sporty<span>Store</span></h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/checkout">Cart ({cart.length})</Link></li>
        </ul>
      </nav>

      <div className="grid">
        {products.map((p) => (
          <div key={p.id} className="card" onClick={() => navigate(`/product/${p.id}`)}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button onClick={(e) => { e.stopPropagation(); addToCart(p); }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ===== Product Detail Page with kdor 3D stacking =====
function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const activeIndex = products.findIndex(p => p.id === parseInt(id));

  if (activeIndex === -1) return <p>Product not found</p>;

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>⬅ Back</button>
      <div className="kdor-container">
        {products.map((p, i) => {
          const offset = i - activeIndex;
          const translateZ = -Math.abs(offset) * 80; // كل بطاقة بعيدة أكثر
          const scale = i === activeIndex ? 1.2 : 0.8; // البطاقة الوسط أكبر
          const opacity = i === activeIndex ? 1 : 0.5;
          return (
            <div key={p.id} className="kdor-card" style={{
              transform: `translateZ(${translateZ}px) scale(${scale})`,
              zIndex: products.length - Math.abs(offset),
              opacity
            }}>
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <h4>${p.price}</h4>
            </div>
          )
        })}
      </div>
    </div>
  );
}

// ===== Checkout Page =====
function Checkout({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <>
          <ul>
            {cart.map((item,i)=><li key={i}>{item.name} - ${item.price}</li>)}
          </ul>
          <h3>Total: ${total}</h3>
        </>
      )}
      <form className="form-card">
        <label>Full Name</label>
        <input type="text" placeholder="Your Name" required />
        <label>Card Number</label>
        <input type="text" placeholder="Visa / Mastercard" required />
        <label>Expiry Date</label>
        <input type="month" required />
        <label>CVV</label>
        <input type="password" placeholder="***" required />
        <button type="submit">Pay Now</button>
      </form>
      <Link to="/" className="back-btn">⬅ Back to Store</Link>
    </div>
  );
}

// ===== App =====
export default function App() {
  const [cart,setCart] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
