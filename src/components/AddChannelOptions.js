import React, { useState } from 'react';
import '../assets/styles/components/AddChannelOptions.scss';
import { Modal } from '@mantine/core';
import { ModalCreateChannel } from './modals/ModalCreateChannel';
import { ModalListChannels } from './modals/ModalListChannels';

export const AddChannelOptions = ({ setOpenedPopoverAddChannel }) => {
  const [opened, setOpened] = useState(false);
  const [openedNewChannel, setOpenedNewChannel] = useState(false);

  return (
    <div className="channel-options__container">
      <div className="channel-options__options">
        <p
          data-cy="create-channel-click-event"
          type="button"
          onClick={() => setOpenedNewChannel(true)}>
          Create a new channel
        </p>
      </div>
      <Modal
        opened={openedNewChannel}
        onClose={() => setOpenedNewChannel(false)}
        overflow="inside"
        withCloseButton={false}
        size="md"
        zIndex={999}>
        {<ModalCreateChannel setOpenedNewChannel={setOpenedNewChannel} setOpenedPopoverAddChannel={setOpenedPopoverAddChannel}/>}
      </Modal>
      <div className="channel-options__options">
        <p
          data-cy="browse-channel-click-event"
          type="button"
          onClick={() => setOpened(true)}>
          Browse channel list
        </p>
      </div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        overflow="inside"
        withCloseButton={false}
        size="lg"
        zIndex={999}>
        {<ModalListChannels setOpened={setOpened} setOpenedPopoverAddChannel={setOpenedPopoverAddChannel}/>}
      </Modal>
    </div>
  );
};
