import { Routes, Route } from "react-router-dom";
import LoginAdmin from "./admin/LoginAdmin";
import AdminHome from "./admin/AdminHome";
import AdminUser from "./admin/AdminUser";
import "./scss/admin.scss";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/adminHome" element={<AdminHome />} />
        <Route path="/adminUser" element={<AdminUser />} />
      </Routes>
    </>
  );
}
