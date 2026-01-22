export default function Categories({ setCurrentPage }) {
  // Define category items with their corresponding page routes and images
  const items = [
    { name: "Cotton Carpets", page: "shop", image: "/hero.png" },
    { name: "Bedsheets", page: "bedsheets", image: "/hero.png" },
    { name: "Bags", page: "shop", image: "/hero.png" }
  ];
  
  // Handle category button click - routes to appropriate page
  const handleCategoryClick = (page) => {
    if (page && setCurrentPage) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="categories-section">
      <div className="grid">
        {items.map(item => (
          <div className="card" key={item.name}>
            <div className="card-image-container">
              <img src={item.image} alt={item.name} className="card-image" />
            </div>
            <h3>{item.name}</h3>
            <button 
              onClick={() => handleCategoryClick(item.page)}
              type="button"
            >
              Shop Now
            </button>
          </div>
        ))}
      </div>
      
      <div className="second-row">
        <div className="second-card">
          <h3>Customized Products</h3>
          <button 
            onClick={() => handleCategoryClick('shop')}
            type="button"
          >
            Create Your Own
          </button>
        </div>
        <div className="second-card">
          <h3>Best Sellers</h3>
          <button 
            onClick={() => handleCategoryClick('shop')}
            type="button"
          >
            Most Popular Items
          </button>
        </div>
      </div>
    </div>
  );
}
