import "./perfume.css";
function Perfume() {
  return (
    <div className="perfume">
      <h1>All  Types of Perfumes❤️😍</h1>
      <p>Our Glam shopping Homepage🏠</p>

      <div className="perfume-container">

        {/* Product 1 */}
        <div className="perfume-card">
        <img src="https://denverformen.com/cdn/shop/files/Denver_Hamilton_Honour_Pride_Caliber.jpg?v=1718794625&width=533"alt="" width="100"/>
          <h2>Denver Perfume </h2>
          <p className="price">$409</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="perfume-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRhUZyu41CajMEutUTbXVEyPkhh1ErufD-Ng&s"alt=""/>
          <h2>Fogg Perfume</h2>
          <p className="price">$299</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="perfume-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxR1as1uzHm58Cq8sVzimFYPUtFvDuC8Y4dg&s"alt=""/>
          <h2>Sephora Fragrance</h2>
          <p className="price">$190</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="perfume-card">
        <img src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/inline-images/3%20pf.jpg"alt=""/>
          <h2>Over Rose Perfume</h2>
          <p className="price">$250</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 5 */}
        <div className="perfume-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlTP_Rfx_QdXPt5BTOwnMYUZeicmLClqamMw&s"alt=""height="300"/>
          <h2>Bloom Perfume</h2>
          <p className="price">$300</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 6 */}
        <div className="perfume-card">
          <img src="https://deliziafragrances.com/cdn/shop/articles/top-20-luxury-perfume-brands-for-women-in-2025-3884915.png?v=1757008274" alt=""/>
          <h2>Delizia Perfume</h2>
          <p className="price">$399</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Perfume;