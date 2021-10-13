import MusicPanel from '../molecules/MusicPanel';
import Timer from '../atoms/Timer';
import TimerHistory from '../atoms/TimerHistory';

export const WorkSpace = () => (
  <div className="flex flex-row justify-around pt-10 gap-8">
    <Timer />
    <TimerHistory />
    <MusicPanel />
  </div>
);

export default WorkSpace;
