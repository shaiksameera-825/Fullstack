import "./powder.css";
function Powder() {
  return (
    <div className="powder">
      <h1>All  Types of Face Powders🙂😍</h1>
      <p>Our Glam shopping Homepage🏠</p>

      <div className="powder-container">

        {/* Product 1 */}
        <div className="powder-card">
        <img src="https://images.apollo247.in/pub/media/catalog/product/W/H/WHI0108_1-AUG23_1.jpg?tr=q-80,f-webp,w-100,dpr-3,c-at_max%20100w"alt="" width="100"/>
          <h2>White Tone Powder</h2>
          <p className="price">$199</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="powder-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhTDKGk3gJfKJNqLvfg00mKgmIt3bAwGqzw&s"alt=""/>
          <h2>Spinz Powder</h2>
          <p className="price">$270</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="powder-card">
          <img src="https://adn-static1.nykaa.com/media/wysiwyg/SANTO00000020Module_1.jpg?tr=w-400,pr-true"alt=""/>
          <h2>Santoor Face Powder</h2>
          <p className="price">$90</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="powder-card">
        <img src="https://rukminim2.flixcart.com/image/480/480/kd94uq80/talc/z/7/7/320-powder-eva-original-imafu77ywf67atkk.jpeg?q=90"alt=""/>
          <h2>Eva Face Powder</h2>
          <p className="price">$200</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 5 */}
        <div className="powder-card">
        <img src="https://assets.myntassets.com/w_412,q_50,,dpr_3,fl_progressive,f_webp/assets/images/17389746/2022/8/1/b6e7193e-ca52-4b85-a0c1-4ca08fef90391659343265276-Ponds-Dreamflower-Pink-Lily-Fragrant-Talc-with-Vitamin-B3----1.jpg"alt=""height="300"/>
          <h2>Ponds Powder</h2>
          <p className="price">$60</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 6 */}
        <div className="powder-card">
          <img src="https://groceteria.co.in/public/uploads/all/dgTH2JXiJ8NeKWeYT3DHyxtqXZTSkzGd7jodmMqW.jpg" alt=""/>
          <h2>Gokul Sandal</h2>
          <p className="price">$70</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Powder;