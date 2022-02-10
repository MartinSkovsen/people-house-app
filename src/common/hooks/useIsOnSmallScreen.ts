import { useMediaQuery, useTheme } from '@material-ui/core';
import { getBreakpointForMobile } from '../../PeopleHouseTheme';

function useIsOnSmallScreen() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(getBreakpointForMobile()), {
    noSsr: true,
  });
}

export default useIsOnSmallScreen;
