import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <h2>
        Loved by <span>Brands & Influencers</span>
      </h2>

      <div className="testimonial-grid">

        <div className="testimonial-card">
          <p>
            "InfluenceHub helped us find the perfect influencers
            for our campaign."
          </p>

          <h4>Rajat Mehta</h4>
          <span>Marketing Head</span>
        </div>

        <div className="testimonial-card">
          <p>
            "I now have easy access to brand collaborations
            and payments are always on time."
          </p>

          <h4>Neha Sharma</h4>
          <span>Lifestyle Influencer</span>
        </div>

        <div className="testimonial-card">
          <p>
            "The platform is super smooth and analytics
            help us make better decisions."
          </p>

          <h4>Arvind Kapoor</h4>
          <span>D2C Brand Owner</span>
        </div>

      </div>

    </section>
  );
}

export default Testimonials;