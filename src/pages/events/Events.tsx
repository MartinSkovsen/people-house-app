import { Grid, Grow, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { LegoEvent } from '../../core/events/Events.types';
import { getEvents } from '../../core/events/EventService';
import EventCard from './EventCard';

function Events() {
  const [events, setEvents] = useState<LegoEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getEvents()
      .then((data) => {
        setEvents(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  return isLoading ? (
    <Skeleton />
  ) : (
    <Grid container spacing={2}>
      {events.map((event) => (
        <Grid item sm={3}>
          <EventCard event={event} />
        </Grid>
      ))}
      <Grid item container sm={3} justify="center" alignItems="center">
        <Grow in timeout={1000}>
          <Grid item>
            <IconButton aria-label="add" size="medium">
              <Add fontSize="large" />
            </IconButton>
          </Grid>
        </Grow>
      </Grid>
    </Grid>
  );
}

export default Events;
