import {
  createContext, Dispatch, useContext, useReducer,
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
| { type: 'RESUME_TIMER'}
| { type: 'OVERRIDE_TIMER'; payload: ORTimerPayload };

export interface TimerState {
    time?: number;
    start?: number;
    active?: boolean;
    pause?: boolean;
    pauseTime?: number;
}

const TimerContext = createContext<{
    state: TimerState; dispatch: Dispatch<TimerActions>
}>(undefined!);

const initialState = {
  time: 0, start: Date.now(), active: false, pause: false, pauseTime: 0,
};

function timerReducer(state: TimerState, action: TimerActions) {
  switch (action.type) {
    case 'START_TIMER': {
      return {
        ...state, time: action.payload?.time, active: true, start: Date.now(),
      };
    }
    case 'END_TIMER': {
      return {
        ...state, pause: false, active: false, pauseTime: 0, time: 0,
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
    default: {
      return state;
    }
  }
}

function TimerProvider({ children }: any) {
  const [state, dispatch] = useReducer(timerReducer, initialState);
  const value = { state, dispatch };
  return <TimerContext.Provider value={value}>{children}</TimerContext.Provider>;
}

function useTimer() {
  const context = useContext(TimerContext);
  return context;
}

export { TimerProvider, useTimer };
