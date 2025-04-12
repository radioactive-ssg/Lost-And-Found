import Navbar from "../components/Navbar"

function Home(){
    return (
      <main>
        <Navbar />
        

<div className="container">
    
    
    <div className="headline">Lost Something? Found Something?</div>
    
    <div className="subheadline">
      We help you reconnect with what matters. Post, search, and reunite with lost items – all in one place.
    </div>
    
    <div className="button-container">
      
      <a href="/find" className="btn find-btn">🔍 Start Finding Now</a>
    </div>

    <div className="img-container">
      <img src="/images/bg.png" class="bg-image"  alt="" />
    </div>

  </div>

       {/* Feature Cards Section */}
       <div className="features-section">
          <h1>Core Offerings</h1>
          <div className="features-container">
            {/* Card 1 */}
            <div className="feature-card">
              <div className="feature-header">
                <span className="feature-icon">🔍</span>
                <h3 className="feature-title">Real-Time Item Listings</h3>
              </div>
              <p className="feature-description">
                Easily browse and report lost or found items. Our dynamic feed instantly updates with new posts—so you never miss a match!
              </p>
              <p className="feature-quote">
                "Found something? Post it in seconds. Lost something? Someone might've already listed it!"
              </p>
            </div>

            {/* Card 2 */}
            <div className="feature-card">
              <div className="feature-header">
                <span className="feature-icon">⚡</span>
                <h3 className="feature-title">Instant Loading with Custom Animations</h3>
              </div>
              <p className="feature-description">
                Enjoy a smooth user experience with fast loading times and a custom animated loader that keeps things visually engaging.
              </p>
              <p className="feature-quote">
                "No boring spinners here—our animated loader brings life to your wait!"
              </p>
            </div>

            {/* Card 3 */}
            <div className="feature-card">
              <div className="feature-header">
                <span className="feature-icon">🧠</span>
                <h3 className="feature-title">Smart & Simple Interface</h3>
              </div>
              <p className="feature-description">
                Intuitive layout with categorized item cards, images, and detailed descriptions. Find or report an item without any confusion.
              </p>
              <p className="feature-quote">
                "Because finding your stuff shouldn't be harder than losing it."
              </p>
            </div>
          </div>
        </div>
        
        <div >
          <footer>
        © MANIT Lost and Found Portal
        </footer>
          </div>
        
      </main>
    );
} 
export default Home; 