import {
  FC,
} from 'react';
import { formatTime, useTimer } from '../hooks/timer-context';

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
          ? <button type="button" onClick={endCounter} className="mainbutton">End</button>
          : <button type="button" onClick={startCounter} className="mainbutton">Start</button>}
        { state.pause
          ? <button type="button" onClick={resumeCounter} className="mainbutton">Resume</button>
          : <button type="button" onClick={pauseCounter} className="mainbutton">Pause</button>}
      </div>
    </div>
  );
};

export default Timer;
