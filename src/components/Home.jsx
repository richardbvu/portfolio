import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className='home__container'>
        <div className='home__text'>
          <motion.h1
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div>Front-End Developer</div>
          </motion.h1>
          <motion.h2
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Hi, I'm Richard Vu.
          </motion.h2>
          <motion.p
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            A passionate Front-end Developer based in Torrance, California.
          </motion.p>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className='home__icons'
          >
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Home;
