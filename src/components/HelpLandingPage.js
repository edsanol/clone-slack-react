import React, { useState } from 'react';
import cohete from '../assets/images/cohete.png';
import emoti from '../assets/images/emoti.png';
import notification from '../assets/images/notification.png';
import user from '../assets/images/user.png';
import { useDispatch } from 'react-redux';
import { actionsChangeView } from '../store/actions/actionsChangeView';
import { Modal } from '@mantine/core';
import { Link } from 'react-router-dom';
import '../assets/styles/components/HelpLandingPage.scss';

export const HelpLandingPage = () => {
  const [openedQuick, setOpenedQuick] = useState(false);
  const [openedNotification, setOpenedNotification] = useState(false);
  const [openedStatus, setOpenedStatus] = useState(false);
  const [openedLike, setOpenedLike] = useState(false);
  const dispatch = useDispatch();

  const handleClickHelpClose = () => {
    dispatch(actionsChangeView('hiddenAll'));
  };

  return (
    <div className="div-help-container">
      <div className="div-help-header">
        <h2>Help</h2>
        <div className="help-header-icon">
          <div className="help-icon">
            <i
              className="fa-solid fa-xmark"
              type="button"
              onClick={handleClickHelpClose}></i>
          </div>
        </div>
      </div>
      <div>
        <div className="div-help-box-container">
          <div className="div-help-boxes" onClick={() => setOpenedQuick(true)}>
            <div className="div-box-icon-select">
              <img className="img-cohete" src={cohete} alt="img" />
            </div>
            <div>
              <h2>Quick start guide</h2>
              <p>Learn the basics and get to work in Slack</p>
            </div>
          </div>
          <Modal
            opened={openedQuick}
            onClose={() => setOpenedQuick(false)}
            overflow="inside"
            title="⭐ Quick start guide">
            <div>
              <ul>
                <li>✔️ Choose a channel or user to chat</li>
                <img
                  className="help-images"
                  src="https://i.postimg.cc/jdXZWzdz/chat.png"
                  alt="chat"
                />
                <li>✔️ Search user´s profile</li>
                <img
                  className="help-images"
                  src="https://i.postimg.cc/brRbgj5J/user-profile.png"
                  alt="profile"
                />
                <li>✔️ Edit your profile</li>
                <img
                  className="help-images"
                  src="https://i.postimg.cc/HLpjQs88/edit-profile.png"
                  alt="edit profile"
                />
                <li>✔️ Create a new channel</li>
                <img
                  className="help-images"
                  src="https://i.postimg.cc/LXqr0wJB/create-channel.png"
                  alt="create channel"
                />
                <li>✔️ Create a new workspace</li>
                <img
                  className="help-images"
                  src="https://i.postimg.cc/6phmQtsp/create-workspace.png"
                  alt="create workspace"
                />
              </ul>
            </div>
          </Modal>

          <div
            className="div-help-boxes"
            onClick={() => setOpenedNotification(true)}>
            <div className="div-box-icon">
              <img className="img-notifications" src={notification} alt="img" />
            </div>
            <h2>Slack Notifications</h2>
          </div>
          <Modal
            opened={openedNotification}
            onClose={() => setOpenedNotification(false)}
            overflow="inside"
            title="🔔 Slack Notifications">
            <div>
              <ul>
                <li>
                  ✔️ Receive a notification when someone sends you a message
                </li>
                <img
                  className="help-images"
                  src="https://i.postimg.cc/3ws2GfDb/notification.png"
                  alt="mention"
                />
              </ul>
            </div>
          </Modal>

          <div className="div-help-boxes" onClick={() => setOpenedStatus(true)}>
            <div className="div-box-icon">
              <img className="img-user" src={user} alt="img" />
            </div>
            <h2>Set your Slack status and availability</h2>
          </div>
          <Modal
            opened={openedStatus}
            onClose={() => setOpenedStatus(false)}
            overflow="inside"
            title="💬 Slack Status">
            <div>
              <ul>
                <li>✔️ Set your status to “Away” 🟡 or “Active” 🟢</li>
                <img
                  className="help-images"
                  src="https://i.postimg.cc/2jgX5NmR/status-active.png"
                  alt="status active"
                />
                <img
                  className="help-images"
                  src="https://i.postimg.cc/mZP5R2vy/status-away.png"
                  alt="status away"
                />
              </ul>
            </div>
          </Modal>

          <div className="div-help-boxes" onClick={() => setOpenedLike(true)}>
            <div className="div-box-icon">
              <img className="img-emoti" src={emoti} alt="img" />
            </div>
            <h2>Use like reaction</h2>
          </div>
          <Modal
            opened={openedLike}
            onClose={() => setOpenedLike(false)}
            overflow="inside"
            title="💖 Use like reaction">
            <div>
              <ul>
                <li>
                  ✔️ Use the “like” reaction to express your opinion about a
                  message
                </li>
                <img
                  className="help-images"
                  src="https://i.postimg.cc/QxBph79N/like.png"
                  alt="like"
                />
              </ul>
            </div>
          </Modal>
        </div>
      </div>
      <div className="help-footer-container">
        <div className="help-footer-subtitle">
          <h2>
            <Link to="/project">About project</Link>
          </h2>
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
        <button className="button-help-footer">
          <Link to="/aboutus">About us</Link>
        </button>
      </div>
    </div>
  );
};
