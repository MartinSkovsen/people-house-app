import { Grow, Paper, Typography } from '@material-ui/core';
import useHomeActionStyles from './HomeAction.styles';

export type HomeActionProps = {
  img: string;
  title: string;
  width: string;
};

function HomeAction(props: HomeActionProps) {
  const classes = useHomeActionStyles(props);

  return (
    <Grow in timeout={750}>
      <Paper className={classes.actionPaper} square elevation={1}>
        <Typography align="center" variant="h5">
          {props.title}
        </Typography>
        <img className={classes.actionSource} src={props.img} alt="img" />
      </Paper>
    </Grow>
  );
}

export default HomeAction;