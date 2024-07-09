import { Routes, Route } from "react-router-dom";
import LoginAdmin from "./pages/admin/LoginAdmin";
import AdminHome from "./pages/admin/AdminHome";
import AdminUser from "./pages/admin/AdminUser";
import AdminCourse from "./pages/admin/AdminCourse";
import "./scss/admin.scss";
import AdminSubject from "./pages/admin/AdminSubject";
import AdminExam from "./pages/admin/AdminExam";
import AdminQues from "./pages/admin/AdminQues";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/adminHome" element={<AdminHome />} />
        <Route path="/adminUser" element={<AdminUser />} />
        <Route path="/adminCourse" element={<AdminCourse />} />
        <Route path="/adminSubject/:course/:id" element={<AdminSubject />} />
        <Route path="adminExam/:subject/:idLesson" element={<AdminExam />} />
        <Route path="adminQues/:chapter/:idExam" element={<AdminQues />} />
      </Routes>
    </>
  );
}
