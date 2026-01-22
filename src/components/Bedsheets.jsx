import { useState } from 'react';
import FilterSidebarBedsheets from './FilterSidebarBedsheets';
import ProductCard from './ProductCard';

export default function Bedsheets() {
  const [filters, setFilters] = useState({ sizes: [], colors: [], priceRange: [1200, 6000] });
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sample bedsheet product data
  const [products] = useState([
    {
      id: 1,
      name: 'Floral Beige Cotton Bedsheet',
      price: 2799,
      image: '/1.jpg',
      size: 'Double',
      color: 'Beige',
      material: '100% Cotton',
      weave: 'Handloom',
      threadCount: '210 TC',
      sizes: ['Single', 'Double', 'Queen', 'King'],
      includes: '1 Bedsheet + 2 Pillow Covers',
      care: 'Gentle hand wash / Dry clean'
    },
    {
      id: 2,
      name: 'Traditional Paisley Brown Bedsheet',
      price: 3299,
      image: '/2.jpg',
      size: 'Queen',
      color: 'Brown',
      material: '100% Cotton',
      weave: 'Handloom',
      threadCount: '250 TC',
      sizes: ['Double', 'Queen', 'King'],
      includes: '1 Bedsheet + 2 Pillow Covers',
      care: 'Gentle hand wash / Dry clean'
    },
    {
      id: 3,
      name: 'Geometric Maroon Handloom Bedsheet',
      price: 2999,
      image: '/3.jpg',
      size: 'King',
      color: 'Maroon',
      material: '100% Cotton',
      weave: 'Handloom',
      threadCount: '240 TC',
      sizes: ['Queen', 'King'],
      includes: '1 Bedsheet + 2 Pillow Covers',
      care: 'Gentle hand wash / Dry clean'
    },
    {
      id: 4,
      name: 'Classic Indigo Cotton Bedsheet',
      price: 3499,
      image: '/4.jpg',
      size: 'Double',
      color: 'Indigo',
      material: '100% Cotton',
      weave: 'Handloom',
      threadCount: '280 TC',
      sizes: ['Single', 'Double', 'Queen'],
      includes: '1 Bedsheet + 2 Pillow Covers',
      care: 'Gentle hand wash / Dry clean'
    },
    {
      id: 5,
      name: 'Elegant Olive Handloom Bedsheet',
      price: 2599,
      image: '/5.jpg',
      size: 'Single',
      color: 'Olive',
      material: '100% Cotton',
      weave: 'Handloom',
      threadCount: '220 TC',
      sizes: ['Single', 'Double'],
      includes: '1 Bedsheet + 2 Pillow Covers',
      care: 'Gentle hand wash / Dry clean'
    },
    {
      id: 6,
      name: 'Premium Beige Cotton Bedsheet Set',
      price: 3999,
      image: '/7.jpg',
      size: 'King',
      color: 'Beige',
      material: '100% Cotton',
      weave: 'Handloom',
      threadCount: '300 TC',
      sizes: ['Queen', 'King'],
      includes: '1 Bedsheet + 2 Pillow Covers',
      care: 'Gentle hand wash / Dry clean'
    }
  ]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    if (filters.sizes.length > 0 && !filters.sizes.some(size => product.sizes.includes(size))) {
      return false;
    }
    if (filters.colors.length > 0 && !filters.colors.includes(product.color)) {
      return false;
    }
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }
    return true;
  });

  if (selectedProduct) {
    return (
      <div className="shop-page">
        <div className="product-detail-overlay" onClick={handleCloseDetails}>
          <div className="product-detail-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseDetails}>×</button>
            <div className="product-detail-content">
              <div className="product-detail-image">
                <img src={selectedProduct.image || '/hero.png'} alt={selectedProduct.name} />
              </div>
              <div className="product-detail-info">
                <h2 className="detail-product-name">{selectedProduct.name}</h2>
                <p className="detail-product-price">₹ {selectedProduct.price.toLocaleString('en-IN')}</p>
                <div className="product-specs">
                  <p><strong>Material:</strong> {selectedProduct.material}</p>
                  <p><strong>Weave:</strong> {selectedProduct.weave}</p>
                  <p><strong>Thread Count:</strong> {selectedProduct.threadCount}</p>
                  <p><strong>Sizes:</strong> {selectedProduct.sizes.join(' / ')}</p>
                  <p><strong>Includes:</strong> {selectedProduct.includes}</p>
                  <p><strong>Care:</strong> {selectedProduct.care}</p>
                </div>
                <div className="detail-buttons">
                  <button className="add-to-cart-btn">Add to Cart</button>
                  <button className="customize-btn">Customize</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shop-page">
      <div className="shop-hero">
        <div className="shop-hero-overlay"></div>
        <h1 className="shop-title bedsheets-title">Cotton Bedsheets</h1>
      </div>

      <div className="shop-container">
        <FilterSidebarBedsheets onFilterChange={handleFilterChange} />
        
        <div className="products-section">
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="no-products">
              <p>No products found matching your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

