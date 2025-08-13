interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <div>
      <div>{children}</div>
      <div>{children}</div>
    </div>
  );
};

export default Dashboard;
