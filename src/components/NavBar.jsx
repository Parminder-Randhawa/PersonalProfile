import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
        <nav>

          <a href="#hero" className='mobile-home'>
            Home
          </a>

          <ul className='desktop-nav'>

            <a href="#hero">Home</a>
            <a href="#about-me">About</a>
            <a href="#projects">Projects</a>
            {/* <a href="#experience">Experience</a>
            <a href="#contact">Contact</a> */}

          </ul>

          <a href="/Parminder_Randhawa_Resume.pdf" className='resume-button'>
          Resume
          </a>

          <button className='menu-toggle' onClick= {() => setMenuOpen(prev => !prev)}>
            <FontAwesomeIcon icon= {menuOpen ? faXmark : faBars} />
          </button>

          {menuOpen && (
            <ul className='mobile-menu'>

              <a href="#about-me" onClick={closeMenu}>About</a>
              <a href="#projects" onClick={closeMenu}>Projects</a>
              {/* <a href="#experience" onClick={closeMenu}>Experience</a>
              <a href="#contact" onClick={closeMenu}>Contact</a> */}
              
              <li>
                <a href="/Parminder_Randhawa_Resume.pdf" onClick={closeMenu}>
                  Resume
                </a>
              </li>
            </ul>
          )}

        </nav>
    </header>
  )
}

export default NavBar