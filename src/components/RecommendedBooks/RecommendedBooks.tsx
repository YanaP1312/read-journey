import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/helpers/hooks";
import { getRecommended } from "../../redux/recommendedBooks/operations";
import {
  selectPage,
  selectResult,
  selectTotalPages,
} from "../../redux/recommendedBooks/selectors";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
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
      <div className="contentContainer">
      <h2 className="contentTitle">Recommended</h2>
      <div className="contentArrowsWrap">
        <button className="contentArrows"  onClick={handleLessPage} disabled={recomBookPage === 1}>
        <IoIosArrowDropleft />
        </button>
        <button className="contentArrows"
          onClick={handleMorePage}
          disabled={recomBookPage === totalPages}
        >
          <IoIosArrowDropright />
        </button>
      </div>
      </div>
      <ul className="contentRecom">
        {recomBooks.map((book) => (
          <li className="contentRecomWrap" key={book._id} onClick={() => setSelectedBook(book)}>
            <img
            className="contentRecomImg"
              src={book.imageUrl}
              width="137"
              height="208"
              alt={`Book cover - ${book.title}`}
            />
            <h4 className="contentRecomTitle">{book.title}</h4>
            <p className="contentRecomAuthor">{book.author}</p>
          </li>
        ))}
      </ul>
      {selectedBook && <ModalAddToLibrary book={ selectedBook} onClose={() => setSelectedBook(null)} />}
    </section>
  );
};
export default RecommendedBooks;
