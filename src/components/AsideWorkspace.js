import React from 'react';
import imageMIR from '../assets/images/logoMIR.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveWorkspaceAction } from '../store/actions/actionsAuth';
import { getActiveChatAction } from '../store/actions/actionsSocket';
import { actionsChangeView } from '../store/actions/actionsChangeView';
import { actionsHiddenScroll } from '../store/actions/actionsChangeState';

export const AsideWorkspace = ({ name, workspaceId }) => {
  const workspaceActive = useSelector((state) => state.authReducer.workspaceId);
  const dispatch = useDispatch();

  const handleWorkspaceClick = () => {
    localStorage.setItem('workspace', workspaceId);
    dispatch(getActiveChatAction(null));
    dispatch(getActiveWorkspaceAction());
    dispatch(actionsChangeView('hiddenAll'));
    dispatch(actionsHiddenScroll(false));
  };

  return (
    <div
      type="button"
      className={`aside-selected-button ${workspaceActive === workspaceId ? 'aside-selected' : ''}`}
      onClick={handleWorkspaceClick}>
      <span className="aside-button-workspace-selected">
        <img
          src={(workspaceId === '629a2552587275ec49d069cd' 
            ? imageMIR 
            : `https://ui-avatars.com/api/?background=random&name=${name}`
          )}
          alt="Logo workspace"
        />
      </span>
    </div>
  );
};
