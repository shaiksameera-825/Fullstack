import "./features.css";
function Features() {
  return (
    <div className="fs-container">
      <h1>Our Features</h1>

      <div className="fs-cards">
        <div className="fs-card">
          <h3>Trendy Designs</h3>
          <p>Inspired by global fashion trends to keep your style fresh.</p>
        </div>

        <div className="fs-card">
          <h3>Premium Quality</h3>
          <p>High-quality fabrics with perfect finishing and comfort.</p>
        </div>

        <div className="fs-card">
          <h3>Affordable Glam</h3>
          <p>Luxury fashion at prices that make you smile.</p>
        </div>

        <div className="fs-card">
          <h3>Fast Delivery</h3>
          <p>Quick and safe delivery right to your doorstep.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
