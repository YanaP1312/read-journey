
import Filters from "../../components/Dashboard/DashRecomPage/Filters";
import Quote from "../../components/Dashboard/DashRecomPage/Quote";
import WorkOut from "../../components/Dashboard/DashRecomPage/WorkOut";

import Dashboard from "../../components/Dashboard/Dashboard";
import RecommendedBooks from "../../components/RecommendedBooks/RecommendedBooks";

const RecommendedPage = () => {

  return (
    <main className="dashboardMain">
      <Dashboard>     
        <Filters/>
        <WorkOut/>
        <Quote/>
      </Dashboard>
      <RecommendedBooks />
    </main>
  );
};

export default RecommendedPage;
