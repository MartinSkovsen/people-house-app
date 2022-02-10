import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useHomeStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      minHeight: '55vh',
    },
  })
);

export default useHomeStyles;
