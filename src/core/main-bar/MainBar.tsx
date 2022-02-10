import React from 'react';
import useIsOnSmallScreen from '../../common/hooks/useIsOnSmallScreen';
import { ApplicationUser } from '../users/Users.types';
import useTopMenuStyles from './MainBar.styles';
import MainBarWrapper from './MainBarWrapper';

export type MainBarProps = {
  user: ApplicationUser;
};

function MainBar(props: MainBarProps) {
  const classes = useTopMenuStyles();
  const isOnSmallScreen = useIsOnSmallScreen();

  return (
    <div className={classes.root}>
      {isOnSmallScreen && <div>smol ;) screen</div>}
      <MainBarWrapper title="People House" user={props.user} />
    </div>
  );
}

export default MainBar;
