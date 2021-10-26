import { FC, useState } from 'react';
import { albums, Youtube } from '../atoms/Youtube';

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
        <button type="button" onClick={() => setPlaylist(jammers)} disabled={playlist.title === jammers.title} className="mainbutton">Jams</button>
        <button type="button" onClick={() => setPlaylist(bangers)} disabled={playlist.title === bangers.title} className="mainbutton">Bangers</button>
        <button type="button" onClick={() => setPlaylist(lofi)} disabled={playlist.title === lofi.title} className="mainbutton">Lofi</button>
      </div>
    </div>
  );
};

export default MusicPanel;
