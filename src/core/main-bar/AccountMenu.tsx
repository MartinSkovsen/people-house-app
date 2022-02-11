import { Typography } from '@material-ui/core';
import React from 'react';
import { ApplicationUser } from '../users/Users.types';
import useAccountMenuStyles from './AccountMenu.styles';

export type AccountMenuProps = {
  user: ApplicationUser;
};

function AccountMenu(props: AccountMenuProps) {
  const classes = useAccountMenuStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5">
        {props.user.firstName} {props.user.lastName}
      </Typography>
    </div>
  );
}

export default AccountMenu;
