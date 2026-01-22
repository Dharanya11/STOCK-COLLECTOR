export default function Categories() {
  const items = ["Cotton Carpets", "Bedsheets", "Bags"];
  return (
    <div className="categories-section">
      <div className="grid">
        {items.map(item => (
          <div className="card" key={item}>
            <h3>{item}</h3>
            <button>Shop & Customize</button>
          </div>
        ))}
      </div>
      
      <div className="second-row">
        <div className="second-card">
          <h3>Customized Products</h3>
          <button>Create Your Own</button>
        </div>
        <div className="second-card">
          <h3>Best Sellers</h3>
          <button>Most Popular Items</button>
        </div>
      </div>
    </div>
  );
}
