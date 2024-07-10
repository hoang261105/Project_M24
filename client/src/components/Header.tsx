import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const [account, setAccount] = useState(
    JSON.parse(localStorage.getItem("account") || "null")
  );

  const navigate = useNavigate();

  const handleLogOut = () => {
    const confirmLogout = confirm("Bạn có chắc chắn đăng xuất không?");
    if (confirmLogout) {
      localStorage.removeItem("account");
      navigate("/login");
      setAccount(null);
    }
  };
  return (
    <header className="header">
      <div className="ipad-header-top">
        <div className="header-left">
          <a href="">
            <img
              src="https://static.vecteezy.com/system/resources/previews/009/182/690/original/thi-letter-logo-design-with-polygon-shape-thi-polygon-and-cube-shape-logo-design-thi-hexagon-logo-template-white-and-black-colors-thi-monogram-business-and-real-estate-logo-vector.jpg"
              alt=""
              className="logos"
            />
          </a>
          <p>OnlineTest</p>
        </div>
        <div className="container1">
          <form action="" id="form-input">
            <input type="search" id="myInput" placeholder="tìm kiếm đề" />
            <ul id="myUL">{/* <li><a href="#">Athens</a></li> */}</ul>
          </form>
        </div>
      </div>
      <div className="header-right">
        <nav className="header-nav">
          <NavLink to={"/home"} className="nav-item">
            Trang chủ
          </NavLink>
          <a href="Subjects.html" className="nav-item">
            Trang khóa học
          </a>
          <a href="../Pages/contact.html" className="nav-item">
            Liên hệ
          </a>
        </nav>
        <div id="loginOut" className="flex gap-3 text-lg">
          {account ? (
            <div className="flex items-center gap-4">
              <NavLink to={"/profile"}>
                <img
                  src={account.image}
                  alt=""
                  className="w-9 h-9"
                  style={{ borderRadius: "50%" }}
                />
              </NavLink>
              <NavLink to={"/profile"}>{account.name}</NavLink>
              <a href="" onClick={handleLogOut}>
                <i className="fa-solid fa-right-from-bracket"></i>
              </a>
            </div>
          ) : (
            <>
              <NavLink to={"/login"}>Đăng nhập</NavLink>
              <NavLink to={"/signup"}>Đăng kí</NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
