import { Grid } from '@material-ui/core';
import { BarChart } from '@material-ui/icons';
import { useEffect, useState } from 'react';

function FacilityData() {
  const [isLoading, setIsLoading] = useState(true);
  const [initialLoadHasCompleted, setInitialLoadHasCompleted] = useState(false);
  const [facilityData, setFacilityData] = useState([]);

  useEffect(() => {
    // call
    setIsLoading(true);
    setFacilityData([]);
    setIsLoading(false);
    setInitialLoadHasCompleted(true);
  }, []);

  useEffect(() => {
    if (initialLoadHasCompleted)
      console.log('Do dependency related operations');
  }, [facilityData]);

  return <Grid container>{isLoading && <BarChart />}</Grid>;
}

export default FacilityData;
