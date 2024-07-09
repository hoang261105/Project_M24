import { Routes, Route } from "react-router-dom";
import LoginAdmin from "./pages/admin/LoginAdmin";
import AdminHome from "./pages/admin/AdminHome";
import AdminUser from "./pages/admin/AdminUser";
import AdminCourse from "./pages/admin/AdminCourse";
import "./scss/admin.scss";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/adminHome" element={<AdminHome />} />
        <Route path="/adminUser" element={<AdminUser />} />
        <Route path="/adminCourse" element={<AdminCourse />} />
      </Routes>
    </>
  );
}
