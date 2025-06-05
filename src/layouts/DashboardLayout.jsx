import React, { useEffect, useRef } from "react";
import { useLocation, Outlet } from "react-router-dom";
import DashNavbar from "../components/DashNavbar";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  const location = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    // Scroll the dashboard content area to top on route change
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

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
        <main
          ref={mainRef}
          className="p-6 flex-grow overflow-y-auto bg-white"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
