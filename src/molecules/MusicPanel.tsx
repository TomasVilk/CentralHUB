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
      <h1 className="text-3xl font-bold uppercase text-center">Listen to some music</h1>
      <Youtube {...playlist} />
      <div>
        <button type="button" onClick={() => setPlaylist(jammers)} disabled={playlist.title === jammers.title} className="disabled:cursor-not-allowed disabled:opacity-40 bg-indigo-400 text-white hover:bg-indigo-500 focus:bg-indigo-600 focus:outline-none rounded-md p-1 px-3 m-2 shadow-xd">Jams</button>
        <button type="button" onClick={() => setPlaylist(bangers)} disabled={playlist.title === bangers.title} className="disabled:cursor-not-allowed disabled:opacity-40 bg-indigo-400 text-white hover:bg-indigo-500 active focus:bg-indigo-600 focus:outline-none rounded-md p-1 px-3 m-2 shadow-xd">Bangers</button>
        <button type="button" onClick={() => setPlaylist(lofi)} disabled={playlist.title === lofi.title} className="disabled:cursor-not-allowed disabled:opacity-40 bg-indigo-400 text-white hover:bg-indigo-500 active focus:bg-indigo-600 focus:outline-none rounded-md p-1 px-3 m-2 shadow-xd">Lofi</button>
      </div>
    </div>
  );
};

export default MusicPanel;
