import React, { useState } from 'react';
import '../assets/styles/components/addWorkspaceOption.scss';
import { Modal } from '@mantine/core';
import { ModalCreateWorkspace } from './modals/ModalCreateWorkspace';
import { ModalListWorkspace } from './modals/ModalListWorkspace';

export const AddWorkspaceOption = ({ setOpenedPopoverAddChannel }) => {
  const [opened, setOpened] = useState(false);
  const [openedNewWorkspace, setopenedNewWorkspace] = useState(false);

  return (
    <div className="workspace-options__container">
      <div className="workspace-options__options">
        <p type="button" onClick={() => setopenedNewWorkspace(true)}>
          Create a new workspace
        </p>
      </div>
      <Modal
        opened={openedNewWorkspace}
        onClose={() => setopenedNewWorkspace(false)}
        overflow="inside"
        withCloseButton={false}
        size="md"
        zIndex={999}>
        {
          <ModalCreateWorkspace
            setopenedNewWorkspace={setopenedNewWorkspace}
            setOpenedPopoverAddChannel={setOpenedPopoverAddChannel}
          />
        }
      </Modal>
      <div className="workspace-options__options">
        <p type="button" onClick={() => setOpened(true)}>
          Browse workspace list
        </p>
      </div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        overflow="inside"
        withCloseButton={false}
        size="lg"
        zIndex={999}>
        {
          <ModalListWorkspace
            setOpened={setOpened}
            setOpenedPopoverAddChannel={setOpenedPopoverAddChannel}
          />
        }
      </Modal>
    </div>
  );
};
