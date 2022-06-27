import React from 'react';
import '../assets/styles/components/HeaderLandingPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  actionsChangeView,
  actionsChangeViewAside,
} from '../store/actions/actionsChangeView';
import { PopoverComponent } from './PopoverComponent';
import { getActiveChatAction } from '../store/actions/actionsSocket';

export const HeaderLandingPage = () => {
  const dispatch = useDispatch();
  const OpenCloseThread = useSelector(
    (state) => state.changeViewReducer.hiddenView
  );
  const OpenCloseAside = useSelector(
    (state) => state.changeViewReducer.hiddenAside
  );

  const handleClickAside = () => {
    OpenCloseAside === 'hiddenAside'
      ? dispatch(actionsChangeViewAside('showAside'))
      : dispatch(actionsChangeViewAside('hiddenAside'));
  };

  const handleClickBack = () => {
    dispatch(getActiveChatAction(null));
  }

  const handleClickHelpShow = () => {
    OpenCloseThread === 'hiddenAll'
      ? dispatch(actionsChangeView('showHelp'))
      : dispatch(actionsChangeView('hiddenAll'));
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__div-left">
          <i
            type="button"
            className="bx bx-menu"
            onClick={handleClickAside}
            id="menu-aside"></i>
          <i className="bx bx-arrow-back" id="menu-back" type="button" onClick={handleClickBack}></i>
        </div>

        <div className="header__div-center"></div>

        <div className="header__div-right">
          <div
            className="header__div-question"
            type="button"
            onClick={handleClickHelpShow}>
            <p>?</p>
            <span className="header__span-badge"> </span>
          </div>
          <PopoverComponent />
        </div>
      </nav>
    </header>
  );
};
