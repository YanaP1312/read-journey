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

    return <section className="dashBlockFrame">
        <h3 className="dashTitle">Recommended books</h3>
        <div className="dashReccomListWrap">
        <ul className="dashReccomList">{books?.map(book => (<li key={book._id}>
        
        <img
              src={book.imageUrl}
              width="71"
              height="107"
              alt={`Book cover - ${book.title}`}
              className="dashReccomImg"
            />
            <div className="dashReccomWrap">
            <h4 className="dashReccomTitle">{book.title}</h4>
            <p className="dashReccomAuthor">{book.author}</p></div></li>))}</ul>
            </div>
        <Link to="/recommended" className="workOutLinkWrap"><p className="workOutLink">Home</p> <IoArrowForward className="workOutArrow" /></Link>

    </section>

}

export default Recommended;