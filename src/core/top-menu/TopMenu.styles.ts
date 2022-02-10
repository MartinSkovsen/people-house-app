import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useTopMenuStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
  })
);

export default useTopMenuStyles;
