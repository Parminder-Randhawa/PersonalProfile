import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <header>
        <nav>

          <ul>
            {[
              {label: 'Home'},
              {label: 'About'},
              {label: 'Experience'},
              {label: 'Projects'},
              {label: 'Contact'}
            ].map(({label}) => (
              <li key={label}>
                <a href={label}>{label}</a>
              </li>
            ))}
          </ul>

          <a href="/resume.pdf" className='resume-button'>Resume</a>

        </nav>
    </header>
  )
}

export default NavBar