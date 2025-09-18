import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/helpers/hooks";
import { getRecommended } from "../../redux/recommendedBooks/operations";
import {
  selectPage,
  selectResult,
  selectTotalPages,
} from "../../redux/recommendedBooks/selectors";
import { SlArrowLeftCircle } from "react-icons/sl";
import { SlArrowRightCircle } from "react-icons/sl";
import type { Book } from "../../redux/helpers/types/interfacesBook";
import ModalAddToLibrary from "../Modals/ModalAddToLibrary/ModalAddToLibrary";

const RecommendedBooks = () => {
  const dispatch = useAppDispatch();
  const recomBooks = useAppSelector(selectResult);
  const recomBookPage = useAppSelector(selectPage);
  const totalPages = useAppSelector(selectTotalPages);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleMorePage = () =>
    dispatch(getRecommended({ page: recomBookPage + 1 }));
  const handleLessPage = () =>
    dispatch(getRecommended({ page: recomBookPage - 1 }));

  useEffect(() => {
    dispatch(getRecommended({ page: recomBookPage }));
  }, [dispatch, recomBookPage]);

  return (
    <section className="primary">
      <h2>Recommended</h2>
      <div>
        <button onClick={handleLessPage} disabled={recomBookPage === 1}>
          <SlArrowLeftCircle />
        </button>
        <button
          onClick={handleMorePage}
          disabled={recomBookPage === totalPages}
        >
          <SlArrowRightCircle />
        </button>
      </div>
      <ul>
        {recomBooks.map((book) => (
          <li key={book._id} onClick={() => setSelectedBook(book)}>
            <img
              src={book.imageUrl}
              width="137"
              height="208"
              alt={`Book cover - ${book.title}`}
            />
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </li>
        ))}
      </ul>
      {selectedBook && <ModalAddToLibrary book={ selectedBook} onClose={() => setSelectedBook(null)} />}
    </section>
  );
};
export default RecommendedBooks;
