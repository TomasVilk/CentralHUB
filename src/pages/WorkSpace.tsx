import MusicPanel from '../molecules/MusicPanel';
import Timer from '../atoms/Timer';
import TimerHistory from '../atoms/TimerHistory';

export const WorkSpace = () => (
  <div className="h-full w-full flex flex-row flex-wrap justify-around pt-10 pl-8 gap-8">
    <div>
      <Timer />
      <TimerHistory />
    </div>
    <MusicPanel />
  </div>
);

export default WorkSpace;
