import React, { useEffect, useState } from 'react';
import { ChannelMessageGroup } from './ChannelMessageGroup';
import { DirectMessageUser } from './DirectMessageUser';
import { Collapse } from '@mantine/core';
import { Group, Modal } from '@mantine/core';
import { PopoverAddChannel } from './PopoverAddChannel';
import { useSelector } from 'react-redux';
import { ModalListUsers } from './modals/ModalListUsers';
import { ModalBecomePremium } from './modals/ModalBecomePremium';
import { AsideWorkspace } from './AsideWorkspace';

export const Aside = ({
  showAddChannel,
  setshowAddChannel,
  setShowAddWorkspace,
  showAddWorkspace,
}) => {
  const [openedChannels, setOpenChannels] = useState(true);
  const [openedChats, setOpenChats] = useState(true);
  const [opened, setOpened] = useState(false);
  const [openedModal, setOpenedModal] = useState(false);
  const [openedPopover, setOpenedPopover] = useState(false);

  const handleClickChannel = () => {
    showAddChannel ? setshowAddChannel(false) : setshowAddChannel(true);
  };

  const handleWorkspace = () => {
    showAddWorkspace ? setShowAddWorkspace(false) : setShowAddWorkspace(true);
  };

  const hiddenScroll = useSelector(
    (state) => state.changeStateReducer.hiddenScroll
  );
  const OpenCloseAside = useSelector(
    (state) => state.changeViewReducer.hiddenAside
  );

  const channelsByUser = useSelector((state) => state.channelReducer.channels);
  const workspaceByUser = useSelector((state) => state.authReducer.workspace);
  const channelsloading = useSelector((state) => state.channelReducer.loading);
  const memberInChannel = useSelector((state) => state.authReducer.uid);
  const workspaceActive = useSelector((state) => state.authReducer.workspaceId);
  const { users, socket } = useSelector((state) => state.socketReducer);
  const userPremium = useSelector((state) => state.userReducer.user.premium);
  let allUser = users;

  const channelIds = () => {
    let channelIds = [];
    channelsByUser
      .filter((channels) => channels.users.includes(memberInChannel))
      .forEach((channel) => {
        channelIds.push(channel._id);
      });
    return channelIds;
  };

  const handlePremium = () => {
    setOpenedModal(true);
  };

  useEffect(() => {
    if (socket) {
      socket.emit('join-channel', channelIds());
    }
  }, [socket, channelIds()]);

  return (
    <div
      className={
        OpenCloseAside === 'hiddenAside'
          ? 'aside-container-open'
          : 'aside-container'
      }>
      <section className="aside-section-workspace">
        {workspaceByUser
          .filter((workspace) => workspace.users.includes(memberInChannel))
          .map((workspace) => {
            return (
              <AsideWorkspace
                key={workspace._id}
                name={workspace.name}
                workspaceId={workspace._id}
              />
            );
          })}
        <div type="button" onClick={handleWorkspace}></div>
        <PopoverAddChannel
          name={'+'}
          setOpenedPopover={setOpenedPopover}
          openedPopover={openedPopover}
        />
      </section>

      <section className="aside-section-channels">
        <div className="aside-channels-header">
          {workspaceByUser
            .filter((workspace) => workspace._id === workspaceActive)
            .map((workspace) => {
              return <p key={workspace._id}>{workspace.name}ㅤ</p>;
            })}
        </div>

        <aside
          className={
            hiddenScroll
              ? 'aside-header-channels-hidden'
              : 'aside-header-channels'
          }>
          <ul className="aside-section-channels-options">
            {userPremium === false && (
              <li
                className="list-channels-options-subtitles"
                onClick={handlePremium}>
                <p className="p-channels-options-subtitles">
                  Become a premium user
                </p>
              </li>
            )}
          </ul>

          <Modal
            opened={openedModal}
            onClose={() => setOpenedModal(false)}
            overflow="inside"
            size="md"
            zIndex={999}>
            <ModalBecomePremium />
          </Modal>

          <ul className="aside-section-channels-channels">
            <li className="list-channels-options">
              <p
                className="p-channels-options-subtitles"
                type="button"
                onClick={() => setOpenChannels((o) => !o)}>
                {openedChannels ? '▼' : '▶'}ㅤChannels
              </p>
              <Collapse
                in={openedChannels}
                transitionDuration={0}
                transitionTimingFunction="linear">
                <ul className="aside-section-channels-dropdown">
                  {channelsloading
                    ? 'Cargando...'
                    : channelsByUser
                        .filter((channels) =>
                          channels.users.includes(memberInChannel)
                        )
                        .filter(
                          (channels) => channels.workSpaceId === workspaceActive
                        )
                        .map((channel) => {
                          return (
                            <ChannelMessageGroup
                              key={channel._id}
                              channelId={channel._id}
                              name={channel.name}
                              premium={channel.premium}
                            />
                          );
                        })}

                  <li className="list-channels-add-channels">
                    <button
                      className="button-add-channels"
                      type="button"
                      onClick={handleClickChannel}>
                      +
                    </button>
                    <PopoverAddChannel name={'add channel'} />
                  </li>
                </ul>
              </Collapse>
            </li>
          </ul>

          <ul className="aside-section-channels-directs">
            <li className="list-channels-options">
              <p
                className="p-channels-options-subtitles"
                type="button"
                onClick={() => setOpenChats((o) => !o)}>
                {openedChats ? '▼' : '▶'}ㅤDirect messages
              </p>
              <Collapse
                in={openedChats}
                transitionDuration={0}
                transitionTimingFunction="linear">
                <ul>
                  {allUser
                    .filter((user) =>
                      user.workSpaceId.includes(workspaceActive)
                    )
                    .map((user) => (
                      <DirectMessageUser
                        key={user._id}
                        userId={user._id}
                        fullName={user.fullName}
                        state={user.state}
                        image={user.image}
                      />
                    ))}

                  <li className="list-channels-dropdown-direct">
                    <button className="button-add-channels">+</button>{' '}
                    <Group>
                      <p type="button" onClick={() => setOpened(true)}>
                        View user information
                      </p>
                    </Group>
                  </li>
                  <li id="li__hidden">
                    <div></div>
                  </li>
                </ul>
              </Collapse>
            </li>
          </ul>
          <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            overflow="inside"
            withCloseButton={false}
            size="lg">
            {<ModalListUsers setOpened={setOpened} />}
          </Modal>
        </aside>
      </section>
    </div>
  );
};
