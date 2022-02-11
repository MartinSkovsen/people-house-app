import { FacilityDataResponse } from './FacilityData.types';

// const facilityDataEndpoint = '/api/facility-data';

const facilityDataStub: FacilityDataResponse = [
  {
    consumption: 100,
    facility: { id: 'uniqueidentifier', address: 'Højmarksvej 8' },
    interval: 'monthly',
  },
];

// eslint-disable-next-line import/prefer-default-export
export const getFacilityData = (): Promise<FacilityDataResponse> =>
  new Promise<FacilityDataResponse>(() => facilityDataStub);
