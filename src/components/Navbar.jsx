export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <h2>Shri Ahalya Tex</h2>
        <p className="sub-text">Quality Tradition</p>
      </div>

      <ul>
        <li className="active">Home</li>
        <li>About Us</li>
        <li>Gallery</li>
        <li>Contact Us</li>
      </ul>

      <div className="icons">
        <span className="icon">🔍</span>
        <span className="icon">🛒</span>
      </div>
    </nav>
  );
}
