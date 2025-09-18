import AddReading from "../../components/Dashboard/DashReadingPage/AddReading";
import Dashboard from "../../components/Dashboard/Dashboard";
import Progress from "../../components/Dashboard/DashReadingPage/Progress";
import ReadingDetails from "../../components/Dashboard/DashReadingPage/ReadingDetails";
import MyBook from "../../components/MyBook/MyBook"
import { useAppSelector } from "../../redux/helpers/hooks";
import { selectBook } from "../../redux/ownBookInfo/selectors";

const ReadingPage = () => {
const book = useAppSelector(selectBook)
const hasProgress = (book?.progress ?? []).length > 0

  return <main className="dashboardMain">
    <Dashboard>
      <AddReading/>
      {hasProgress?  <ReadingDetails/> : <Progress/> }
    </Dashboard>
    <MyBook/>
    </main>;
};

export default ReadingPage;
