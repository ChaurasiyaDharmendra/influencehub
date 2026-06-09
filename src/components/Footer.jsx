import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-col">
          <h2>InfluenceHub</h2>

          <p>
            India's leading influencer marketing
            platform connecting brands and creators.
          </p>
        </div>

        <div className="footer-col">
          <h3>Platform</h3>

          <p>For Brands</p>
          <p>For Influencers</p>
          <p>Campaigns</p>
          <p>Pricing</p>
        </div>

        <div className="footer-col">
          <h3>Resources</h3>

          <p>Blog</p>
          <p>Help Center</p>
          <p>Privacy Policy</p>
          <p>Terms</p>
        </div>

        <div className="footer-col">
          <h3>Newsletter</h3>

          <input
            type="email"
            placeholder="Enter Email"
          />

          <button>Subscribe</button>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        © 2026 InfluenceHub. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;