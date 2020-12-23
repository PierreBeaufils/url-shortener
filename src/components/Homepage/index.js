import { useState } from 'react';
import axios from 'axios';
import './homepage.scss';

import illustrationDesk from '../../images/illustration-working.svg';
import recognitionIcon from '../../images/icon-brand-recognition.svg';
import recordsIcon from '../../images/icon-detailed-records.svg';
import customizableIcon from '../../images/icon-fully-customizable.svg';

function Homepage() {
  const API_URL = 'https://api.shrtco.de/v2/shorten?url=';

  const [inputLink, setInputLink] = useState(null);
  const [linksData, setLinks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(`${API_URL}${inputLink}`)
      .then((res) => {
        const fullLink = res.data.result.original_link;
        const shortLink = res.data.result.short_link;
        const newLink = { fullLink, shortLink };

        setLinks([...linksData, newLink]);
      })
  };

  const copyToClipboard = (event) => {
    const link = (event.target.previousSibling.outerText);
    navigator.clipboard.writeText(link);

    event.target.innerText = 'Copied !';
  }

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
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Shorten a link here..." required onChange={(event) => setInputLink(event.target.value)} />
          <button type="submit" className="button submit">Shorten it!</button>
        </form>
      </div>

      <div className="statistics-container">

        {linksData.map((link) => (
          <div className="shortLink" key={link.shortLink}>
            <a href={link.fullLink} className="shortLink-full">{link.fullLink}</a>
            <a href={link.fullLink} className="shortLink-short">{link.shortLink}</a>
            <button className="button copy" onClick={copyToClipboard}>Copy</button>
          </div>
        ))}

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
