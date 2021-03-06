import { Typography } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useIsOnSmallScreen from '../../common/hooks/useIsOnSmallScreen';
import { ApplicationUser } from '../users/Users.types';
import AccountMenu from './AccountMenu';
import useTopMenuStyles from './MainBar.styles';
import MainBarContentWrapper from './MainBarContentWrapper';

export type MainBarProps = {
  user: ApplicationUser;
};

function MainBar(props: MainBarProps) {
  const classes = useTopMenuStyles();
  const isOnSmallScreen = useIsOnSmallScreen();

  return (
    <div className={classes.root}>
      {isOnSmallScreen && <div>smol ;) screen</div>}
      <MainBarContentWrapper>
        <div style={{ display: 'flex', width: '100%' }}>
          <NavLink exact to="/">
            <Typography variant="h4">People House</Typography>
          </NavLink>
        </div>
        <AccountMenu user={props.user} />
      </MainBarContentWrapper>
    </div>
  );
}

export default MainBar;
