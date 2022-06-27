import React, { useEffect, useState } from 'react';
import { HeaderLandingPage } from '../components/HeaderLandingPage';
import { Aside } from '../components/Aside';
import { HeaderChat } from '../components/HeaderChat';
import { BoxChatMessage } from '../components/BoxChatMessage';
import { ThreadLandingPage } from '../components/ThreadLandingPage';
import { HelpLandingPage } from '../components/HelpLandingPage';
import { ProfileLandingPage } from '../components/ProfileLandingPage';
import { ShowUsersProfile } from '../components/ShowUsersProfile';
import RichInput from '../components/RichInput';
import { useDispatch, useSelector } from 'react-redux';
import { getChannelsAction } from '../store/actions/actionsChannel';
import {
  getActiveWorkspaceAction,
  getWorkspaceAction,
  startChecking,
} from '../store/actions/actionsAuth';
import { getUsersAction, getUsersIdAction } from '../store/actions/actionUsers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSocket } from '../hooks/useSocket';
import {
  actionsSocket,
  getAllMessagesChannelAction,
  getAllUserSocketAction,
  getMessagesAction,
  messageToChannel,
  messageToDirectMessage,
  messageToDirectMessageCurrent,
  newMessage,
} from '../store/actions/actionsSocket';
import {
  actionsGetmessagesDB,
  newThreadMessage,
} from '../store/actions/actionsThread';

export const LandingPage = () => {
  const dispatch = useDispatch();
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showAddChannel, setshowAddChannel] = useState(false);
  const [showAddWorkspace, setShowAddWorkspace] = useState(false);
  const sockets = useSocket(process.env.REACT_APP_URL_BACKEND);

  useEffect(() => {
    dispatch(actionsSocket(sockets));
  }, [sockets, dispatch]);

  useEffect(() => {
    sockets.socket?.on('emitAllUsers', (allUsers) => {
      dispatch(getAllUserSocketAction(allUsers));
    });
  }, [sockets.socket, dispatch]);

  const showView = useSelector((state) => state.changeViewReducer.hiddenView);
  const { uid } = useSelector((state) => state.authReducer);
  const chatMessage = useSelector((state) => state.socketReducer.messages);
  const activeChat = useSelector((state) => state.socketReducer.activeChat);
  const workspaceActive = useSelector((state) => state.authReducer.workspaceId);

  useEffect(() => {
    dispatch(getUsersIdAction(uid));
    dispatch(startChecking());
    dispatch(getChannelsAction());
    dispatch(getUsersAction());
    dispatch(getWorkspaceAction());
    dispatch(getActiveWorkspaceAction());
  }, [dispatch, uid]);

  useEffect(() => {
    sockets.socket?.on('sendMessageUser', (messageReceived) => {
      dispatch(newMessage(messageReceived));
      dispatch(messageToDirectMessage(messageReceived.from));
      dispatch(messageToDirectMessageCurrent(messageReceived));
    });
    sockets.socket?.on('sendMessageChannel', (messageReceived) => {
      dispatch(newMessage(messageReceived));
      dispatch(messageToChannel(messageReceived.to));
    });
    sockets.socket?.on('getMessagesChannel', (messageReceivedChannel) => {
      dispatch(getAllMessagesChannelAction(messageReceivedChannel));
    });
    sockets.socket?.on('sendMessageThread', (messageReceived) => {
      dispatch(newThreadMessage(messageReceived));
    });

    sockets.socket?.on('getThreadMessages', (ThreadMessageReceived) => {
      dispatch(actionsGetmessagesDB(ThreadMessageReceived));
    });
  }, [sockets.socket, dispatch]);

  return (
    <>
      <HeaderLandingPage
        setShowProfileOptions={setShowProfileOptions}
        showProfileOptions={showProfileOptions}
      />
      <main className="main__full-container">
        <Aside
          showAddChannel={showAddChannel}
          setshowAddChannel={setshowAddChannel}
          setShowAddWorkspace={setShowAddWorkspace}
          showAddWorkspace={showAddWorkspace}
        />
        <section
          className={`main__section-main ${
            activeChat && 'section-main__view'
          }`}>
          <div
            className={
              showView === 'hiddenAll'
                ? 'main__div-chat-full'
                : 'main__div-chat'
            }>
            <HeaderChat />
            {!activeChat && (
              <section className="main__section-chat-image">
                <main className="main__container">
                  <div className="main__div-chat-container">
                    <img
                      className="main__img-chat"
                      src="https://i.postimg.cc/pdTJcvtL/logo-sin-fondo.gif"
                      alt=""
                    />
                    <h2>Welcome to Slack</h2>
                  </div>
                  <p>
                    Welcome to the Make It Real Workspace, by default you will
                    be included in this workspace to be able to interact with
                    all members of the community
                  </p>
                </main>
              </section>
            )}
            <div className="chat__div-message">
              {chatMessage
                .filter((item) => item.workSpaceId === workspaceActive)
                .map((itemChat) => (
                  <BoxChatMessage
                    key={itemChat._id}
                    fullName={itemChat.fullName}
                    image={itemChat.image}
                    message={itemChat.message}
                    createdAt={itemChat.createdAt}
                    _id={itemChat._id}
                    likes={itemChat.likes}
                    thread={itemChat.thread}
                    showDate={itemChat.showDate}
                  />
                ))}
            </div>
            <div
              className={
                showView === 'hiddenAll'
                  ? 'main__div-input-full'
                  : 'main__div-input'
              }>
              {activeChat && <RichInput />}
            </div>
          </div>
          {showView === 'showThread' && (
            <div className="main__div-thread">
              <ThreadLandingPage />
            </div>
          )}
          {showView === 'showHelp' && (
            <div className="main__div-thread">
              <HelpLandingPage />
            </div>
          )}
          {showView === 'showProfile' && (
            <div className="main__div-thread">
              <ProfileLandingPage />
            </div>
          )}
          {showView === 'showUsersProfile' && (
            <div className="main__div-thread">
              <ShowUsersProfile />
            </div>
          )}

          <ToastContainer />
        </section>
      </main>
    </>
  );
};
