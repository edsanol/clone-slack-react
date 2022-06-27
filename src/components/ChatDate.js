import React from 'react';
import '../assets/styles/components/ChatDate.scss';
import { timeDateGeneral } from '../helpers/timeDate';

export const ChatDate = ({ date }) => {
  return (
    <div className="line-divider">
      <button className="button-date">{timeDateGeneral(date)} ⌵</button>
    </div>
  );
};
