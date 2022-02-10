import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserSession } from './core/auth/auth.types';
import MainBar from './core/main-bar/MainBar';
import useMainStyles from './Main.styles';
import Home from './pages/home/Home';

type MainProps = {
  userSession: UserSession;
};

function Main(props: MainProps) {
  const classes = useMainStyles();

  return (
    <main className={classes.root}>
      <MainBar user={props.userSession.user} />
      <div className={classes.content}>
        <Switch>
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
