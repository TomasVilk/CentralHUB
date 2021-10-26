import MusicPanel from '../molecules/MusicPanel';
import Timer from '../atoms/Timer';
import TimerHistory from '../atoms/TimerHistory';

export const WorkSpace = () => (
  <div className="flex flex-row flex-wrap justify-around mt-10 ml-8 gap-8">
    <Timer />
    <TimerHistory />
    <MusicPanel />
  </div>
);

export default WorkSpace;
