import React from "react";
import Sidebar from "../../Component/Sidebar/Sidebar";
import Profile from "../../Component/Profile/Profile";
import Dashmid from "../../Component/Dashmid/Dashmid";

function Dashboard() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-3 h-100 ">
          <Sidebar />
          <Dashmid/>
          <Profile />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
