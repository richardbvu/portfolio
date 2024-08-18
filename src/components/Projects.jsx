import car from "../images/car.jpg";
import gym from "../images/gym.png";
import coin from "../images/coin.png";
import optometry from "../images/optometry.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <div className='projects__container'>
        <div className='projects__title'>
          <h3>PROJECTS</h3>
          <p>Each project focuses on a unique skill</p>
        </div>
        <div></div>
        {/* RICHARD OPTOMETRY */}
        <div className='projects__grid-container'>
          <div className='projects__grid' id='project-2'>
            <div className='projects__text'>
              <h3>Dr. Richard Optometry</h3>
              <p>
                A gym website that provides a comprehensive resource for
                membership options, fitness classes, class scheduling, and a
                gallery.
              </p>
              <div className='projects__skills'>
                <p>TypeScript</p>
                <p>Tailwind</p>
                <p>React</p>
              </div>
              <div className='projects__links'>
                <a
                  href='https://github.com/richardbvu/optometry'
                  target='_blank'
                >
                  Github
                  <FontAwesomeIcon icon={faGithub} className='projects__icon' />
                </a>
                <a href='https://richard-optometry.vercel.app/' target='_blank'>
                  Live Demo
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className='projects__icon'
                  />
                </a>
              </div>
            </div>
            <div className='projects__img'>
              <img src={optometry} alt='Preview of website' />
            </div>
          </div>
          {/* COIN FINALE */}
          <div className='projects__grid' id='project-3'>
            <div className='projects__img'>
              <img src={coin} alt='Preview of website' />
            </div>
            <div className='projects__text'>
              <h3>Coin Finale</h3>
              <p>
                A website that uses an API for cryptocurrency searching, an
                online platform that allows users to find and access real-time
                data such as prices, market cap, and historical performance of
                different cryptocurrencies.
              </p>
              <div className='projects__skills'>
                <p>React</p>
                <p>API</p>
              </div>
              <div className='projects__links'>
                <a
                  href='https://github.com/richardbvu/coin-finale'
                  target='_blank'
                >
                  Github
                  <FontAwesomeIcon icon={faGithub} className='projects__icon' />
                </a>
                <a href='https://coin-finale.vercel.app/' target='_blank'>
                  Live Demo
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className='projects__icon'
                  />
                </a>
              </div>
            </div>
          </div>
          {/* GYM FEAR */}
          <div className='projects__grid' id='project-2'>
            <div className='projects__text'>
              <h3>Gym Fear</h3>
              <p>
                A gym website that provides a comprehensive resource for
                membership options, fitness classes, class scheduling, and a
                gallery.
              </p>
              <div className='projects__skills'>
                <p>React</p>
                <p>CRUD</p>
                <p>CSS</p>
              </div>
              <div className='projects__links'>
                <a
                  href='https://github.com/richardbvu/gym-fear'
                  target='_blank'
                >
                  Github
                  <FontAwesomeIcon icon={faGithub} className='projects__icon' />
                </a>
                <a href='https://gym-fear-zeta.vercel.app/' target='_blank'>
                  Live Demo
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className='projects__icon'
                  />
                </a>
              </div>
            </div>
            <div className='projects__img'>
              <img src={gym} alt='Preview of website' />
            </div>
          </div>
          {/* CAR RENTAL */}
          <div className='projects__grid-container'>
            <div className='projects__grid'>
              {/* <div className='projects__img-slow'> */}
              <div className='projects__img-slow'>
                <img src={car} alt='Preview of website' />
              </div>
              <div className='projects__text'>
                <h3>Car Rent-All</h3>
                <p>
                  A car rental website that provides an user-friendly interface
                  for comparing and booking cars that vary in make, model, size,
                  and price.
                </p>
                <div className='projects__skills'>
                  <p>Javascript</p>
                  <p>HTML</p>
                  <p>CSS</p>
                </div>
                <div className='projects__links'>
                  <a
                    href='https://github.com/richardbvu/car-rent-all'
                    target='_blank'
                  >
                    Github
                    <FontAwesomeIcon
                      icon={faGithub}
                      className='projects__icon'
                    />
                  </a>
                  <a href='https://car-rent-all.vercel.app/' target='_blank'>
                    Live Demo
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className='projects__icon'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
