import { NavLink } from 'react-router-dom';
import loginPng from '../assets/image.png';
export default function Header() {
  return (
    <header>
      <h1>#VANLIFE</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/host">Host</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/vans">Vans</NavLink>
        <NavLink to="login" className="login-link">
          <img src={loginPng} alt="login" className="login-icon" />
        </NavLink>
      </nav>
    </header>
  );
}
