import { toast } from "react-toastify";
import { useAppDispatch } from "../../../redux/helpers/hooks";
import type { Book } from "../../../redux/helpers/types/interfacesBook";
import Modal from "../Modal";
import { useNavigate } from "react-router-dom";
import { getOwnBookInfo } from "../../../redux/ownBookInfo/operations";

interface ModalDetailIfoProps {
  book: Book;
  onClose: () => void;
}

const ModalDetailIfo = ({ onClose, book }: ModalDetailIfoProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleStartBook = async () => {
    try{
      await dispatch(getOwnBookInfo(book._id)).unwrap();
    onClose();
    navigate("/reading");} catch(error){toast.error}
  };

  return (
    <Modal onClose={onClose}>
      <div className="modalContentWrap">
        <img
        className="modalContentImg"
          src={book.imageUrl || "/images/placeholder-cover.png"}
          alt={`Book cover - ${book.title}`}
          width="153"
          height="233"
        />
        <h3 className="modalContentTitle">{book.title}</h3>
        <p className="modalContentAuthor">{book.author}</p>
        <p className="modalContentPage">{`${book.totalPages} pages`}</p>
        <button type="button" onClick={handleStartBook} className="modalContentBtn">
          Start reading
        </button>
      </div>
    </Modal>
  );
};

export default ModalDetailIfo;
