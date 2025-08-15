import { deleteReadingBook } from "../../../redux/ownBookInfo/operations";
import type { DiaryProps } from "../../../redux/helpers/types/interfacesDashboard";
import { useAppDispatch } from "../../../redux/helpers/hooks";
import ReadingDayBlock from "./ReadingDayBlock";
import type { ProgressReport } from "../../../redux/helpers/types/interfacesBook";

const Diary = ({ progress = [], totalPages, bookId }: DiaryProps) => {
  const dispatch = useAppDispatch();

  const groupedByDate = progress
  .filter((item) => !!item.finishReading) 
  .reduce((acc: Record<string, ProgressReport[]>, item) => {
    const date = new Date(item.finishReading!).toLocaleDateString();
    if (!acc[date]) acc[date] = [];
    acc[date].push(item);
    return acc;
  }, {}) ;


  const sortedDates = Object.keys(groupedByDate).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  const handleDelete = (readingId: string) => {
    dispatch(deleteReadingBook({ bookId, readingId }));
  };

  return (
    <div style={{ maxHeight: "400px", overflowY: "auto", paddingRight: "8px" }}>
      {sortedDates.map((date) => (
        <ReadingDayBlock
          key={date}
          date={date}
          sessions={groupedByDate[date]}
          totalPages={totalPages}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );}

export default Diary;

