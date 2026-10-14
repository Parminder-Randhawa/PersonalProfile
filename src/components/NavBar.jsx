import { useState } from 'react';
import { navLinks } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
        <nav>

          <a href="#home" className='mobile-home'>
            Home
          </a>

          <ul className='desktop-nav'>

            {navLinks.map(({label}) => (

              <li key={label}>
                <a href={'#${label.toLowerCase()}'}>{label}</a>
              </li>

            ))}
          </ul>

          <a href="/resume.pdf" className='resume-button'>
          Resume
          </a>

          <button className='menu-toggle' onClick= {() => setMenuOpen(prev => !prev)}>
            <FontAwesomeIcon icon= {menuOpen ? faXmark : faBars} />
          </button>

          {menuOpen && (
            <ul className='mobile-menu'>
      
              {navLinks.slice(1, -1).map(({label}) => (

                <li key={label}>
                  <a href={'#${label.toLowerCase()}'} onClick={closeMenu}>{label}</a>
                </li>
                
              ))}

              <li>
                <a href="/resume.pdf" onClick={closeMenu}>
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