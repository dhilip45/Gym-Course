import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";

const DashboardLayout = () => {
  return (
<div className="bg-gradient-to-br from-yellow-500/20 to-black border border-yellow-500/20 p-6 rounded-3xl">

      <Sidebar />

      <div className="flex-1">
        <Outlet />
      </div>

    </div>
  );
};

export default DashboardLayout;