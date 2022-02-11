export type Facility = {
  id: string;
  address: string; // Address type here
};

// This type takes whichever form we expect from the server / BFF
// This could be split up into several types matching a specific data need.
// E.g. if we wanted to show a categorical bar chart with facility on the x axis, we wouldn't need the interval prop.
export type FacilityDataResponse = {
  facility: Facility;
  consumption: number;
  interval: DataInterval; // This could / should be generic instead to add compile time checking of the type
}[];

type DataInterval = 'daily' | 'monthly' | 'yearly';
