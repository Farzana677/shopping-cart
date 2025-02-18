import { Outlet } from "react-router";
import Sidebar from "../components/sidebar";

const Layout = () => {
  return (
    <>
      <header className="p-4 bg-[#d77a7a] text-white">
        <Sidebar />
      </header>

      <main
        style={{
          padding: "0px",
          overflowY: "auto",
          height: "calc(100vh - 80px)",
        }}
      >
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
