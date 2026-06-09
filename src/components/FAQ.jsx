import "../styles/FAQ.css";

function FAQ() {
  return (
    <section className="faq">

      <div className="section-title">
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="faq-container">

        <div className="faq-item">
          <h3>How do payments work?</h3>
          <p>
            Payments are securely handled through our platform.
          </p>
        </div>

        <div className="faq-item">
          <h3>How do I join campaigns?</h3>
          <p>
            Create a profile and apply to available campaigns.
          </p>
        </div>

        <div className="faq-item">
          <h3>Is there any registration fee?</h3>
          <p>
            No, joining the platform is completely free.
          </p>
        </div>

      </div>

    </section>
  );
}

export default FAQ;