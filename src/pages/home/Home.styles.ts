import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useHomeStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
  })
);

export default useHomeStyles;
