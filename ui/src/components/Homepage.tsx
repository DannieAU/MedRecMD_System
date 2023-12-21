import background from '../images/Background.png';
import rightArrow from '../images/Arrow_1.png';
import './Homepage.css';

const Home = () => {
  return (
    <div className = "doctorImg">
      <img src = {background} alt="Doctor" />
      <div className="overlay-text">
          <h1>Don't <br/>
            know <br/>
            where <br/>
            to start?</h1>
        <div className="overlay-text_p">
          <p>LET'S HELP YOU<br/>
            GET STARTED</p>
        </div>
        <div className ="Arrow">
        <a href="/"><img src = {rightArrow} alt = "right-arrow"/></a>
        </div>
      </div>
    </div>
  );
}

export default Home;