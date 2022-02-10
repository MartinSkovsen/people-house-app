import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useMainStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '100vh',
      width: '100%',
    },
    content: {
      padding: theme.spacing(4),
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export default useMainStyles;
