import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useHomeActionStyles = makeStyles((theme: Theme) =>
  createStyles({
    actionSource: {
      width: '100%',
    },
    actionPaper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '12rem',
      cursor: 'pointer',
      '&:hover': {
        boxShadow: theme.shadows[10],
      },
    },
  })
);

export default useHomeActionStyles;
