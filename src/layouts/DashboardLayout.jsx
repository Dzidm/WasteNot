import React from "react";
import DashNavbar from "../components/DashNavbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-80 bg-yellow-100">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        {/* Dashboard Navbar */}
        <header className="h-16 bg-white shadow-md">
          <DashNavbar />
        </header>

        {/* Dashboard Content */}
        <main className="p-6 flex-grow overflow-y-auto bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
