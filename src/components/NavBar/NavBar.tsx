// npm modules
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
// types
import { User,Profile } from '../../types/models'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout} = props
  
  return (
    <nav>
      {user ?
        <ul>
          <li><NavLink className='navButton' to="/home">Home</NavLink></li>
          <li><NavLink className='navButton' to="/profiles">Profiles</NavLink></li>
          <li><NavLink className='navButton' to="/change-password">Change Password</NavLink></li>
          <li><NavLink className='navButton' to="" onClick={handleLogout}>LOG OUT</NavLink></li>
          <li><NavLink className='navButton' to="/new-post">post</NavLink></li>
        </ul>
      :
        <ul>
          <li><NavLink className='navButton' to="/login">Log In</NavLink></li>
          <li><NavLink className='navButton' to="/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
