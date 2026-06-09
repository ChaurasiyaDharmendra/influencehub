import "../styles/Leaderboard.css";

function Leaderboard() {
  return (
    <section className="leaderboard" id="leaderboard">

      <div className="leaderboard-banner">

        <div className="leader-left">

          <div className="trophy">🏆</div>

          <div className="podium">
            <div className="box silver">2</div>
            <div className="box gold">1</div>
            <div className="box bronze">3</div>
          </div>

        </div>

        <div className="leader-center">

          <span>FOR INFLUENCERS</span>

          <h2>
            Top the Leaderboard,
            <br />
            Win Big Rewards!
          </h2>

          <p>
            Compete with top creators, earn points,
            win rewards and get featured on the platform.
          </p>

          <button>View Leaderboard →</button>

        </div>

        <div className="leader-right">

          <div className="user-card first">
            <span>🥇 Ananya Sharma</span>
            <strong>₹75,000</strong>
          </div>

          <div className="user-card second">
            <span>🥈 Rahul Verma</span>
            <strong>₹50,000</strong>
          </div>

          <div className="user-card third">
            <span>🥉 Neha Kapoor</span>
            <strong>₹25,000</strong>
          </div>

          <div className="more-users">
            4+ More Rewards Available
          </div>

        </div>

      </div>

    </section>
  );
}

export default Leaderboard;