import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useMainBarWrapperStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      margin: '0px auto',
      padding: '0px 1.875rem',
      width: '100%',
      maxWidth: '100rem',
    },
  })
);

export default useMainBarWrapperStyles;
