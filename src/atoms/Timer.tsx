import {
  FC,
} from 'react';
import { formatTime, useTimer } from '../custom/timer-context';
import { CustomButton } from '../custom/CustomButton';

const Timer: FC = () => {
  const { dispatch, state } = useTimer();

  const startCounter = () => {
    dispatch({ type: 'START_TIMER' });
    dispatch({ type: 'OVERRIDE_TIMER', payload: { start: Date.now() } });
  };

  const endCounter = () => {
    dispatch({ type: 'END_TIMER' });
  };

  const pauseCounter = () => {
    dispatch({ type: 'PAUSE_TIMER', payload: { pauseTime: state.time! } });
  };

  const resumeCounter = () => {
    dispatch({ type: 'RESUME_TIMER' });
    dispatch({ type: 'OVERRIDE_TIMER', payload: { start: Date.now() } });
  };

  return (
    <div className="flex flex-col items-center justify-center shadow-xd rounded-xl h-56 w-60 relative">
      <svg viewBox="0 0 100 100">
        <g stroke="none" fill="none">
          <circle className="stroke-[7px] stroke-current text-gray-300" cx="50" cy="50" r="45" />
          <path
            id="base-timer-path-remaining"
            strokeDasharray="40" // 283 for full fill
            className="stroke-[7px] stroke-current text-green-400 transform rotate-90 origin-center transition-all duration-1000 ease-linear"
            strokeLinecap="round"
            d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0" />
        </g>
      </svg>
      {/* eslint-disable-next-line max-len */}
      {/* <span className="flex items-center justify-center text-2xl font-semibold shadow-xd rounded-full h-32 w-32 mb-4"> */}
      <span className="absolute w-[176px] h-[176px] top-0 flex items-center justify-center text-2xl font-semibold">
        {formatTime(state.time!)}
      </span>
      <div>
        { state.active || state.pause
          ? <CustomButton handleClick={endCounter} label="End" />
          : <CustomButton handleClick={startCounter} label="Start" />}
        { state.pause
          ? <CustomButton handleClick={resumeCounter} label="Resume" />
          : <CustomButton handleClick={pauseCounter} kill={!state.active} label="Pause" />}
      </div>
    </div>
  );
};

export default Timer;
