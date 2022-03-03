import { React } from "react";
import { Header } from "../../components/Header";
import { Mint } from "../../components/Mint";
import "./css/dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="DashboardPage">
        <Header />
        <Mint />
      </div>
    </>
  );
};

export { Dashboard };
