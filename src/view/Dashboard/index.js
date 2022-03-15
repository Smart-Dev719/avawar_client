import { React } from "react";
import { Header } from "../../components/Header";
import { Mint } from "../../components/Mint";
import "./css/dashboard.css";

const Dashboard = (props) => {
  const { metamaskConnected, account, setMetamaskConnnected } = props;
  return (
    <>
      <div className="DashboardPage">
        <Header />
        <Mint
          metamaskConnected={metamaskConnected}
          setMetamaskConnnected={setMetamaskConnnected}
          account={account}
        />
      </div>
    </>
  );
};

export { Dashboard };
