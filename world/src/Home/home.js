import "./home.css";
import {Link} from "react-router-dom"
function Home() {
  return (
   
    <div className="home">
      <h1>Welcome to Glam ❤️😍</h1>
      <p>Our Glam shopping Homepage🏠</p>

      <div className="product-container">

        {/* Product 1 */}
        <div className="product-card">
        <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxHLEEYOL7XocSjd8RyW8CCo3j4Fzr_zsVVwjNVJQm-6Ru6xXYFF5rzv6950aPnkBYf1MllJ_XxMazQflhYIOd9Ot4AYS9nPWQ5amrYw30JM-8YRJYTzmwog"alt="Lipstick" width="100"/>
        <h2>Lipstick brands</h2>
          <Link to="/lipstic">
          <button className="buy-btn">Lipstics</button>
          </Link>
        </div>

        {/* Product 2 */}
        <div className="product-card">
          <img src="https://imgmediagumlet.lbb.in/media/2025/05/681c4d1e04b6ca51310ee7ea_1746685214346.jpg"alt="Sunscreen"/>
          <h2>Sunscreen products</h2>
          <Link to="/sunscreen">
          <button className="buy-btn">Sunscreens</button>
          </Link>
        </div>

        {/* Product 3 */}
        <div className="product-card">
          <img src="https://5.imimg.com/data5/SELLER/Default/2021/6/SG/TK/OX/103066580/shining-nail-polish-500x500.jpg" alt="Nailpolish"/>
          <h2>Nailpolish colours</h2>
          <Link to="/nailpolish">
          <button className="buy-btn">Nailpolishes</button>
          </Link>
        </div>
        

        {/* Product 4 */}
        <div className="product-card">
        <img src="https://images-cdn.ubuy.co.in/69428daee62a813ba80fcfd8-all-in-one-makeup-kit-for-makeup-storage.jpg"alt="kit"/>
          <h2>Makeup products</h2>
          <Link to="/eyeliner">
          <button className="buy-btn">Makeupkits</button>
          </Link>
        </div>

        {/* Product 5 */}
        <div className="product-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3rHOkeNTTjXEBvlct6-cDt8l6DQ9aD15iA&s"alt="perfume"/>
          <h2>Perfume brands</h2>
          <Link to="/perfume">
          <button className="buy-btn">Perfumes</button>
          </Link>
        </div>

        {/* Product 6 */}
        <div className="product-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgG3k6OKUolneZpd0gjkXi8jhKPU8hWtnVCw&s"alt="powder"/>
          <h2>All company Powders</h2>
          <Link to="/powder">
          <button className="buy-btn">Powders</button>
          </Link>
        </div>

        {/* Product 7 */}
        <div className="product-card">
          <img src="https://www.dial4trade.com/uploaded_files/helpimgs/top-10-face-wash-brands-in-india-2024-for-dry-ampamp-oily-skin-price-buying-tips-fe1e65d.png" alt="facewash"></img>
          <h2>facewash products</h2>
          <Link to="/facewash">
          <button className="buy-btn">Facewashes</button>
          </Link>
        </div>

        {/* Product 9 */}
        <div className="product-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_XxIFgITN-aEDG3-lBiF2m4DHvHynYC3wgg&s"alt="Moisturizer"/>
          <h2> All brand Moisturizers </h2>
          <Link to="/moistur">
          <button className="buy-btn">Moisturizers</button>
          </Link>
        </div>

      </div>
    </div>
   
  );
}

export default Home;