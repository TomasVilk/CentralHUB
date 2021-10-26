import { FC } from 'react';
import { useTimer } from '../custom/timer-context';

// @TODO create box style for each timer value

const TimerHistory: FC = () => {
  const { dispatch, state } = useTimer();

  const timerArr = state.history;

  const display = () => {
    if (timerArr != null) {
      return timerArr.map((times, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>{times}</div>
      ));
    }
    return 'There are no times recorded';
  };

  const clearHistory = () => {
    dispatch({ type: 'CLEAR_HISTORY' });
    localStorage.clear();
  };

  return (
    <div>
      <div className="flex items-center justify-center flex-col">{display()}</div>
      <button type="button" onClick={clearHistory} className="mainbutton">clear history</button>
    </div>
  );
};

export default TimerHistory;
