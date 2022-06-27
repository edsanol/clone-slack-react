import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../../assets/styles/components/modals/ModalMembersChannel.scss';
import { ListChannels } from '../ListChannels';

export const ModalListChannels = ({ setOpened }) => {
  const [newFilter, setNewFilter] = useState('');
  const inputStyle = {
    fontFamily: "'Lato', FontAwesome",
  };

  const channels = useSelector((state) => state.channelReducer.channels);
  const workspaceActive = useSelector((state) => state.authReducer.workspaceId);

  // Filtro por nombre de canales
  const search = channels.filter((channel) =>
    channel.name.toLowerCase().includes(newFilter.toLowerCase())
  );

  return (
    <section className="modalMembers">
      <div className="modalMembers__header">
        <h2>Channels explorer</h2>
      </div>

      <div className="modalMembers__div-search">
        <p className="modalMembers__p-add">Add channel</p>
        <input
          type="text"
          className="modalMembers__input"
          placeholder="       &#xf002;     Search members"
          style={inputStyle}
          value={newFilter}
          onChange={(e) => setNewFilter(e.target.value)}
        />
      </div>
      <div className="modalMembers__div-listPeople">
        {search
          .filter((item) => item.premium !== true)
          .filter((item) => item.workSpaceId === workspaceActive)
          .map((data) => (
            <ListChannels
              key={data._id}
              name={data.name}
              description={data.description}
              users={data.users}
              channelId={data._id}
              setOpened={setOpened}
            />
          ))}
      </div>
    </section>
  );
};
