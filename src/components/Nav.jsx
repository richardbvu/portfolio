import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const Nav = () => {
  const navRefLinks = useRef();
  const navRefButtons = useRef();

  const showNavBar = () => {
    navRefLinks.current.classList.toggle("active");
  };

  const noShowNavBar = () => {
    navRefLinks.current.classList.toggle("active");
  };
  return (
    <nav className='nav'>
      <div className='nav__container'>
        <a href='#home' className='nav__logo'>
          Richard Vu
        </a>
        <div ref={navRefLinks} className='nav__links'>
          <a href='#home' className='nav__link' onClick={noShowNavBar}>
            Home
          </a>
          <a href='#about' className='nav__link' onClick={noShowNavBar}>
            About
          </a>
          <a href='#projects' className='nav__link' onClick={noShowNavBar}>
            Projects
          </a>
          <a href='#contact' className='nav__link' onClick={noShowNavBar}>
            Contact
          </a>
          <a
            href='https://github.com/richardbvu'
            target='_blank'
            className='nav__link'
            onClick={noShowNavBar}
          >
            Github
          </a>
        </div>
        <div className='nav__toggle'>
          <FontAwesomeIcon icon={faBars} id='nav-icon' onClick={showNavBar} />
        </div>
      </div>
    </nav>
  );
};
export default Nav;
