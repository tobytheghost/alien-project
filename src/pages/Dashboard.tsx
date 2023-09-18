import DashboardLayout from "../layout/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="text-xl text-right pb-2">
        Welcome User_{Math.floor(Math.random() * 1000)}
      </div>
      <div className="flex flex-grow border-2 border-green-light"></div>
    </DashboardLayout>
  );
};

export default Dashboard;
