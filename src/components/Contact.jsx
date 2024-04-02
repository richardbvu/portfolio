import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='contact__container'>
        <div className='contact__text'>
          <h3>Contact</h3>
          <p>Don't be shy! Reach out to me! </p>
        </div>
        <div className='contact__cards'>
          <div className='contact__card'>
            <div className='contact__icon'>
              <FontAwesomeIcon icon={faMap} />
            </div>
            <div className='contact__info'>
              <div className='contact__title'>Location</div>
              <div className='contact__link'>Torrance, California</div>
            </div>
          </div>
          <div className='contact__card'>
            <div className='contact__icon'>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className='contact__info'>
              <div className='contact__title'>Mail</div>
              <a href='mailto:richardbvu@gmail.com' className='contact__link'>
                richardbvu@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
