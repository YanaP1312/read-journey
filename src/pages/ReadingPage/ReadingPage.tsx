import AddReading from "../../components/Dashboard/DashReadingPage/AddReading";
import Dashboard from "../../components/Dashboard/Dashboard";
import Progress from "../../components/Dashboard/DashReadingPage/Progress";
import ReadingDetails from "../../components/Dashboard/DashReadingPage/ReadingDetails";
import MyBook from "../../components/MyBook/MyBook"
import { useAppDispatch, useAppSelector } from "../../redux/helpers/hooks";
import { selectBook } from "../../redux/ownBookInfo/selectors";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getOwnBookInfo } from "../../redux/ownBookInfo/operations";
import Loader from "../../components/Loader/Loader";

const ReadingPage = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const dispatch = useAppDispatch();
const book = useAppSelector(selectBook);

useEffect(() => {
  if(bookId && (!book || book._id !== bookId)){
    dispatch(getOwnBookInfo(bookId));
  }
}, [dispatch, bookId, book]);

if(!book) {
  return <Loader/>;
}

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
