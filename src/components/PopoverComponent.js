import { useState } from 'react';
import { Popover } from '@mantine/core';
import { UserOptionsProfile } from './UserOptionsProfile';
import { useSelector } from 'react-redux';

export const PopoverComponent = () => {
  const [openedPop, setOpenedPop] = useState(false);
  const stateOption = useSelector(
    (state) => state.changeStateReducer.stateView
  );
  return (
    <Popover
      opened={openedPop}
      onClose={() => setOpenedPop(false)}
      target={
        <div
          className="header__perfil"
          type="button"
          onClick={() => setOpenedPop((o) => !o)}>
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
      <UserOptionsProfile />
    </Popover>
  );
};