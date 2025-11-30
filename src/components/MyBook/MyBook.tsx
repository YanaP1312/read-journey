import { useAppSelector } from "../../redux/helpers/hooks";
import { selectBook } from "../../redux/ownBookInfo/selectors";

const MyBook = () => {

    const book = useAppSelector(selectBook);

    const lastProgress = book?.progress?.at(-1);
    const isReading = lastProgress?.status === "active";


    return <section className="primary">
        <h2 className="contentTitle">My reading</h2>
        <div className="readingContent">
            <div className="readingWrap">
        <img
            src={book?.imageUrl || "/images/placeholder-cover.png"}
            alt={`Book cover - ${book?.title}`}
            width="224"
            height="340"
            className="readingImg"
            />
        <div>
            <h4 className="readingTitle">{book?.title}</h4>
            <p className="readingAuthor">{book?.author}</p>
        </div>

            <img className="readingBtn" src={isReading? "/stop.svg" : "/play.svg"} width={50} height={50} alt={isReading? "Stop reading icon" : "Start reading icon"}/>
            </div>
        </div>

    </section>
}

export default MyBook;