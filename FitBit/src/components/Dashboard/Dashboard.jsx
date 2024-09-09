import ComNavbar from "./ComNavbar";
import Overview from "./Overview";
import Progress from "./Progress";
import Workouts from "./Workouts";

function Dashboard() {
  return (
    <div>
      <ComNavbar />
      <Overview />
      <Progress />
      <Workouts />
    </div>
  );
}

export default Dashboard;
