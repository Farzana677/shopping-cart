import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/sidebar";

const Layout = () => {
  return (
    <div>
      {/* Sidebar as top navigation */}
      <header className="p-4 bg-[#d77a7a;] text-white">
        <Sidebar />
      </header>

      {/* Main content */}
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
