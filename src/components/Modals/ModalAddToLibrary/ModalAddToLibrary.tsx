import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../../redux/helpers/hooks";
import type { Book } from "../../../redux/helpers/types/interfacesBook";
import { addBookFromRecom } from "../../../redux/ownBooks/operations";
import Modal from "../Modal";
import {
  selectBooks,
  selectError,
  selectIsLoading,
} from "../../../redux/ownBooks/selectors";
import Loader from "../../Loader/Loader";

interface ModalAddToLibraryProps {
  book: Book;
  onClose: () => void;
}

const ModalAddToLibrary = ({ onClose, book }: ModalAddToLibraryProps) => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectError);
  const isLoading = useAppSelector(selectIsLoading);
  const ownBooks = useAppSelector(selectBooks);

  const handleAddBook = async () => {
    const isDuplicate = ownBooks.some(
      (ownBook) => ownBook.title.toLowerCase() === book.title.toLowerCase()
    );
    if (isDuplicate) {
      toast("📚 This book is already in your library!");
      onClose();
      return;
    } else {
      const result = await dispatch(addBookFromRecom(book._id));
      if (addBookFromRecom.fulfilled.match(result)) {
        toast("🌈 Book successfully added to your library!");
        onClose();
      } else {
        toast(`👀 ${error || "Something went wrong."}`);
      }
    }
  };

  return (
    <Modal onClose={onClose}>
      {isLoading ? (
        <Loader />
      ) : (
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
          <button type="button" onClick={handleAddBook}>
            Add to library
          </button>
        </div>
      )}
    </Modal>
  );
};

export default ModalAddToLibrary;
