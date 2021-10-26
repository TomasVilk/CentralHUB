import { useState } from 'react';
import SiteLogo from '../atoms/SiteLogo';
import NavLinks from '../atoms/NavLinks';
import { formatTime, useTimer } from '../hooks/timer-context';

// @TODO style non active and active timer in nav

export const Navigation = () => {
  const { state } = useTimer();
  const [open, setOpen] = useState(false);
  return (
    <div className={`flex flex-col justify-start bg-[#B52424] w-20 shadow-insetXD drop-shadow-2xl min-h-screen transition-width duration-500 ease-in-out ${open && 'w-40'}`}>
      <SiteLogo />
      <button type="button" onClick={() => setOpen(!open)} className={`"flex flex-col justify-center items-center relative left-[70px] bg-[#B52424] shadow-xd w-[22px] h-[22px] rounded-full transition-all duration-500 ease-in-out transform hover:scale-150 active:scale-150 focus:outline-none focus:ring focus:ring-blue-600" ${open && 'left-[150px]'}`}>
        <span className={`block h-[1.5px] w-[8px] bg-black rounded absolute transform rotate-45 left-[7.5px] top-[7.5px] transition-all duration-500 ease-in-out ${open && 'left-[6px] top-[13px]'}`} />
        <span className={`block h-[1.5px] w-[8px] bg-black rounded absolute transform -rotate-45 left-[7.5px] top-[12.5px] transition-all duration-500 ease-in-out ${open && 'left-[6px] top-[8px]'}`} />
      </button>
      <NavLinks />
      <span>{formatTime(state.time!)}</span>
    </div>
  );
};

export default Navigation;
