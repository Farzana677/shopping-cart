import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Dashboard from "./pages/dashboard.tsx";
import { Details } from "./pages/details.tsx";
import { Electronics } from "./pages/electronics.tsx";
// import UserContext from "./context/userContext.tsx";
import UserContextProvider from "./context/userContentProvider.tsx";

import Jewelery from "./pages/jewelery.tsx";
import Login from "./pages/login.tsx";
import Users from "./pages/users.tsx";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product/:id" element={<Details />} />
            <Route path="/jewelery" element={<Jewelery />} />
            <Route path="/electronics" element={<Electronics />} />

            {/* <Route path="/login" element ={<Login/>}/> */}
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
