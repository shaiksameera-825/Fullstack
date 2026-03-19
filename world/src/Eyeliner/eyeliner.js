import "./eyeliner.css";
function Eyeliner() {
  return (
    <div className="eye">
      <h1>All  Types of Eyeliners and makeup kits🤎🩶</h1>
      <p>Our Glam shopping Homepage🏠</p>

      <div className="eye-container">

        {/* Product 1 */}
        <div className="eye-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5pNcR1hu7gW0rJZ2U-vhrrsjgmC7ClkZWyw&s"alt="" width="100"/>
          <h2>Lakme Eyeliner</h2>
          <p className="price">$100</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="eye-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHEerbnqFSftjSn2r56hQHk_V9vu6QCdctw&s"alt=""/>
          <h2>Dazller Eyeliner</h2>
          <p className="price">$150</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="eye-card">
          <img src="https://images-static.nykaa.com/media/catalog/product/2/8/2844864NYKAC00002474zz_1.jpg?tr=w-500"alt=""/>
          <h2>Nykaa Eyeliner</h2>
          <p className="price">$200</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="eye-card">
        <img src="https://media6.ppl-media.com//tr:h-235,w-235,c-at_max,dpr-2,q-40/static/img/product/381389/ny-bae-eye-glam-trio-volumizing-mascara-smudgeproof-eyeliner-waterproof-black-kajal-eye-makeup-travel-kit_1_display_1719476819_6ed3e7a8.jpg"alt=""/>
          <h2>NYbae Mascara</h2>
          <p className="price">$250</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 5 */}
        <div className="eye-card">
        <img src="https://m.media-amazon.com/images/I/71qiDi+ESrL._AC_UF1000,1000_QL80_.jpg"alt=""height="300"/>
          <h2>Revlon Eyeliner</h2>
          <p className="price">$300</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 6 */}
        <div className="eye-card">
          <img src="https://images-static.nykaa.com/media/catalog/product/1/e/1ed1210NYSWISSB00255_x1.jpg" alt=""/>
          <h2>Nykaa Eyeshadow</h2>
          <p className="price">$200</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Eyeliner;