import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import useAppStyles from './App.styles';
import { UserSession } from './core/auth/auth.types';
import Main from './Main';

function App() {
  const classes = useAppStyles();
  // Getting the current user session should / could be retrieved with a hook instead of managing the state in App.tsx
  // such that each higher order component could independently manage it
  const [userSession] = useState<UserSession>({
    user: { firstName: 'Martin', lastName: 'Skovsen' },
  });

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Main userSession={userSession} />
        </MuiPickersUtilsProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
