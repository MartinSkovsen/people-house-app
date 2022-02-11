import { Grow, Paper, Typography } from '@material-ui/core';
import useHomeActionStyles from './HomeAction.styles';

export type HomeActionProps = {
  img: string;
  onHomeActionClicked: () => void; // We want this imperative. Redirecting is not the responsibility of HomeAction.
  // We could also wrap HomeAction with another component responsible for redirecting.
  title: string;
  width: string;
};

function HomeAction(props: HomeActionProps) {
  const classes = useHomeActionStyles(props);

  const onActionPaperClicked = (): void => {
    // Do internal operations
    props.onHomeActionClicked();
  };

  return (
    <Grow in timeout={750}>
      <Paper
        className={classes.actionPaper}
        onClick={onActionPaperClicked}
        square
        elevation={1}
      >
        <Typography align="center" variant="h5">
          {props.title}
        </Typography>
        <img className={classes.actionSource} src={props.img} alt="img" />
      </Paper>
    </Grow>
  );
}

export default HomeAction;
