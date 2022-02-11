import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useEffect, useState } from 'react';
import { FacilityDataResponse } from '../../core/facility-data/FacilityData.types';
import { getFacilityData } from '../../core/facility-data/FacilityDataService';

function FacilityData() {
  const [isLoading, setIsLoading] = useState(true);
  const [facilityData, setFacilityData] = useState<FacilityDataResponse>({
    dateInterval: 'Day',
    data: [],
  });

  useEffect(() => {
    setIsLoading(true);
    getFacilityData()
      .then((data) => {
        setFacilityData(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false)); // Set bad state as well here
  }, []);

  return isLoading ? (
    <Skeleton />
  ) : (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Facility</TableCell>
            <TableCell align="right">Consumption</TableCell>
            <TableCell align="right">{facilityData.dateInterval}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {facilityData.data.map((row) => (
            <TableRow key={row.facility.address}>
              <TableCell component="th" scope="row">
                {row.facility.address}
              </TableCell>
              <TableCell align="right">{row.consumption}</TableCell>
              <TableCell align="right">{row.dateLabel}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FacilityData;
