import { useState } from "react";
import { useAppSelector } from "../../../redux/helpers/hooks";
import { selectBook } from "../../../redux/ownBookInfo/selectors";
import Diary from "./Diary/Diary";
import Statistics from "./Statistics";

const ReadingDetails = () => {

    const [viewMode, setViewMode] = useState<"diary" | "statistics">("diary");
    const book = useAppSelector(selectBook);

    if(!book) return null;

    return <section>
        <div>
        <h3>{viewMode === "diary"? "Diary" : "Statistics"}</h3>
        <div>
            <button disabled={viewMode==="diary"} onClick={() => setViewMode("diary")}>
        <img src="/hourglass.svg" width={20} height={20} alt="Reading dairy icon"/></button>
        <button disabled={viewMode==="statistics"} onClick={() => setViewMode("statistics")}>
        <img src="/pie-chart.svg" width={20} height={20} alt="Reading statistic icon"/></button>
        </div>
        </div>
        {viewMode === "diary"? (<Diary progress={book.progress ?? []} totalPages={book.totalPages} bookId={book._id}/>) : <Statistics progress={book.progress} totalPages={book.totalPages}/>}
    </section>

}

export default ReadingDetails;