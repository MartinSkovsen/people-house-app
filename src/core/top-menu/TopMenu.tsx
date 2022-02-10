import React from 'react';
import './App.css';
import useTopMenuStyles from './TopMenu.styles';

function TopMenu() {
  const classes = useTopMenuStyles();

  return <div className={classes.root} />;
}

export default TopMenu;
