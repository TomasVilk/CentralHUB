import {
  createContext, Dispatch, useContext, useEffect, useReducer, useRef,
} from 'react';

export interface StartTimerPayload {
    time: number;
}

export interface ORTimerPayload {
    start: number;
}

export interface PauseTimerPayload {
    pauseTime?: number;
}

export type TimerActions =
| { type: 'START_TIMER'; payload?: StartTimerPayload }
| { type: 'END_TIMER' }
| { type: 'PAUSE_TIMER'; payload: PauseTimerPayload}
| { type: 'RESUME_TIMER' }
| { type: 'OVERRIDE_TIMER'; payload: ORTimerPayload }
| { type: 'CLEAR_HISTORY' }

export interface TimerState {
    time?: number;
    start?: number;
    active?: boolean;
    pause?: boolean;
    pauseTime?: number;
    history: string[];
}

const getTimers = () => {
  const timers = localStorage.getItem('timerTime');
  return timers ? JSON.parse(timers) : [];
};

export const formatTime = (time:number) => {
  const h = Math.floor(time! / 3600);
  const m = Math.floor((time! % 3600) / 60);
  const s = Math.floor((time! % 3600) % 60);
  const hours = h < 10 ? `0${h}` : h;
  const minutes = m < 10 ? `0${m}` : m;
  const seconds = s < 10 ? `0${s}` : s;
  return `${hours}:${minutes}:${seconds}`;
};

export const menuTime = (time:number) => {
  const h = Math.floor(time! / 3600);
  const m = Math.floor((time! % 3600) / 60);
  const hours = h < 10 ? `0${h}` : h;
  const minutes = m < 10 ? `0${m}` : m;
  return `${hours}:${minutes}`;
};

const TimerContext = createContext<{
    state: TimerState; dispatch: Dispatch<TimerActions>
}>(undefined!);

const initialState = {
  time: 0, start: Date.now(), active: false, pause: false, pauseTime: 0, history: getTimers(),
};

function timerReducer(state: TimerState, action: TimerActions) {
  switch (action.type) {
    case 'START_TIMER': {
      return {
        ...state, time: action.payload?.time ?? 0, active: true, start: Date.now(),
      };
    }
    case 'END_TIMER': {
      const newTimers = [...(state.history ?? []), formatTime(state.time!)];
      localStorage.setItem('timerTime', JSON.stringify(newTimers));
      return {
        ...state, pause: false, active: false, pauseTime: 0, time: 0, history: newTimers,
      };
    }
    case 'PAUSE_TIMER': {
      return {
        ...state, pauseTime: action.payload.pauseTime, pause: !state.pause, active: !state.active,
      };
    }
    case 'RESUME_TIMER': {
      return {
        ...state, pause: !state.pause, active: !state.active,
      };
    }
    case 'OVERRIDE_TIMER': {
      return { ...state, start: action.payload.start };
    }
    case 'CLEAR_HISTORY': {
      return { ...state, history: [] };
    }
    default: {
      return state;
    }
  }
}

function TimerProvider({ children }: any) {
  const [state, dispatch] = useReducer(timerReducer, initialState);
  const value = { state, dispatch };
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    if (state.active) {
      intervalRef.current = setInterval(() => {
        dispatch({ type: 'START_TIMER', payload: { time: (Math.round((Date.now() - state.start!) / 1000) + state.pauseTime!) } });
      }, 1000);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [state.active]);

  return <TimerContext.Provider value={value}>{children}</TimerContext.Provider>;
}

function useTimer() {
  const context = useContext(TimerContext);
  return context;
}

export { TimerProvider, useTimer };
