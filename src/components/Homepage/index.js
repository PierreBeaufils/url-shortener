import './homepage.scss';

import illustrationDesk from '../../images/illustration-working.svg';
import recognitionIcon from '../../images/icon-brand-recognition.svg';
import recordsIcon from '../../images/icon-detailed-records.svg';
import customizableIcon from '../../images/icon-fully-customizable.svg';

function Homepage() {
  return (
    <main className="homepage">
      <div className="intro">
        <div className="intro-text">
          <h1>More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed insights on your links are performing</p>
          <button className="button">Get Started</button>
        </div>
        <div className="intro-img">
          <img src={illustrationDesk} alt="" />
        </div>
      </div>

      <div className="shortener">
        <input type="text" placeholder="Shorten a link here..." />
        <button className="button submit">Shorten it!</button>
      </div>

      <div className="statistics-container">
        <div className="statistics">
          <h2>Advanced Statistics</h2>
          <p>Track how your links are performing across the web with our advanced dashboard</p>

          <div className="cards-container">
            <div className="card first-card">
              <div className="card-image">
                <img src={recognitionIcon} alt="" />
              </div>
              <h3>Brand Recognition</h3>
              <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
            </div>
            <div className="card second-card">
              <div className="card-image">
                <img src={recordsIcon} alt="" />
              </div>
              <h3>Detailed Records</h3>
              <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </div>
            <div className="card third-card">
              <div className="card-image">
                <img src={customizableIcon} alt="" />
              </div>
              <h3>Fully Customizable</h3>
              <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="downsection">
        <div className="downsection-content">
          <h2>Boost your links today</h2>
          <button className="button">Get Started</button>
        </div>
      </div>

    </main>
  );
}

export default Homepage;
