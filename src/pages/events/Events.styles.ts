import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useEventCardStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
      minHeight: '12rem',
      width: '100%',
      '&:hover': {
        boxShadow: theme.shadows[10],
      },
      cursor: 'pointer',
    },
  })
);

export default useEventCardStyles;
