import { Grid } from '@material-ui/core';
import facilityData from './facility-data.jpg';
import useHomeStyles from './Home.styles';
import HomeAction from './HomeAction';

const homeActionWidth = '15rem';

function Home() {
  const classes = useHomeStyles();

  const openLinkInWindow = (link: string): void => {
    window.open(link, '_self');
  };

  return (
    <Grid
      container
      className={classes.root}
      alignItems="center"
      justifyContent="center"
      spacing={4}
    >
      <Grid item sm={2}>
        <HomeAction
          img={facilityData}
          onHomeActionClicked={() => openLinkInWindow('facility-data')}
          title="Data"
          width={homeActionWidth}
        />
      </Grid>
      {/* <Grid item sm={2}> */}
      {/*  <HomeAction */}
      {/*    img={events} */}
      {/*    onHomeActionClicked={() => openLinkInWindow('events')} */}
      {/*    title="Events" */}
      {/*    width={homeActionWidth} */}
      {/*  /> */}
      {/* </Grid> */}
      {/* <Grid item sm={2}> */}
      {/*  <HomeAction */}
      {/*    img={family} */}
      {/*    onHomeActionClicked={() => openLinkInWindow('family-members')} */}
      {/*    title="Family members" */}
      {/*    width={homeActionWidth} */}
      {/*  /> */}
      {/* </Grid> */}
    </Grid>
  );
}

export default Home;
