import React from 'react';
import useMainBarContentWrapperStyles from './MainBarContentWrapper.styles';

export type MainBarWrapperProps = {
  // eslint-disable-next-line no-undef
  children: JSX.Element[];
};

function MainBarContentWrapper(props: MainBarWrapperProps) {
  const classes = useMainBarContentWrapperStyles();
  return <div className={classes.root}>{props.children}</div>;
}

export default MainBarContentWrapper;
