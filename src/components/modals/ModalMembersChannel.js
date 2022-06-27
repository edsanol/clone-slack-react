import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../../assets/styles/components/modals/ModalMembersChannel.scss';
import { ListMemberModals } from '../../components/ListMemberModals';

export const ModalMembersChannel = ({ title, paragraph, setOpened }) => {
  const inputStyle = {
    fontFamily: "'Lato', FontAwesome",
  };
  const [newFilter, setNewFilter] = useState('');

  const allUsers = useSelector((state) => state.userReducer.users);
  const workspaceActive = useSelector((state) => state.authReducer.workspaceId);

  // Filtro por nombre de usuarios
  const search = allUsers.filter((user) =>
    user.fullName.toLowerCase().includes(newFilter.toLowerCase())
  );
  return (
    <section className="modalMembers">
      <div className="modalMembers__header">
        <h2>{title}</h2>
      </div>

      <div className="modalMembers__div-search">
        <p className="modalMembers__p-add">{paragraph}</p>
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
          .filter((user) => user.workSpaceId.includes(workspaceActive))
          .map((data) => (
            <ListMemberModals
              key={data._id}
              uid={data._id}
              name={data.fullName}
              image={data.image}
              email={data.email}
              occupation={data.occupation}
              setOpened={setOpened}
          />
        ))}
      </div>
    </section>
  );
};
