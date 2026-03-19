import "./facewash.css";
function Face() {
  return (
    <div className="face">
      <h1>All  Types of Facewashes❤️😍</h1>
      <p>Our Glam shopping Homepage🏠</p>

      <div className="facewash-container">

        {/* Product 1 */}
        <div className="facewash-card">
        <img src="https://graphicsfamily.com/wp-content/uploads/2020/07/facewash-packaging-design-free-download-scaled.jpg"alt="" width="100"/>
          <h2>Himalaya Facewash</h2>
          <p className="price">$70</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="facewash-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdCsiei-howfsxs1_wg2shn8n36UJ627KMg&s"alt=""/>
          <h2>Lakme Facewash</h2>
          <p className="price">$110</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="facewash-card">
          <img src="https://krishnaayurved.com/cdn/shop/files/1A_42d2de9c-8531-4a58-8252-88709d23ceab.jpg?v=1766391891"alt=""/>
          <h2>Alovera Facewash</h2>
          <p className="price">$90</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="facewash-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDm-zrqYTxS0EbV0N7oOUiPYPv7mspf9Xt6w&s"alt=""/>
          <h2>Garnier men facewash</h2>
          <p className="price">$200</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 5 */}
        <div className="facewash-card">
        <img src="https://media6.ppl-media.com//tr:h-235,w-235,c-at_max,dpr-2,q-40/static/img/product/403460/mamaearth-rice-face-wash-with-rice-water-and-niacinamide-for-glass-skin-150-ml-for-hydrated-even-skin-tone-glowing-and-brightened-skin-korean-skin-care-products-for-all-skin-types_1_display_1748494172_8b1bc8c6.jpg"alt=""height="300"/>
          <h2>MamaEarth Facewash</h2>
          <p className="price">$300</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 6 */}
        <div className="facewash-card">
          <img src="https://assets.myntassets.com/w_360,q_50,,dpr_2,fl_progressive,f_webp/assets/images/4452074/2024/6/5/2c99ebe9-cf96-4fbf-a7a8-49ec4f9354e61717571765391-Ponds-Bright-Beauty-Spot-Less-Glow-Face-Wash-with-Vitamin-B3-1.jpg" alt=""width="200"/>
          <h2>Ponds Facewash</h2>
          <p className="price">$150</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Face;