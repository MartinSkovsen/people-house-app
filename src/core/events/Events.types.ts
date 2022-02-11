// I have used string type for simplicity. These will naturally hold more information in a real scenario
export type LegoEvent = {
  name: string;
  ticketsAvailable: number;
  time: Date;
  venue: Venue;
};

type Venue = {
  name: string;
  address: string;
};
