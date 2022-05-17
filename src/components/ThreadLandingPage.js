import React, {useState} from 'react';
import { ThreadMessage } from '../components/ThreadMessage'
import '../assets/styles/components/ThreadLandingPage.scss';
import { RichInput } from '../components/RichInput';

export const ThreadLandingPage = ({ setHiddenThread }) => {
  

  const handleClickThread = () => {
    setHiddenThread(false)
  }

  return (
    <section className="thread__section-container">
      <div className="main__thread-header">
        <div className="thread-header-left">
          <h2>Thread</h2>
          <p>#uxui_design</p>
        </div>
        <div className="thread-header-right">
          <button className="thread__header-right-button-close" onClick={handleClickThread}>X</button>
        </div>
      </div>

      <div className="main__thread-content">
        <ThreadMessage />
        <ThreadMessage />
        <ThreadMessage />
        <ThreadMessage />
        <ThreadMessage />
        <ThreadMessage />
      </div>

      <div className="chat-input-thread">
        <RichInput />
      </div>

    </section>
  );
};
