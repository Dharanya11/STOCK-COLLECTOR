export default function ProductCard({ product, onViewDetails }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image || '/hero.png'} 
          alt={product.name}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">₹ {product.price.toLocaleString('en-IN')}</p>
        <button 
          className="view-details-btn"
          onClick={() => onViewDetails(product)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}
