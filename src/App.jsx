import { useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Delivery from "./components/Delivery";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import Bedsheets from "./components/Bedsheets";
import AboutUs from "./components/AboutUs";
import "./style.css";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <Categories setCurrentPage={setCurrentPage} />
            <Delivery />
            <Footer />
          </>
        );
      case 'shop':
        // Cotton Carpets page
        return (
          <>
            <Shop />
            <Footer />
          </>
        );
      case 'bedsheets':
        // Bedsheets page
        return (
          <>
            <Bedsheets />
            <Footer />
          </>
        );
      case 'about':
        return (
          <>
            <AboutUs />
            <Footer />
          </>
        );
      default:
        // Fallback to home page
        return (
          <>
            <Hero />
            <Categories setCurrentPage={setCurrentPage} />
            <Delivery />
            <Footer />
          </>
        );
    }
  };

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </>
  );
}

export default App;
