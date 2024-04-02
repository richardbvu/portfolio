import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className='home__container'>
        <div className='home__text'>
          <h1>Front-End Developer</h1>
          <h2>Hi, I'm Richard Vu.</h2>
          <p>A passionate Front-end Developer based in Torrance, California.</p>
          <div className='home__icons'>
            <a
              href='https://github.com/richardbvu'
              target='_blank'
              className='home__icon'
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href='https://www.linkedin.com/in/richardbvu/'
              target='_blank'
              className='home__icon'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
