import { useState } from 'react';
import { Popover } from '@mantine/core';
import { UserOptionsProfile } from './UserOptionsProfile';
import { useSelector } from 'react-redux';
import '../assets/styles/components/PopoverComponent.scss';

export const PopoverComponent = () => {
  const [openedPop, setOpenedPop] = useState(false);
  const { image } = useSelector((state) => state.userReducer.user);
  const stateOption = useSelector(
    (state) => state.changeStateReducer.stateView
  );
  return (
    <Popover
      opened={openedPop}
      onClose={() => setOpenedPop(false)}
      target={
        <div
          data-cy="option-click-event"
          className="header__perfil"
          type="button"
          onClick={() => setOpenedPop((o) => !o)}>
          <img src={image} alt="profile" />
          {stateOption ? (
            <span className="header__span-badge-active"> </span>
          ) : (
            <span className="header__span-badge-disactive"> </span>
          )}
        </div>
      }
      width={0}
      placement="start"
      gutter={6}
      position="top"
      closeOnClickOutside={false}>
      <UserOptionsProfile setOpenedPop={setOpenedPop} />
    </Popover>
  );
};
