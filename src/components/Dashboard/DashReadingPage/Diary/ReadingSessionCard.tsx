import type { ProgressReport } from "../../../../redux/helpers/types/interfacesBook";
import { FaRegTrashAlt } from "react-icons/fa";

const ReadingSessionCard = ({ item, totalPages, onDelete }: {
    item: ProgressReport;
    totalPages: number;
    onDelete: (id: string) => void;
  }) => {

    const formatDuration = (minutes: number) => {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
    
      if (hours > 0) {
        return `${hours} hour(s) ${remainingMinutes} min`;
      }
      return `${minutes} min`;
    };



    const pagesRead = (item.finishPage ?? 0) - item.startPage + 1;
    const percent = ((pagesRead / totalPages) * 100).toFixed(2);
    const durationMs = new Date(item.finishReading!).getTime() - new Date(item.startReading).getTime();
    const timeMinutes = Math.floor(durationMs / 60000);
    const formattedTime = formatDuration(timeMinutes);
  
    return (
      <div className="timeBlock">
        <div className="timeStatic">
          <span className="timePerc">{percent}%</span>
          <span>{formattedTime}</span>
          </div>
        <div className="timeVisual">
          <div className="timeVisualWrap">
          <img
  src="/images/level.png"
  srcSet="/images/level@2x.png 2x"
  width="59"
  height="25"
  alt="progress"
/>
          <span>{pagesRead} page(s) read</span></div>
        <button className="timeVisualBtn" onClick={() => onDelete(item._id)}><FaRegTrashAlt width={14} height={14} /></button>
        </div>
      </div>
    );
  };
  
  export default ReadingSessionCard