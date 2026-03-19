import "./sunscreen.css";
function Sun() {
  return (
    <div className="sun">
      <h1>All  Types of Sunscreens❤️😍</h1>
      <p>Our Glam shopping Homepage🏠</p>

      <div className="sunscreen-container">

        {/* Product 1 */}
        <div className="sunscreen-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlugtchVCOt0io1VtvOktB1QmeWxs4xqemrA&s"alt="Sunscreen" width="100"/>
          <h2>VitaminC sunscreen</h2>
          <p className="price">$49</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="sunscreen-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfAnaPvr83o1auW2tHzlri5EfDCiqj3obaqA&s"alt="Sunscreen"/>
          <h2>Ponds Gel Sunscreen</h2>
          <p className="price">$79</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="sunscreen-card">
          <img src="https://www.reneecosmetics.in/cdn/shop/files/GlassSkinSunscreenSPF50_01.jpg?v=1744745049"alt=""/>
          <h2>GlassSkinSunscreen</h2>
          <p className="price">$90</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="sunscreen-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lye7dllQxfaWeDUL1wnQ4NUSlbt4R_jNBw&s"alt=""/>
          <h2>Best for men Sunscreen</h2>
          <p className="price">$200</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 5 */}
        <div className="sunscreen-card">
        <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ3T7gEi6ZUNESDBfI2jfuwHZCQQ4mdLcYToRB77GSvV3DnsE84UBRrtKByEprGxVNMhtaK9ttWAhWkbhzLa3nm3wJod-KMahZETTYXzg5W6XQcTYVB5nts"alt=""height="300"/>
          <h2>MamaEarth Sunscreen</h2>
          <p className="price">$300</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        {/* Product 6 */}
        <div className="sunscreen-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO7DnZFAPx927BSpT0DbtyQXtaw4yOgexqmg&s" alt=""/>
          <h2>LakmeSunscreen</h2>
          <p className="price">$20</p>
          <div className="buttons">
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Sun;