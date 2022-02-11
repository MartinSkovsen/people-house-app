import { FacilityDataResponse } from './FacilityData.types';

// const facilityDataEndpoint = '/api/facility-data';

const facilityDataStub: FacilityDataResponse = {
  dateInterval: 'Month',
  data: [
    {
      consumption: 100,
      facility: { id: 'uniqueidentifier', address: 'Højmarksvej 8' },
      dateLabel: 'January 2022',
    },
    {
      consumption: 85,
      facility: { id: 'uniqueidentifier', address: 'Højmarksvej 8' },
      dateLabel: 'December 2021',
    },
    {
      consumption: 120,
      facility: { id: 'uniqueidentifier', address: 'Højmarksvej 8' },
      dateLabel: 'November 2021',
    },
    {
      consumption: 80,
      facility: { id: 'uniqueidentifier', address: 'Højmarksvej 8' },
      dateLabel: 'October 2021',
    },
    {
      consumption: 45,
      facility: { id: 'uniqueidentifier', address: 'Højmarksvej 8' },
      dateLabel: 'September 2021',
    },
    {
      consumption: 25,
      facility: { id: 'uniqueidentifier', address: 'Højmarksvej 8' },
      dateLabel: 'August 2021',
    },
    {
      consumption: 30,
      facility: { id: 'uniqueidentifier', address: 'Højmarksvej 8' },
      dateLabel: 'July 2021',
    },
    {
      consumption: 30,
      facility: { id: 'uniqueidentifier', address: 'Højmarksvej 8' },
      dateLabel: 'June 2021',
    },
    {
      consumption: 40,
      facility: { id: 'uniqueidentifier', address: 'Højmarksvej 8' },
      dateLabel: 'May 2021',
    },
  ],
};

// eslint-disable-next-line import/prefer-default-export
export const getFacilityData = (): Promise<FacilityDataResponse> =>
  new Promise<FacilityDataResponse>((resolve, reject) =>
    resolve(facilityDataStub)
  );
