import { alpha, createTheme } from '@material-ui/core/styles';

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
const legoDarkerYellow = '#FFCF00';

const peopleHouseTheme = createTheme({
  palette: {
    text: {
      primary: legoBlack,
      secondary: legoGrey,
    },
    background: {
      default: legoDarkerYellow,
      paper: alpha(legoWhite, 0.5),
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
    allVariants: {
      fontFamily: ["'Cera Pro'"].join(','),
    },
  },
  overrides: {},
});

export default peopleHouseTheme;
