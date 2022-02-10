import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import useAppStyles from './App.styles';

function App() {
  const classes = useAppStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        {/* <TopMenu */}
        {/* /> */}
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          {/* <Main /> */}
        </MuiPickersUtilsProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
