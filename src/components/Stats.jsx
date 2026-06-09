import "../styles/Stats.css";

function Stats() {
  return (
    <section className="stats">

      <div className="stat-card">
        <span className="stat-icon">👥</span>
        <h2>10K+</h2>
        <p>Verified Influencers</p>
      </div>

      <div className="stat-card">
        <span className="stat-icon">⭐</span>
        <h2>500+</h2>
        <p>Top Brands</p>
      </div>

      <div className="stat-card">
        <span className="stat-icon">📋</span>
        <h2>2K+</h2>
        <p>Campaigns Completed</p>
      </div>

      <div className="stat-card">
        <span className="stat-icon">💰</span>
        <h2>₹25Cr+</h2>
        <p>Paid to Influencers</p>
      </div>

      <div className="stat-card">
        <span className="stat-icon">🛡️</span>
        <h2>98%</h2>
        <p>Satisfaction Rate</p>
      </div>

    </section>
  );
}

export default Stats;