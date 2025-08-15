import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/helpers/hooks";
import { getRecommended } from "../../../redux/recommendedBooks/operations";
import { selectResult } from "../../../redux/recommendedBooks/selectors";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

const Recommended = () => {
    const dispatch = useAppDispatch();
    const books = useAppSelector(selectResult)
    useEffect(() => {
        dispatch(getRecommended({ limit: 3 }));
      }, [dispatch]);

    return <section>
        <h3>Recommended books</h3>
        <ul>{books?.map(book => (<li key={book._id}>
        <img
              src={book.imageUrl}
              width="71"
              height="107"
              alt={`Book cover - ${book.title}`}
            />
            <h4>{book.title}</h4>
            <p>{book.author}</p></li>))}</ul>
        <Link to="/recommended">Home <IoArrowForward /></Link>

    </section>

}

export default Recommended;