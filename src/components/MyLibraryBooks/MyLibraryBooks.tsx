import {  useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/helpers/hooks";
import {
  selectCurrentStatus,
  selectError,
  selectFilteredBooks,
} from "../../redux/ownBooks/selectors";
import { FaRegTrashAlt } from "react-icons/fa";
import type {
  Book,
  BookStatus,
} from "../../redux/helpers/types/interfacesBook";
import ModalDetailIfo from "../Modals/ModalDetailInfoBook/ModalDetailInfoBook";
import { deleteOwnBook } from "../../redux/ownBooks/operations";
import { toast } from "react-toastify";
import Select from "react-select";
import { setFilterStatus } from "../../redux/ownBooks/slice";
import { useNavigate, useParams } from "react-router-dom";

const options: { value: BookStatus | undefined; label: string }[] = [
  { value: undefined, label: "All books" },
  { value: "unread", label: "Unread" },
  { value: "in-progress", label: "In progress" },
  { value: "done", label: "Done" },
];

const MyLibraryBooks = () => {
  const { status } = useParams<{ status?: BookStatus }>();
  const dispatch = useAppDispatch();
  const filteredBook = useAppSelector(selectFilteredBooks);
  const currentStatus = useAppSelector(selectCurrentStatus);
  const error = useAppSelector(selectError);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (status) {
      dispatch(setFilterStatus(status));
    } else {
      dispatch(setFilterStatus(undefined));
    }
  }, [status, dispatch]);

  const handleDeleteBook = async (id: string) => {
    const result = await dispatch(deleteOwnBook(id));
    if (deleteOwnBook.fulfilled.match(result)) {
      toast("🍀 Book was successfully deleted ");
    } else {
      toast.error(error || "👀 Something went wrong. Please try again");
    }
  };

  return (
    <section className="primary">
      <div className="contentContainer">
      <h2 className="contentTitle">My library</h2>
      <Select
  options={options}
  value={options.find((opt) => opt.value === currentStatus)}
  onChange={(selectedOption) => {
    const value = selectedOption?.value;
    dispatch(setFilterStatus(value));
    if (value) {
      navigate(`/library/${value}`);
    } else {
      navigate(`/library`);
    }
  }}
  isSearchable={false}
  classNamePrefix="custom-select"
/>
      </div>
      {filteredBook.length === 0 ? (
        <div className="specialNotic">
        <div className="specialNoticWrap" >
          <div className="specialNoticImg">
            <picture>
              <source
                srcSet="/images/books-dt@2x.png 2x, /images/books-dt.png 1x"
                media="(min-width: 768px)"
              />
              <source
                srcSet="/images/books-mob@2x.png 2x, /images/books-mob.png 1x"
                media="(max-width:767px)"
              />
              <img
                src="/images/books-dt.png"
                width="70"
                height="50"
                alt="books"
              />
            </picture>
          </div>
          <p>
            To start training, add <span className="specialNoticSpan">some of your books</span> or from the
            recommended ones
          </p>
        </div>
        </div>
      ) : (
        <ul className="contentRecom">
          {filteredBook.map((book) => (
            <li key={book._id} className="contentRecomWrap">
              <img
              className="contentRecomImg"
                src={book.imageUrl || "/images/placeholder-cover.png"}
                alt={`Book cover - ${book.title}`}
                width="137"
                height="208"
                onClick={() => setSelectedBook(book)}
              />
              <div className="myLibraryDel">
                <div className="myLibraryWrap">
                  <h4 className="contentRecomTitle">{book.title}</h4>
                  <p className="contentRecomAuthor">{book.author}</p>
                </div>
                <button 
                className="myLibraryBtn"
                onClick={() => handleDeleteBook(book._id)}>
                  <FaRegTrashAlt width={14} height={14} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {selectedBook && (
        <ModalDetailIfo
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </section>
  );
};

export default MyLibraryBooks;
