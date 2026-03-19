import "./moistur.css";
function Moistur() {
  return (
    <div className="moistur">
      <h1>All  Types of Moisturizers and Foundation💛</h1>
      <p>Our Glam shopping Homepage🏠</p>

      <div className="moistur-container">

        {/* Product 1 */}
        <div className="moistur-card">
        <img src="https://assets.myntassets.com/w_360,q_50,,dpr_2,fl_progressive,f_webp/assets/images/2026/JANUARY/14/r0n6FXMn_5b6d14ca3e6a49cea7159a661d7d663b.jpg"alt="" width="100"/>
          <h2>3 in One faces canada Foundation</h2>
          <p className="price">$199</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="moistur-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7D-xzPJBfntNnbCGmSXh8r7D7g8Z0TKHww&s"alt=""/>
          <h2>ponds Moisturizer</h2>
          <p className="price">$100</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="moistur-card">
          <img src="https://fashioncolour.in/cdn/shop/files/01white.jpg?v=1732704750"alt=""/>
          <h2>Tinted Moisturizer</h2>
          <p className="price">$250</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="moistur-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRppZFZPKsFvQswTTazx0O1jSFjFRk6VE58fQ&s"alt=""/>
          <h2>Nykaa Foundation</h2>
          <p className="price">$350</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 5 */}
        <div className="moistur-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnd8m3Od4IT9p-OdxnJTxV7daIhGVaknHZtg&s"alt=""height="300"/>
          <h2>Lakme Foundation</h2>
          <p className="price">$400</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 6 */}
        <div className="moistur-card">
          <img src="https://img.nivea.com/-/media/miscellaneous/media-center-items/d/2/6/206597-web_1010x1180_transparent_png.png?rx=0&ry=309&rw=1010&rh=560&hash=427406FD0824633393C47011E45BCB58" alt=""/>
          <h2>Nivea Soft Moisturizer</h2>
          <p className="price">$1500</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Moistur;