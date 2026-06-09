import "../styles/Hero.css";
import heroImg from "../assets/hero-image.png";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <span className="hero-tag">
          #1 Influencer Marketing Platform
        </span>

        <h1>
          Find Influencers.
          <br />
          Run Powerful Campaigns.
          <br />
          <span>Get Real Results.</span>
        </h1>

        <p>
          India's most trusted platform to discover,
          connect and collaborate with the right
          influencers for your brand.
        </p>

        <div className="hero-buttons">

          <button className="brand-btn">
            I'm a Brand →
          </button>

          <button className="creator-btn">
            I'm an Influencer →
          </button>

        </div>

        <div className="hero-bottom-stats">

          <div>
            ✅ 10K+ Verified Influencers
          </div>

          <div>
            ✅ 500+ Trusted Brands
          </div>

          <div>
            ✅ Secure Payments
          </div>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-image-box">

          <img
            src={heroImg}
            alt="Influencer Marketing"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;