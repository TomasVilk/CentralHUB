import { FC, useState } from 'react';
import { albums, Youtube } from '../atoms/Youtube';
import { CustomButton } from '../custom/CustomButton';

const jammers = {
  link: 'https://www.youtube.com/embed/videoseries?list=PLlXuKWrgf1lul3V_Wd_-SFtHCqYO1fSaD',
  title: 'music for vibes',
};
const bangers = {
  link: 'https://www.youtube.com/embed/videoseries?list=PLlXuKWrgf1ltSzk9T1WDBRdFevpgK76Gx',
  title: 'banger sounds',
};
const lofi = {
  link: 'https://www.youtube.com/embed/5qap5aO4i9A',
  title: 'lofi for focus',
};

export const MusicPanel: FC = () => {
  const [playlist, setPlaylist] = useState<albums>(lofi);
  return (
    <div className="flex items-center flex-col">
      <Youtube {...playlist} />
      <div>
        <CustomButton handleClick={() => setPlaylist(jammers)} kill={playlist.title === jammers.title} label="Jams" />
        <CustomButton handleClick={() => setPlaylist(bangers)} kill={playlist.title === bangers.title} label="Bangers" />
        <CustomButton handleClick={() => setPlaylist(lofi)} kill={playlist.title === lofi.title} label="Lofi" />
      </div>
    </div>
  );
};

export default MusicPanel;
