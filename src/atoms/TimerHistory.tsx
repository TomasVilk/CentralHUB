import {
  FC,
} from 'react';

// TODO: add button to clear localstorage
// TODO: create timer history interface

const TimerHistory: FC = () => {
  const timerArr = (): string[] => {
    const timers = localStorage.getItem('timerTime');
    return timers ? JSON.parse(timers) : [];
  };
  const display = () => {
    if (timerArr() != null) {
      return timerArr().map((times, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>{times}</div>
      ));
    }
    return 'There are no times recorded';
  };
  return (
    <div>{display()}</div>
  );
};

export default TimerHistory;
