import DashboardTable from "@/app/component/Dashboard/DashboardTable";

const DashboardHomePage = () => {
  return (
    <div>
      <div>
        <div className="bg-gray-200 flex justify-end p-5">
          <h1 className="mr-10">User</h1>
        </div>
        <div>
          <DashboardTable />
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
