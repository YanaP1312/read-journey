import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/helpers/hooks";
import { getRecommended } from "../../redux/recommendedBooks/operations";
import {
  selectIsLoading,
  selectPage,
  selectResult,
  selectTotalPages,
} from "../../redux/recommendedBooks/selectors";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import type { Book } from "../../redux/helpers/types/interfacesBook";
import ModalAddToLibrary from "../Modals/ModalAddToLibrary/ModalAddToLibrary";
import { useNavigate, useParams } from "react-router-dom";

const RecommendedBooks = () => {
  const dispatch = useAppDispatch();
  const {page} = useParams<{page?: string}>();
  const navigate = useNavigate();

  const recomBooks = useAppSelector(selectResult);
  const totalPages = useAppSelector(selectTotalPages);
const isLoading = useAppSelector(selectIsLoading);

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);


  const currentPage = page ? Number(page) : 1;

  useEffect(() => {
    dispatch(getRecommended({ page: currentPage }));
  }, [dispatch, currentPage]);

  const handleMorePage = () => {
    if(currentPage < totalPages){
      navigate(`/recommended/${currentPage + 1}`);
    }
  };
   

  const handleLessPage = () => { if(currentPage > 1){
      navigate(`/recommended/${currentPage - 1}`);}
    }

  return (
    <section className="primary">
      <div className="contentContainer">
      <h2 className="contentTitle">Recommended</h2>
      {!isLoading && 
      (<div className="contentArrowsWrap">
        <button className="contentArrows"  onClick={handleLessPage} disabled={currentPage === 1}>
        <IoIosArrowDropleft />
        </button>
        <button className="contentArrows"
          onClick={handleMorePage}
          disabled={currentPage === totalPages}
        >
          <IoIosArrowDropright />
        </button>
      </div>)}
      </div>
      {recomBooks.length === 0 ? (<div className="resetWrap">
  <p className="noResults">Sorry, no books found.</p> 
   </div>
) :
      (<ul className="contentRecom">
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
      </ul>)}
      {selectedBook && <ModalAddToLibrary book={ selectedBook} onClose={() => setSelectedBook(null)} />}
    </section>
  );
};
export default RecommendedBooks;
