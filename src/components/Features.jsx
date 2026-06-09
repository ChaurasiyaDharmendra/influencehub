import "../styles/Features.css";

function Features() {
  const features = [
    {
      icon: "🔍",
      title: "Smart Influencer Discovery",
      desc: "Advanced filters to find the perfect influencers for your brand."
    },
    {
      icon: "✨",
      title: "AI Matchmaking",
      desc: "AI suggests the best creators based on campaign goals & budget."
    },
    {
      icon: "📢",
      title: "Campaign Management",
      desc: "Create, manage & track campaigns from one simple dashboard."
    },
    {
      icon: "🔒",
      title: "Secure Escrow Payments",
      desc: "100% secure payments with escrow protection for all users."
    },
    {
      icon: "✅",
      title: "Content Approval Workflow",
      desc: "Review, approve & request changes with an easy workflow."
    },
    {
      icon: "📊",
      title: "Analytics & Reports",
      desc: "Real-time performance tracking with detailed analytics."
    },
    {
      icon: "🛡️",
      title: "AI Fraud Detection",
      desc: "Detect fake followers, bots & suspicious engagement instantly."
    },
    {
      icon: "🏆",
      title: "Influencer Leaderboard",
      desc: "Top influencers with big rewards & exclusive opportunities."
    }
  ];

  return (
    <section className="features" id="features">

      <div className="section-title">
        <span className="small-title">
          ALL-IN-ONE PLATFORM
        </span>

        <h2>
          Powerful Features for <br />
          <span>Brands & Influencers</span>
        </h2>

        <p>
          Everything you need to run successful influencer marketing campaigns.
        </p>
      </div>

      <div className="feature-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Features;