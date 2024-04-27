import Sidebar from "../../Component/Sidebar/Sidebar";
import Profile from "../../Component/Profile/Profile";
import Dashmid from "../../Component/Dashmid/Dashmid";
import Quizzies from "../../Component/Quizzies/Quizzies";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const showQuizzies = useSelector((state) => state.quizzies.isQuizzies);
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-3 h-100 ">
          <Sidebar />
          {showQuizzies ? <Quizzies /> : <Dashmid />}
          <Profile />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
