import "../styles/Hero.css";
import { Link } from "react-router-dom";


function Hero() {
    return (
        <section className="hero">

            <h1>CareerPilot AI</h1>

            <p>
                Discover your perfect career path with the power of AI.
            </p>

            
              <Link to="/career-advisor" className="hero-btn">
              Get Started !
            </Link> 
            

        </section>
    );
}

export default Hero;