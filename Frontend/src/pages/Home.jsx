import Navbar from "../components/Navbar"
import About from "../components/About";
import ParticlesBackground from "../components/Particle";
function Home(){
    return (
      <main>
        <Navbar />
        {/* <div className="container">
        <ParticlesBackground />
        </div> */}
        <div className="hero container">
          <h1>Lost and Found</h1>
          <a href="/find">
            <button>Find item</button>
          </a>
         
        </div>
        {/* <About /> */}
        <div className="footer">
          <footer>
        © MANIT Lost and Found Portal
        </footer>
          </div>
        
      </main>
    );
} 
export default Home; 
