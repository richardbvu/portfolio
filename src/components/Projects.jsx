import car from "../images/car.jpg";
import gym from "../images/gym.jpg";
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
        <div className='projects__grid-container'>
          <div className='projects__grid'>
            <div className='projects__img'>
              <img src={car} alt='' />
            </div>
            <div className='projects__text'>
              <h3>Car Rent-All</h3>
              <p>
                A car rental website that provides an user-friendly interface
                for comparing and booking cars that vary in make, model, size,
                and price.
              </p>
              <div className='projects__skills'>
                <p>Vanilla Javascript</p>
                <p>HTML</p>
                <p>CSS</p>
              </div>
              <div className='projects__links'>
                <a
                  href='https://github.com/richardvu93/car-rental'
                  target='_blank'
                >
                  Github
                  <FontAwesomeIcon icon={faGithub} className='projects__icon' />
                </a>
                <a href=''>
                  Live Demo
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className='projects__icon'
                  />
                </a>
              </div>
            </div>
          </div>
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
                <p>CSS</p>
              </div>
              <div className='projects__links'>
                <a
                  href='https://github.com/richardvu93/gym-fear'
                  target='_blank'
                >
                  Github
                  <FontAwesomeIcon icon={faGithub} className='projects__icon' />
                </a>
                <a href=''>
                  Live Demo
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className='projects__icon'
                  />
                </a>
              </div>
            </div>
            <div className='projects__img'>
              <img src={gym} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
