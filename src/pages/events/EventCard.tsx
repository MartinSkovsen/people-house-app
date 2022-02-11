import { Grid, Grow, Paper, Typography } from '@material-ui/core';
import { LegoEvent } from '../../core/events/Events.types';
import useEventCardStyles from './Events.styles';

type EventCardProps = {
  event: LegoEvent;
};

function EventCard(props: EventCardProps) {
  const classes = useEventCardStyles();

  return (
    <Grow in timeout={1000}>
      <Paper className={classes.root} elevation={1} square>
        <Grid style={{ padding: 8 }} container justify="center" spacing={2}>
          <Grid item sm={12}>
            <Typography align="center" variant="h5">
              {props.event.name}
            </Typography>
          </Grid>
          <Grid container item justify="flex-start">
            <Grid item sm={12}>
              <Typography align="left">{props.event.venue.name}</Typography>
            </Grid>
            <Grid item sm={12}>
              <Typography align="left">
                Address: {props.event.venue.address}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grow>
  );
}

export default EventCard;
