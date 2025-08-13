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
      <div>
        <img
          src={book.imageUrl}
          alt={`Book cover - ${book.title}`}
          width="153"
          height="233"
        />
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p>{`${book.totalPages} pages`}</p>
        <button type="button" onClick={handleStartBook}>
          Start reading
        </button>
      </div>
    </Modal>
  );
};

export default ModalDetailIfo;
