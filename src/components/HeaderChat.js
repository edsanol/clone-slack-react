import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../assets/styles/components/HeaderChat.scss';
import '../assets/styles/components/HeaderChatGroup.scss';
import { Modal, Group } from '@mantine/core';
import { ModalMembersChannel } from './modals/ModalMembersChannel';

export const HeaderChat = () => {
  const [opened, setOpened] = useState(false);

  const { activeChat, users } = useSelector((state) => state.socketReducer);
  const { channels } = useSelector((state) => state.channelReducer);
  const userData = users.filter((user) => user._id === activeChat);
  const channelData = channels.filter((channel) => channel._id === activeChat);

  const verifyChatUser = users.map((e) => e._id === activeChat);
  const verifyChatChannel = channels.map((e) => e._id === activeChat);

  const userInChannel = users
    .filter((user) => user.channels.includes(activeChat))
    .slice(0, 3);

  return (
    <>
      {verifyChatUser.includes(true) ? (
        // CHAT DIRECT
        <div className="chat__header">
          <div className="chat__header-left">
            <img
              className="chat__header-left-image"
              src={userData[0].image}
              alt="user"
            />
            <span className={`user-${userData[0].state}`}></span>
            <h2>{userData[0].fullName}</h2>
          </div>
          <div className="chat__header-right"></div>
        </div>
      ) : verifyChatChannel.includes(true) ? (
        // CHAT GRUPAL
        <div className="chat__header">
          <div className="chat__header-left">
            {activeChat && channelData.length > 0 ? (
              <>
                <h2>{channelData[0].name}</h2>
                <p>{channelData[0].description}</p>
              </>
            ) : (
              'Welcome to Slack'
            )}
          </div>
          <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            overflow="inside"
            withCloseButton={false}
            size="lg">
            {
              <ModalMembersChannel
                title={`${users.length} members in talks`}
                paragraph={'Add people'}
                setOpened={setOpened}
              />
            }
          </Modal>
          <div className="chat__header-right">
            <div className="chat__header-right-users">
              {userInChannel.map((user, i) => (
                <img
                  className={`img-right${i + 1}`}
                  key={user._id}
                  src={user.image}
                  alt={user.fullName}
                />
              ))}
            </div>
            <Group>
              <i
                className="bx bx-user-plus"
                type="button"
                onClick={() => setOpened(true)}></i>
            </Group>
          </div>
        </div>
      ) : (
        // <div className="chat__header">
        //   <div className="chat__header-left">
        //     <h2>Welcome to Slack</h2>
        //   </div>
        //   <div className="chat__header-right"></div>
        // </div>
        ''
      )}
    </>
  );
};
