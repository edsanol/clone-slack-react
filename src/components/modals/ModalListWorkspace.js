import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../../assets/styles/components/modals/ModalMembersChannel.scss';
import { ListWorkspace } from '../ListWorkspace';

export const ModalListWorkspace = ({ setOpened }) => {
  const [newFilter, setNewFilter] = useState('');
  const inputStyle = {
    fontFamily: "'Lato', FontAwesome",
  };

  const workspace = useSelector((state) => state.authReducer.workspace);

  // Filtro por nombre de canales
  const search = workspace.filter((workspace) =>
  workspace.name.toLowerCase().includes(newFilter.toLowerCase())
  );

  return (
    <section className="modalMembers">
      <div className="modalMembers__header">
        <h2>Workspace explorer</h2>
      </div>

      <div className="modalMembers__div-search">
        <p className="modalMembers__p-add">Add Workspace</p>
        <input
          type="text"
          className="modalMembers__input"
          placeholder="       &#xf002;     Search workspace"
          style={inputStyle}
          value={newFilter}
          onChange={(e) => setNewFilter(e.target.value)}
        />
      </div>
      <div className="modalMembers__div-listPeople">
        {search
          .filter((item) => item.premium !== true)
          .map((data) => (
            <ListWorkspace
              key={data._id}
              name={data.name}
              workspaceId={data._id}
              users={data.users}
              setOpened={setOpened}
            />
          ))}
      </div>
    </section>
  );
};
