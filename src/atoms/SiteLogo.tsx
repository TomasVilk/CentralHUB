import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';

export const SiteLogo = () => (
  <div className="flex items-center justify-center">
    <NavLink to="/">
      <Logo className="fill-current text-white w-20 h-20  filter drop-shadow-hmm hover:text-red-200" />
    </NavLink>
  </div>
);

export default SiteLogo;
