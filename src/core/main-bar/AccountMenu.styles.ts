import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useAccountMenuStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginLeft: 'auto',
      width: '100%',
    },
  })
);

export default useAccountMenuStyles;
