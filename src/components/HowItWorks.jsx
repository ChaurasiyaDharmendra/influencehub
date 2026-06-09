import "../styles/HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how" id="how">

      <p className="mini-title">EASY STEPS</p>

      <h2>How It Works</h2>

      <p className="subtitle">
        Simple steps to successful collaboration
      </p>

      <div className="steps">

        <div className="step">
          <div className="number">1</div>
          <div className="icon">👤</div>

          <h3>Create & Discover</h3>

          <p>
            Create your profile and discover
            campaigns.
          </p>
        </div>

        <div className="line"></div>

        <div className="step">
          <div className="number">2</div>
          <div className="icon">✈️</div>

          <h3>Connect & Collaborate</h3>

          <p>
            Communicate, negotiate and
            start collaborations.
          </p>
        </div>

        <div className="line"></div>

        <div className="step">
          <div className="number">3</div>
          <div className="icon">📊</div>

          <h3>Create & Get Paid</h3>

          <p>
            Deliver amazing content and
            get paid.
          </p>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;