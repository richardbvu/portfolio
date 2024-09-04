import car from "../images/car.jpg";
import gym from "../images/gym.png";
import coin from "../images/coin.png";
import optometry from "../images/optometry.png";
import grandis from "../images/grandis.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <div className='projects__container'>
        <div className='projects__title'>
          <motion.h3
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            PROJECTS
          </motion.h3>
          <motion.p
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Each project focuses on a unique skill
          </motion.p>
        </div>
        {/* THE GRANDIS */}
        <div className='projects__grid-container'>
          <div className='projects__grid' id='project-3'>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
              className='projects__img'
            >
              <img src={grandis} alt='Preview of website' />
            </motion.div>
            <div className='projects__text'>
              <motion.h3
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                The Grandis
              </motion.h3>
              <motion.p
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                The Grandis is an image-focused, visually captivating website
                that highlights a modern lifestyle destination combining office
                spaces, dining, art, and activities.
              </motion.p>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className='projects__skills'
              >
                <p>TypeScript</p>
                <p>Tailwind</p>
                <p>React</p>
              </motion.div>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className='projects__links'
              >
                <a href='https://github.com/richardbvu/grandis' target='_blank'>
                  Github
                  <FontAwesomeIcon icon={faGithub} className='projects__icon' />
                </a>
                <a href='https://thegrandis.vercel.app/' target='_blank'>
                  Live Demo
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className='projects__icon'
                  />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* RICHARD OPTOMETRY */}
        <div className='projects__grid-container'>
          <div className='projects__grid' id='project-2'>
            <div className='projects__text'>
              <motion.h3
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Dr. Richard Optometry
              </motion.h3>
              <motion.p
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                A website for an optometrist's office. Showcasing the
                optometrist's services, expertise, contact information and
                appointment booking.
              </motion.p>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className='projects__skills'
              >
                <p>TypeScript</p>
                <p>Tailwind</p>
                <p>React</p>
              </motion.div>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className='projects__links'
              >
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
              </motion.div>
            </div>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
              className='projects__img'
            >
              <img src={optometry} alt='Preview of website' />
            </motion.div>
          </div>
          {/* COIN FINALE */}
          <div className='projects__grid' id='project-3'>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
              className='projects__img'
            >
              <img src={coin} alt='Preview of website' />
            </motion.div>
            <div className='projects__text'>
              <motion.h3
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Coin Finale
              </motion.h3>
              <motion.p
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                A website that integrates a cryptocurrency API to provide users
                with real-time data, including prices, market cap, and
                historical performance for various cryptocurrencies.
              </motion.p>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className='projects__skills'
              >
                <p>React</p>
                <p>API</p>
              </motion.div>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className='projects__links'
              >
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
              </motion.div>
            </div>
          </div>
          {/* GYM FEAR */}
          <div className='projects__grid' id='project-2'>
            <div className='projects__text'>
              <motion.h3
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Gym Fear
              </motion.h3>
              <motion.p
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                A gym website offering detailed information on membership plans,
                fitness classes, class schedules, and includes a gallery.
              </motion.p>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className='projects__skills'
              >
                <p>React</p>
                <p>CRUD</p>
                <p>CSS</p>
              </motion.div>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className='projects__links'
              >
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
              </motion.div>
            </div>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
              className='projects__img'
            >
              <img src={gym} alt='Preview of website' />
            </motion.div>
          </div>
          {/* CAR RENTAL */}
          <div className='projects__grid-container'>
            <div className='projects__grid'>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
                className='projects__img'
              >
                <img src={car} alt='Preview of website' />
              </motion.div>
              <div className='projects__text'>
                <motion.h3
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  Car Rent-All
                </motion.h3>
                <motion.p
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  A car rental website that provides an interface for comparing
                  and booking cars that vary in make, model, size, and price.
                </motion.p>
                <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className='projects__skills'
                >
                  <p>Javascript</p>
                  <p>HTML</p>
                  <p>CSS</p>
                </motion.div>
                <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className='projects__links'
                >
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
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
