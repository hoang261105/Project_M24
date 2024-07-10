import { Routes, Route } from "react-router-dom";
import LoginAdmin from "./pages/admin/LoginAdmin";
import AdminHome from "./pages/admin/AdminHome";
import AdminUser from "./pages/admin/AdminUser";
import AdminCourse from "./pages/admin/AdminCourse";
import "./scss/admin.scss";
import "./css/home.css";
import AdminSubject from "./pages/admin/AdminSubject";
import AdminExam from "./pages/admin/AdminExam";
import AdminQues from "./pages/admin/AdminQues";
import Home from "./pages/user/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Subjects from "./pages/user/Subject";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/adminHome" element={<AdminHome />} />
        <Route path="/adminUser" element={<AdminUser />} />
        <Route path="/adminCourse" element={<AdminCourse />} />
        <Route path="/adminSubject/:course/:id" element={<AdminSubject />} />
        <Route path="/adminExam/:subject/:idLesson" element={<AdminExam />} />
        <Route path="/adminQues/:chapter/:idExam" element={<AdminQues />} />

        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/subject/:course/:id" element={<Subjects />} />
      </Routes>
    </>
  );
}
