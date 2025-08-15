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
    <div style={{ marginBottom: "24px" }}>
      <div
        style={{
          fontWeight: "600",
          fontSize: "16px",
          marginBottom: "12px",
          color: "black",
        }}
      >
        {date} — <span style={{ color: "#aaa" }}>{totalPagesRead} pages</span>
      </div>

      {sessions.map((item) => (
        <ReadingSessionCard
          key={item._id}
          item={item}
          totalPages={totalPages}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ReadingDayBlock;
