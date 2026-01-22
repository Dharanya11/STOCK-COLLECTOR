import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <div className="logo">Shri Ahalya Tex</div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#"><i className="cart-icon">🛒</i></a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Customized Textile Products — Delivered Locally</h1>
          <button>Explore Now</button>
        </section>

        <section className="categories">
          <div className="category">
            <h2>Cotton Carpets</h2>
            <button>Shop & Customize</button>
          </div>
          <div className="category">
            <h2>Bedsheets</h2>
            <button>Shop & Customize</button>
          </div>
          <div className="category">
            <h2>Bags</h2>
            <button>Shop & Customize</button>
          </div>
          <div className="category">
            <h2>Customized Products</h2>
            <button>Create Your Own</button>
          </div>
          <div className="category">
            <h2>Best Sellers</h2>
            <button>Most Popular Items</button>
          </div>
        </section>

        <section className="delivery-info">
          <h2>Local Delivery Information</h2>
          <p>Fast & Reliable Delivery in Coimbatore and Nearby Areas</p>
          <button>Learn More</button>
        </section>
      </main>

      <footer>
        <div className="footer-item">Quality Guaranteed</div>
        <div className="footer-item">Custom Made Designs</div>
        <div className="footer-item">Local Shop in Coimbatore</div>
      </footer>
    </div>
  );
}

export default App;
