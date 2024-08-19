import { motion } from "framer-motion";
import aboutImg from "../images/about.jpg";

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about__container'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className='about__title'
        >
          <h3>ABOUT ME</h3>
        </motion.div>
        <div className='about__grid-container'>
          <div className='about__grid'>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h2>I AM </h2>
              <div className='about__bar-1'></div>
              <p>A Front End-Developer</p>
            </motion.div>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h2>GOAL </h2>
              <div className='about__bar-2'></div>
              <p>
                Create and maintain professional, engaging websites that offer a
                smooth, satisfying user experience
              </p>
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
            >
              <h2>PROJECTS </h2>
              <div className='about__bar-3'></div>
              <p>
                Passionate about React, TypeScript, Tailwind, CRUD, API,
                Javascript, HTML, and CSS
              </p>
            </motion.div>
          </div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            className='about__img'
          >
            <img src={aboutImg} alt='' />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default About;
