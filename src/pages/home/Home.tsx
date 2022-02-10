import events from './events.png';
import facilityData from './facility-data.jpg';
import family from './family.png';
import useHomeStyles from './Home.styles';

function Home() {
  const classes = useHomeStyles();

  return (
    <div className={classes.root}>
      <HomeCard img={facilityData} />
      <HomeCard img={events} />
      <HomeCard img={family} />
    </div>
  );
}

export default Home;

export type HomeCardProps = {
  img: string;
};

function HomeCard(props: HomeCardProps) {
  const classes = useHomeCardStyles();
  
  return (
    <div className={}>
      <img src={props.img} alt="" />
    </div>
  );
}
