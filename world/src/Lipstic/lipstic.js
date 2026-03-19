import "./lipstic.css";
function Lipstick({ cartItems, setCartItems }) {
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert("Product added to cart");
  };

  return (
    <div className="lipstick">
      <h1>All  Types of Lipsticks💄</h1>
      <p>Our Glam shopping Homepage🏠</p>

      <div className="lipstick-container">

        {/* Product 1 */}
        <div className="lipstick-card">
        <img src="https://cdn.shopify.com/s/files/1/0587/0531/3990/files/0dc21ec8904245711887-az_2_480x480.jpg?v=1747224516"alt="" width="100"/>
          <h2>Nykaa Lipstick</h2>
          <p className="price">$300</p>
          <div className="buttons">
          <button onClick={()=>addToCart({ name: "Nykaa Lipstick", price: 300 })}>Add to Cart</button>
          <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="lipstick-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqTOL_uDdPNuGst7bSSClHfM64iknzdNjYA&s"alt=""/>
          <h2>Lakme lipstick</h2>
          <p className="price">$200</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="lipstick-card">
          <img src="https://m.media-amazon.com/images/I/71QT3PpgUyL._AC_UF1000,1000_QL80_.jpg"alt=""/>
          <h2>EOD Elite Collection Long Lasting Waterproof</h2>
          <p className="price">$400</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="lipstick-card">
        <img src="https://rukmini1.flixcart.com/image/1500/1500/xif0q/lipstick/w/y/x/1-8-aloe-vera-natural-changing-color-long-lasting-nourish-original-imah5uxxttrzzcju.jpeg?q=70"alt=""/>
          <h2>Alovera Lipstick</h2>
          <p className="price">$100</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 5 */}
        <div className="lipstick-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsELpty22Lg_py-xHGTqs_9rf0xKtRvLn78w&s"alt=""height="300"/>
          <h2>Sugar Lipstick</h2>
          <p className="price">$300</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 6 */}
        <div className="lipstick-card">
          <img src="https://images.meesho.com/images/products/415949361/cwzsj_512.webp?width=512" alt=""/>
          <h2>Waterproof Lipgloss</h2>
          <p className="price">$250</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Lipstick;