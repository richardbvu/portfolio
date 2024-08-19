import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='contact__container'>
        <div className='contact__text'>
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
            Contact
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
            Don't be shy! Reach out to me!{" "}
          </motion.p>
        </div>
        <div className='contact__cards'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className='contact__card'
          >
            <div className='contact__icon'>
              <FontAwesomeIcon icon={faMap} />
            </div>
            <div className='contact__info'>
              <div className='contact__title'>Location</div>
              <div className='contact__link'>Torrance, California</div>
            </div>
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
            className='contact__card'
          >
            <div className='contact__icon'>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className='contact__info'>
              <div className='contact__title'>Mail</div>
              <a href='mailto:richardbvu@gmail.com' className='contact__link'>
                richardbvu@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
