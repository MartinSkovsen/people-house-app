import { createMuiTheme } from '@material-ui/core';

const belowThisBreakpointIsMobile: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' =
  'sm';

export function getBreakpointForMobile() {
  return belowThisBreakpointIsMobile;
}

const legoGrey = '#565F67';
const legoBlack = '#202124';
const legoGreen = '#1D5A52';
const legoLightGreen = '#C7D599';
const legoWhite = '#FFFFFF';
const legoYellow = '#FAED00';

const peopleHouseTheme = createMuiTheme({
  palette: {
    text: {
      primary: legoBlack,
      secondary: legoGrey,
    },
    background: {
      default: legoYellow,
      paper: legoWhite,
    },
    primary: {
      light: legoLightGreen,
      main: legoGreen,
    },
    secondary: {
      main: legoYellow,
    },
  },
  typography: {
    fontFamily: ['"Open Sans"'].join(','),
  },
  overrides: {},
});

export default peopleHouseTheme;
