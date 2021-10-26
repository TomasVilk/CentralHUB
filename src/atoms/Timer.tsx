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
    <div className="flex flex-col items-center justify-center shadow-xd rounded-xl h-56 w-60 ">
      <span className="flex items-center justify-center text-2xl font-semibold shadow-xd rounded-full h-32 w-32 mb-4">
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
