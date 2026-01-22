import { useState } from 'react';
import FilterSidebar from './FilterSidebar';
import ProductCard from './ProductCard';

export default function Shop() {
  const [filters, setFilters] = useState({ sizes: [], colors: [], priceRange: [1000, 5000] });
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sample product data
  const [products] = useState([
    {
      id: 1,
      name: 'Paisley Red Cotton Carpet',
      price: 2500,
      image: '/red.jpg',
      size: 'Medium',
      color: 'Red',
      material: '100% Cotton',
      weave: 'Handloom',
      sizes: ['Small', 'Medium', 'Large'],
      care: 'Hand wash / Dry clean'
    },
    {
      id: 2,
      name: 'Traditional Beige Handloom Carpet',
      price: 3200,
      image: '/beige.jpg',
      size: 'Large',
      color: 'Beige',
      material: '100% Cotton',
      weave: 'Handloom',
      sizes: ['Medium', 'Large'],
      care: 'Hand wash / Dry clean'
    },
    {
      id: 3,
      name: 'Geometric Brown Cotton Carpet',
      price: 2800,
      image: '/brown.jpg',
      size: 'Small',
      color: 'Brown',
      material: '100% Cotton',
      weave: 'Handloom',
      sizes: ['Small', 'Medium', 'Large'],
      care: 'Hand wash / Dry clean'
    },
    {
      id: 4,
      name: 'Floral Blue Handloom Carpet',
      price: 3500,
      image: '/blue.jpg',
      size: 'Large',
      color: 'Blue',
      material: '100% Cotton',
      weave: 'Handloom',
      sizes: ['Medium', 'Large'],
      care: 'Hand wash / Dry clean'
    },
    {
      id: 5,
      name: 'Classic Green Cotton Carpet',
      price: 2200,
      image: '/green.jpg',
      size: 'Medium',
      color: 'Green',
      material: '100% Cotton',
      weave: 'Handloom',
      sizes: ['Small', 'Medium'],
      care: 'Hand wash / Dry clean'
    },
    {
      id: 6,
      name: 'Elegant Brown Paisley Carpet',
      price: 4000,
      image: '/6.jpg',
      size: 'Large',
      color: 'Brown',
      material: '100% Cotton',
      weave: 'Handloom',
      sizes: ['Large'],
      care: 'Hand wash / Dry clean'
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
                  <p><strong>Available Sizes:</strong> {selectedProduct.sizes.join(', ')}</p>
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
        <h1 className="shop-title">Cotton Carpets</h1>
      </div>

      <div className="shop-container">
        <FilterSidebar onFilterChange={handleFilterChange} />
        
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
