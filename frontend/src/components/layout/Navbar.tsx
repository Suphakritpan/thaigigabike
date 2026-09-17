import { NavLink } from 'react-router-dom';
import { mainNavLinks } from '@/data/navigation';

export function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {mainNavLinks.map((link) => (
          <li className="navbar__item" key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              end
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
