import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Profile() {
  const account = JSON.parse(localStorage.getItem("account") || "[]");
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div
        className="profile"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="profile-left">
          <div className="left1">
            <span className="material-symbols-outlined"> manage_accounts </span>
            <p>Thông tin cá nhân</p>
          </div>

          <div className="left1">
            <span className="material-symbols-outlined"> history </span>
            <a href="../Pages/ExamHistory.html" style={{ color: "black" }}>
              <p>Lịch sử làm bài</p>
            </a>
          </div>
        </div>

        <div className="profile-right">
          <h1 style={{ textAlign: "center" }}>Thông tin cá nhân</h1>
          <br />
          <div
            className="container-info"
            style={{ display: "flex", gap: 30 }}
            id="profile"
          >
            <div className="change-avt">
              <img src={account.image} className="profile-avt" />
              <div id="change-Avt">
                <button id="changeAvt">Thay đổi ảnh</button>
              </div>
            </div>
            <div className="profile-form">
              <div className="form1">
                <h2>Tên tài khoản</h2>
                <h2>{account.name}</h2>
              </div>
              <hr />
              <div className="form1">
                <h3>Email:</h3>
                <h3>{account.email}</h3>
              </div>
              <hr />
              <div className="form1">
                <h3>Địa chỉ:</h3>
                {account.address ? (
                  <h3>{account.address}</h3>
                ) : (
                  <h3>Chưa có</h3>
                )}
              </div>
              <hr />
              <div className="form1">
                <h3>Số điện thoại:</h3>
                <h3>Chưa có</h3>
              </div>
              <hr />
              <div className="form-button">
                <button className="changePass">
                  <h3>Đổi thông tin</h3>
                </button>
              </div>
              <div className="form-button">
                <button
                  className="changePass"
                  style={{ background: "rgb(2, 81, 150)" }}
                >
                  <h3>Đổi mật khẩu</h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
