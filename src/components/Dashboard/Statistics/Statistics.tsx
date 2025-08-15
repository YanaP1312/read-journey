import { PieChart, Pie, Cell } from "recharts";
import type { StatisticsProps } from "../../../redux/helpers/types/interfacesDashboard";



const Statistics = ({ totalPages, progress=[] }: StatisticsProps) => {
  const pagesRead = progress.reduce(
    (sum, p) => sum + ((p.finishPage??0) - p.startPage + 1),
    0
  );
  const percent = ((pagesRead / totalPages) * 100).toFixed(2);


  const data = [
    { name: "Read", value: pagesRead },
    { name: "Remaining", value: totalPages - pagesRead },
  ];
  const COLORS = ["#00C49F", "#CCCCCC"];

  return (
    <div>
        <p>Each page, each chapter is a new round of knowledge, a new step towards understanding. By rewriting statistics, we create our own reading history.</p>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
      <div>{percent}%</div>
      <p>{`${pagesRead} pages read`}</p>
    </div>
  );
};

export default Statistics;
