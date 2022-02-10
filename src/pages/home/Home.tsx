import { Grid } from '@material-ui/core';
import events from './events.png';
import facilityData from './facility-data.jpg';
import family from './family.png';
import useHomeStyles from './Home.styles';
import HomeAction from './HomeAction';

const homeActionWidth = '15rem';

function Home() {
  const classes = useHomeStyles();

  return (
    <Grid
      container
      className={classes.root}
      alignItems="center"
      justifyContent="center"
      spacing={4}
    >
      <Grid item sm={2}>
        <HomeAction img={facilityData} width={homeActionWidth} title="Data" />
      </Grid>
      <Grid item sm={2}>
        <HomeAction img={events} width={homeActionWidth} title="Events" />
      </Grid>
      <Grid item sm={2}>
        <HomeAction
          img={family}
          width={homeActionWidth}
          title="Family members"
        />
      </Grid>
    </Grid>
  );
}

export default Home;
