import { useAppSelector } from "../../redux/helpers/hooks";
import { selectBook } from "../../redux/ownBookInfo/selectors";

const MyBook = () => {

    const book = useAppSelector(selectBook);

    const lastProgress = book?.progress?.at(-1);
    const isReading = lastProgress?.status === "active";


    return <section className="primary">
        <h2>My reading</h2>
        <div>
        <img
            src={book?.imageUrl}
            alt={`Book cover - ${book?.title}`}
            width="224"
            height="340"
            />
        <div>
            <h4>{book?.title}</h4>
            <p>{book?.author}</p>
        </div>
            <img src={isReading? "/stop.svg" : "/play.svg"} width={50} height={50} alt={isReading? "Stop reading icon" : "Start reading icon"}/>
        </div>

    </section>
}

export default MyBook;