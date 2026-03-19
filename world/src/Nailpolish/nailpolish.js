
import "./nailpolish.css";
function Nail() {
  return (
    <div className="nailpolish">
      <h1>All  Types of Nailpolishes💅</h1>
      <p>Our Glam shopping Homepage🏠</p>

      <div className="nailpolish-container">

        {/* Product 1 */}
        <div className="nailpolish-card">
        <img src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/inline-images/1%20nail.jpg"alt="" width="100"/>
          <h2>Nykaa Nailpolish</h2>
          <p className="price">$79</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="nailpolish-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqPG1wGNAYFqH0sTCMjPW7LNevFVShl5tlg&s"alt=""/>
          <h2>Bluesky gel Nailpolish</h2>
          <p className="price">$199</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="nailpolish-card">
          <img src="https://www.lakmeindia.com/cdn/shop/files/29813_S9-8901030538810.jpg?v=1734952512"alt=""/>
          <h2>Lakme Nailpolish</h2>
          <p className="price">$150</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="nailpolish-card">
        <img src="https://prettyyeppuda.com/cdn/shop/collections/top-quality-korean-gel-nail-polish-brand-collection-pretty-yeppuda_1200x1200.webp?v=1750916269"alt=""/>
          <h2>Korean gel Nailpolish</h2>
          <p className="price">$500</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 5 */}
        <div className="nailpolish-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ceWtOwJEFFZp-_9U-PaSPmEvng-na9Wj5Q&s"alt=""height="300"/>
          <h2>Gel Nailpolish</h2>
          <p className="price">$300</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 6 */}
        <div className="nailpolish-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0vGDwOLIGbjtuHauqkUOCIdLDXX9lVkslIA&s" alt=""/>
          <h2>Butter London Nailpolish</h2>
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

export default Nail;