import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__copy-right'>
          Copyright © 2024. All rights are reserved
        </div>
        <div className='footer__icons'>
          <a href='https://github.com/richardbvu' target='_blank'>
            <FontAwesomeIcon icon={faGithub} className='footer__icon' />
          </a>
          <a href='https://www.linkedin.com/in/richardbvu/' target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} className='footer__icon' />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
