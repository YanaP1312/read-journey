import AddBook from "../../components/Dashboard/DashMyLibraryPage/AddBook";
import Recommended from "../../components/Dashboard/DashMyLibraryPage/Recommended";
import Dashboard from "../../components/Dashboard/Dashboard";
import MyLibraryBooks from "../../components/MyLibraryBooks/MyLibraryBooks";

const MyLibraryPage = () => {
  return (
    <main>
      <Dashboard>
        <AddBook/>
        <Recommended/>
      </Dashboard>
      <MyLibraryBooks />
    </main>
  );
};

export default MyLibraryPage;
