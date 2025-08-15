import type { ProgressReport } from "../../../../redux/helpers/types/interfacesBook";

const ReadingSessionCard = ({ item, totalPages, onDelete }: {
    item: ProgressReport;
    totalPages: number;
    onDelete: (id: string) => void;
  }) => {
    const pagesRead = (item.finishPage ?? 0) - item.startPage + 1;
    const percent = ((pagesRead / totalPages) * 100).toFixed(2);
    const durationMs = new Date(item.finishReading!).getTime() - new Date(item.startReading).getTime();
    const timeMinutes = Math.floor(durationMs / 60000);
  
    return (
      <div style={{ /* стили карточки */ }}>
        <div>{percent}% — {timeMinutes} min</div>
        <div>{pagesRead} pages — {item.speed} pages/hour</div>
        <button onClick={() => onDelete(item._id)}>🗑</button>
      </div>
    );
  };
  
  export default ReadingSessionCard