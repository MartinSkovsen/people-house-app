import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useEventCardStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
      minHeight: '12rem',
      width: '100%',
    },
  })
);

export default useEventCardStyles;
