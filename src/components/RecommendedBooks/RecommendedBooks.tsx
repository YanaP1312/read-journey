import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/helpers/hooks";
import { getRecommended } from "../../redux/recommendedBooks/operations";
import {
  selectPage,
  selectResult,
  selectTotalPages,
} from "../../redux/recommendedBooks/selectors";
import { SlArrowLeftCircle } from "react-icons/sl";
import { SlArrowRightCircle } from "react-icons/sl";

const RecommendedBooks = () => {
  const dispatch = useAppDispatch();
  const recomBooks = useAppSelector(selectResult);
  const recomBookPage = useAppSelector(selectPage);
  const totalPages = useAppSelector(selectTotalPages);

  const handleMorePage = () =>
    dispatch(getRecommended({ page: recomBookPage + 1 }));
  const handleLessPage = () =>
    dispatch(getRecommended({ page: recomBookPage - 1 }));

  useEffect(() => {
    dispatch(getRecommended({ page: recomBookPage }));
  }, [dispatch, recomBookPage]);

  return (
    <section>
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
          <li key={book._id}>
            <img
              src={book.imageUrl}
              width="137"
              height="208"
              alt="Book cover"
            />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default RecommendedBooks;
