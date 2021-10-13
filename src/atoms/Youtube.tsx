import { FC } from 'react';

export interface albums {
  link: string;
  title: string;
}

export const Youtube:FC<albums> = ({ link, title }) => (
  <iframe src={link} title={title} width="560" height="315" className="rounded-2xl shadow-xd" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
);
