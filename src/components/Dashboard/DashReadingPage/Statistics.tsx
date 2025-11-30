import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";
import type { StatisticsProps } from "../../../redux/helpers/types/interfacesDashboard";

const Statistics = ({ totalPages, progress = [] }: StatisticsProps) => {
  const pagesRead = progress.reduce((sum, p) => {
    const endPage = p.finishPage ?? p.startPage;
    return sum + (endPage - p.startPage + 1);
  }, 0);

  const percent = Math.min(((pagesRead / totalPages) * 100), 100).toFixed(0);

  const hasActiveSession = progress.some(p => p.status === "active");

  const chartData = [{ name: "Progress", value: Number(percent) }];

  return (
    <div>
      <p className="pieIntro">
        Each page, each chapter is a new round of knowledge, a new step towards understanding.
        By rewriting statistics, we create our own reading history.
      </p>
      <div className="pieContainer">
<div className="pieChartWrap">
      <RadialBarChart
        width={189}
        height={189}
        cx="50%"
        cy="50%"
        innerRadius="80%"
        outerRadius="100%"
        barSize={10}
        data={chartData}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          background={{ fill: "#1f1f1f" }}
          barSize={50}
          dataKey="value"
          cornerRadius={50}
          fill="#30b94d"
        />
        <text
          x={94.5}
          y={94.5}
          textAnchor="middle"
          dominantBaseline="middle"
          className="piePercent"
        >
          100%
        </text>
      </RadialBarChart>
      </div>
      <div className="pieWrapPerc">
        <div className="pieSqu"></div>
<p>{percent}%</p>
</div>
      <p className="pieText">{`${pagesRead} pages read`}</p>

      {hasActiveSession && (
        <p className="pieNote">
          * To see accurate statistics, finish your current reading session.
        </p>
      )}
      </div>
    </div>
  );
};

export default Statistics;
