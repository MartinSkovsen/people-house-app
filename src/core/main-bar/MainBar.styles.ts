import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useMainBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      alignItems: 'center',
      minHeight: '8.125rem',
      margin: '0px auto',
      width: '100%',
    },
  })
);

export default useMainBarStyles;
