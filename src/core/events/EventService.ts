import { LegoEvent } from './Events.types';

// const eventEndpoint = '/api/events';

const eventStub: LegoEvent[] = [
  {
    name: 'Hackathon',
    ticketsAvailable: 5,
    time: new Date(),
    venue: {
      name: 'People house auditorium',
      address: 'Højmarksvej 8',
    },
  },
  {
    name: 'Creative Workshop',
    ticketsAvailable: 5,
    time: new Date(),
    venue: {
      name: 'People house auditorium',
      address: 'Højmarksvej 8',
    },
  },
  {
    name: 'Bring your kid',
    ticketsAvailable: 5,
    time: new Date(),
    venue: {
      name: 'People house auditorium',
      address: 'Højmarksvej 8',
    },
  },
  {
    name: 'Create your own lego manual',
    ticketsAvailable: 5,
    time: new Date(),
    venue: {
      name: 'People house auditorium',
      address: 'Højmarksvej 8',
    },
  },
  {
    name: 'Casual friday',
    ticketsAvailable: 5,
    time: new Date(),
    venue: {
      name: 'People house auditorium',
      address: 'Højmarksvej 8',
    },
  },
  {
    name: 'People House Tour',
    ticketsAvailable: 5,
    time: new Date(),
    venue: {
      name: 'People house auditorium',
      address: 'Højmarksvej 8',
    },
  },
  {
    name: 'Educational study',
    ticketsAvailable: 5,
    time: new Date(),
    venue: {
      name: 'People house auditorium',
      address: 'Højmarksvej 8',
    },
  },
  {
    name: 'Play dates',
    ticketsAvailable: 5,
    time: new Date(),
    venue: {
      name: 'People house auditorium',
      address: 'Højmarksvej 8',
    },
  },
  {
    name: 'Idea workshop',
    ticketsAvailable: 5,
    time: new Date(),
    venue: {
      name: 'People house auditorium',
      address: 'Højmarksvej 8',
    },
  },
  {
    name: 'How to build Lego',
    ticketsAvailable: 5,
    time: new Date(),
    venue: {
      name: 'People house auditorium',
      address: 'Højmarksvej 8',
    },
  },
];

// eslint-disable-next-line import/prefer-default-export
export const getEvents = (): Promise<LegoEvent[]> =>
  new Promise<LegoEvent[]>((resolve, reject) => resolve(eventStub));
