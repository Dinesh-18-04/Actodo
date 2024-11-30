import React from "react";
import Header from "../component/Header";
import Card from "../component/Card";
import Todocontainer from "../component/Todocontainer";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const data = useLocation();
  return (
    <div className="bg-black md:p-16 p-5">
      <div className="bg-white p-10 border rounded-lg">
        <Header username={data.state.user}></Header>
        <div className="flex flex-wrap gap-1 md:gap-3">
          <Card bgcolor={"red"} title={"23"} subtitle={"dsdh"}></Card>
          <Card
            bgcolor={"skyblue"}
            title={"December"}
            subtitle={"11:23:00"}
          ></Card>
          <Card
            bgcolor={"brown"}
            title={"Built using"}
            subtitle={"React"}
          ></Card>
        </div>
        <Todocontainer />
      </div>
    </div>
  );
};

export default Dashboard;
