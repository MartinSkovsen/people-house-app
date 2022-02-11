import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useMainStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '75vh',
      width: '100%',
    },
    content: {
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      alignItems: 'center',
      margin: '0px auto',
      width: '100%',
      maxWidth: '100rem',
      height: '100%',
    },
  })
);

export default useMainStyles;
