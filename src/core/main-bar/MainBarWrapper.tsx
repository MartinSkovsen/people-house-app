import { Typography } from '@material-ui/core';
import React from 'react';
import { ApplicationUser } from '../users/Users.types';
import AccountMenu from './AccountMenu';
import useMainBarWrapperStyles from './MainBarWrapper.styles';

export type MainBarWrapperProps = {
  title: string;
  user: ApplicationUser;
};

function MainBarWrapper(props: MainBarWrapperProps) {
  const classes = useMainBarWrapperStyles();
  return (
    <div className={classes.root}>
      <div style={{ display: 'flex', width: '100%' }}>
        <Typography variant="h4">{props.title}</Typography>
      </div>
      <AccountMenu user={props.user} />
    </div>
  );
}

export default MainBarWrapper;
