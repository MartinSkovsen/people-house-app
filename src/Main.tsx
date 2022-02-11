import { Grow, IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { UserSession } from './core/auth/auth.types';
import MainBar from './core/main-bar/MainBar';
import useMainStyles from './Main.styles';
import FacilityData from './pages/facility-data/FacilityData';
import Home from './pages/home/Home';
import Events from "./pages/events/Events";

type MainProps = {
  userSession: UserSession;
};

function Main(props: MainProps) {
  const classes = useMainStyles();
  const [showBackButton, setShowBackButton] = useState(false);
  const history = useHistory();

  useEffect(
    () =>
      history.listen((location) => {
        if (location.pathname === '/') setShowBackButton(false);
        else setShowBackButton(true);
      }),
    []
  );

  // We could wrap away the back button to keep main clean.
  return (
    <main className={classes.root}>
      <MainBar user={props.userSession.user} />
      <div className={classes.content}>
        {showBackButton && (
          <Grow in>
            <IconButton
              aria-label="back"
              onClick={history.goBack}
              size="medium"
              style={{ alignSelf: 'start' }}
            >
              <ArrowBack fontSize="inherit" />
            </IconButton>
          </Grow>
        )}
        <Switch>
          <Route path="/facility-data">
            <FacilityData />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">Page not found</Route>
        </Switch>
      </div>
    </main>
  );
}

export default Main;
