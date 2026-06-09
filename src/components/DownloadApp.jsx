import "../styles/DownloadApp.css";
import qr from "../assets/qr.png";

function DownloadApp() {
  return (
    <section className="download" id="download">

      <div className="download-container">

        <div className="download-left">
          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500"
            alt="mobile app"
          />
        </div>

        <div className="download-center">
          <span className="download-tag">MOBILE APP</span>

          <h2>
            Download the
            <span> InfluenceHub App</span>
          </h2>

          <p>
            Manage campaigns, connect with brands
            and track performance anywhere.
          </p>

          <div className="download-buttons">
            <button>Google Play</button>
            <button>App Store</button>
          </div>
        </div>

        <div className="download-right">
          <div className="qr-box">
            <img src={qr} alt="QR Code" />
          </div>

          <p>Scan To Download</p>
        </div>

      </div>

    </section>
  );
}

export default DownloadApp;