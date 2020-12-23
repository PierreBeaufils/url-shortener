import './homepage.scss';

import illustrationDesk from '../../images/illustration-working.svg';

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
    </main>
  );
}

export default Homepage;
