import { NavLink } from 'react-router-dom';
import { ReactComponent as Workspace } from '../assets/workspace.svg';
import { ReactComponent as Library } from '../assets/library.svg';

const NavLinks = () => (
  <nav className="flex items-center justify-center">
    <ul className="flex flex-col items-center justify-center gap-5 text-white pt-5">
      <li>
        <NavLink to="/workspace">
          <Workspace className="fill-current text-white w-8 h-8 filter drop-shadow-hmm hover:text-red-200" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/library">
          <Library className="fill-current text-white w-8 h-8 filter drop-shadow-hmm hover:text-red-200" />
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavLinks;
