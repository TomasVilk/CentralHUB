import {
  FC, useState, useEffect, useMemo, useRef,
} from 'react';
import { useTimer } from '../hooks/timer-context';

// @TODO timer starts with NAN:NAN:NAN then 00:00:01

const Timer: FC = () => {
  const { dispatch, state } = useTimer();
  const [, setTimerArr] = useState<string[]>(() => {
    const timers = localStorage.getItem('timerTime');
    return timers ? JSON.parse(timers) : [];
  });

  const intervalRef = useRef<any>(null);
  console.log(state.time);

  useEffect(() => {
    console.log(state.time);
    if (state.active) {
      intervalRef.current = setInterval(() => {
        dispatch({ type: 'START_TIMER', payload: { time: (Math.round((Date.now() - state.start!) / 1000) + state.pauseTime!) } });
      }, 1000);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [state.active]);

  const formatedTime = useMemo(() => {
    const h = Math.floor(state.time! / 3600);
    const m = Math.floor((state.time! % 3600) / 60);
    const s = Math.floor((state.time! % 3600) % 60);
    const hours = h < 10 ? `0${h}` : h;
    const minutes = m < 10 ? `0${m}` : m;
    const seconds = s < 10 ? `0${s}` : s;
    return `${hours}:${minutes}:${seconds}`;
  }, [state.time]);

  const startCounter = () => {
    dispatch({ type: 'START_TIMER' });
    dispatch({ type: 'OVERRIDE_TIMER', payload: { start: Date.now() } });
  };

  const endCounter = () => {
    setTimerArr((timers) => {
      const newTimers = [...timers, formatedTime];
      localStorage.setItem('timerTime', JSON.stringify(newTimers));
      return newTimers;
    });
    dispatch({ type: 'END_TIMER' });
  };

  const pauseCounter = () => {
    dispatch({ type: 'PAUSE_TIMER', payload: { pauseTime: state.time! } });
    clearInterval(intervalRef.current);
  };

  const resumeCounter = () => {
    dispatch({ type: 'RESUME_TIMER' });
    dispatch({ type: 'OVERRIDE_TIMER', payload: { start: Date.now() } });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-4xl font-semibold">
        {formatedTime}
      </span>
      { state.active || state.pause
        ? <button type="button" onClick={endCounter} className="disabled:cursor-not-allowed disabled:opacity-40 bg-indigo-400 text-white hover:bg-indigo-500 active focus:bg-indigo-600 focus:outline-none rounded-md p-1 px-3 m-2 shadow-xd">End</button>
        : <button type="button" onClick={startCounter} className="disabled:cursor-not-allowed disabled:opacity-40 bg-indigo-400 text-white hover:bg-indigo-500 active focus:bg-indigo-600 focus:outline-none rounded-md p-1 px-3 m-2 shadow-xd">Start</button>}
      { state.pause
        ? <button type="button" onClick={resumeCounter} className="disabled:cursor-not-allowed disabled:opacity-40 bg-indigo-400 text-white hover:bg-indigo-500 active focus:bg-indigo-600 focus:outline-none rounded-md p-1 px-3 m-2 shadow-xd">Resume</button>
        : <button type="button" onClick={pauseCounter} className="disabled:cursor-not-allowed disabled:opacity-40 bg-indigo-400 text-white hover:bg-indigo-500 active focus:bg-indigo-600 focus:outline-none rounded-md p-1 px-3 m-2 shadow-xd">Pause</button>}
    </div>
  );
};

export default Timer;
