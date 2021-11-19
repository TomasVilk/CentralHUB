import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Workspace } from '../assets/workspace.svg';
import { ReactComponent as Library } from '../assets/library.svg';
import { menuTime, useTimer } from '../custom/timer-context';

export const Navigation = () => {
  const { state } = useTimer();
  const [open, setOpen] = useState(false);
  return (
    <div onBlur={() => setOpen(false)} className={`flex flex-col justify-start bg-[#B52424] w-20 shadow-insetXD drop-shadow-2xl min-h-screen transition-width duration-500 ease-in-out ${open && 'w-40'}`}>
      <NavLink to="/" className="flex items-center justify-center">
        <Logo className="fill-current text-white w-20 h-20  filter drop-shadow-hmm hover:text-red-200" />
      </NavLink>
      <button type="button" onClick={() => setOpen(!open)} className={`"flex flex-col justify-center items-center relative left-[70px] bg-[#B52424] shadow-xd w-[22px] h-[22px] rounded-full transition-all duration-500 ease-in-out transform hover:scale-150 active:scale-150 focus:outline-none focus:ring focus:ring-blue-600" ${open && 'left-[150px]'}`}>
        <span className={`block h-[1.5px] w-[8px] bg-black rounded absolute transform rotate-45 left-[7.5px] top-[7.5px] transition-all duration-500 ease-in-out ${open && 'left-[6px] top-[13px]'}`} />
        <span className={`block h-[1.5px] w-[8px] bg-black rounded absolute transform -rotate-45 left-[7.5px] top-[12.5px] transition-all duration-500 ease-in-out ${open && 'left-[6px] top-[8px]'}`} />
      </button>
      <nav className="flex items-center justify-center">
        <ul className="flex flex-col gap-5 text-white pt-5">
          <li>
            <NavLink to="/workspace" className="group flex items-center justify-start">
              <Workspace className="fill-current text-white w-8 h-8 filter drop-shadow-hmm group-hover:text-red-200 mr-1" />
              <span className={`font-semibold disabled:transtition-hover w-0 overflow-hidden transition-all duration-500 ease-in-out ${open ? 'visible w-[80px] delay-500' : 'invisible'}`}><p className="group-hover:text-red-200">Workspace</p></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/library" className="group flex items-center justify-start">
              <Library className="fill-current text-white w-8 h-8 filter drop-shadow-hmm group-hover:text-red-200 mr-1" />
              <span className={`font-semibold w-0 overflow-hidden transition-all duration-500 ease-in-out ${open ? 'visible w-16 delay-500' : 'invisible'}`}><p className="group-hover:text-red-200">Library</p></span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <span className="flex items-center justify-center mt-auto mb-2 self-center justify-self-end font-semibold text-white border-2 rounded-full h-14 w-14">{menuTime(state.time!)}</span>
    </div>
  );
};

export default Navigation;
