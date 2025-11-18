import type { ProgressReport } from "../../../../redux/helpers/types/interfacesBook";
import ReadingSessionCard from "./ReadingSessionCard";

const ReadingDayBlock = ({
  date,
  sessions,
  totalPages,
  onDelete,
}: {
  date: string;
  sessions: ProgressReport[];
  totalPages: number;
  onDelete: (id: string) => void;
}) => {
  const totalPagesRead = sessions.reduce((sum, item) => {
    const pages = (item.finishPage ?? 0) - item.startPage + 1;
    return sum + pages;
  }, 0);

  return (
    <div>
      <div className="dayCommon">
        <div className="dayWrap">
        <div className="dayDecor"></div>
        <span>{date}</span> 
        </div>
        <span className="dayPages">{totalPagesRead} pages</span>
      </div>
<div className="dayBlock">
      {sessions.map((item) => (
        <ReadingSessionCard
          key={item._id}
          item={item}
          totalPages={totalPages}
          onDelete={onDelete}
        />
      ))}
      </div>
    </div>
  );
};

export default ReadingDayBlock;
