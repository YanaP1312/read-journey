interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <aside>
      {children}
    </aside>
  );
};

export default Dashboard;
