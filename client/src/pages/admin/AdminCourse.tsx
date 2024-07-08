import { NavLink, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCourse,
  deleteCourse,
  getAllCourse,
  searchCourse,
  updateCourse,
} from "../../services/admin/course.service";
import { Course } from "../../interface/admin";
import { format } from "date-fns";
import Menu from "../../components/admin/Menu";

export default function AdminCourse() {
  const navigate = useNavigate();
  const courseState = useSelector((state: any) => state.courses.course);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCourse());
  }, [dispatch]);

  const handleClick = (id: number, course: Course) => {
    navigate(`/adminSubject/${course.nameCourse}/${id}`);
  };
  console.log(courseState);

  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = (course: Course) => {
    setCourseEdit(course);
    setShowEdit(true);
  };

  // Hàm thêm khóa học
  const [courseName, setCourseName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [courseDelete, setCourseDelete] = useState<Course | null>(null);

  const handleAdd = async () => {
    if (!courseName) {
      setError(true);
    } else {
      setError(false);
      const newCourse = {
        nameCourse: courseName,
        created_at: format(new Date(), "dd/MM/yyyy HH:mm:ss"),
        subjectNum: 0,
      };
      await dispatch(addCourse(newCourse));
      await dispatch(getAllCourse());
      setShow(false);
    }
  };

  // Hàm xóa khóa học
  const handleDelete = async (id: number) => {
    await dispatch(deleteCourse(id));
    await dispatch(getAllCourse());
    setCourseDelete(null);
  };

  // Hàm sửa khóa học
  const [courseEdit, setCourseEdit] = useState<Course | null>(null);
  const handleEdit = async () => {
    if (courseEdit) {
      await dispatch(
        updateCourse({
          id: courseEdit.id,
          nameCourse: courseEdit.nameCourse,
          created_at: format(new Date(), "dd/MM/yyyy HH:mm:ss"),
          subjectNum: 0,
        })
      );
      await dispatch(getAllCourse());
      setShowEdit(false);
      console.log(124444454);
    }
  };

  // Hàm tìm kiếm khóa học
  const [search, setSearch] = useState<string>("");
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    await dispatch(searchCourse(search));
  };

  return (
    <>
      <Menu />

      <div className="main-content">
        <div className="header-wrapper">
          <div className="header-title">
            <div className="title">
              <span>Thi online</span>
              <h2>Quản lí khóa học</h2>
            </div>
            <div className="addSubject">
              <Button variant="primary" onClick={handleShow}>
                + Thêm khóa thi
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Thêm khóa thi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Nhập tên khóa thi</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nhập tên khóa"
                        name="nameCourse"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                      />
                    </Form.Group>
                  </Form>
                  {error && (
                    <span style={{ color: "red", fontSize: 15 }}>
                      Tên khóa học không được để trống
                    </span>
                  )}
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Hủy
                  </Button>
                  <Button variant="primary" onClick={handleAdd}>
                    Thêm khóa thi
                  </Button>
                </Modal.Footer>
              </Modal>

              <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                  <Modal.Title>Sửa khóa thi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Nhập tên khóa thi</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nhập tên khóa"
                        name="nameCourse"
                        value={courseEdit?.nameCourse || ""}
                        onChange={(e) => {
                          if (courseEdit) {
                            setCourseEdit({
                              ...courseEdit,
                              nameCourse: e.target.value,
                            });
                          }
                        }}
                      />
                    </Form.Group>
                  </Form>
                  {error && (
                    <span style={{ color: "red", fontSize: 15 }}>
                      Tên khóa học không được để trống
                    </span>
                  )}
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseEdit}>
                    Hủy
                  </Button>
                  <Button variant="primary" onClick={handleEdit}>
                    Cập nhật
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          <div className="user-info">
            <div className="sort">
              <Form.Select aria-label="Default select example">
                <option>Sắp xếp theo</option>
                <option value="1">Ngày tạo</option>
                <option value="2">Từ A-Z</option>
                <option value="3">Từ Z-A</option>
                <option value="4">Số môn</option>
              </Form.Select>
            </div>
            <div className="search-box">
              <i className="fa-solid fa-search"></i>
              <input
                type="text"
                placeholder="Tìm kiếm ở đây"
                onChange={handleSearch}
              />
            </div>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/005/005/791/small/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="table-wrapper">
          <div className="title">
            <h3 className="main-title">Bảng quản lí khóa học</h3> <br />
            <button className="btn btn-danger">Xóa tất cả</button>
            <button className="btn btn-warning">Xóa nhiều</button>
          </div>
          <br />
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Tên khóa học học</th>
                  <th>Ngày tạo</th>
                  <th>Số môn</th>
                  <th className="w-52">Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {courseState.map((course: Course) => (
                  <tr key={course.id}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <a href="" onClick={() => handleClick(course.id, course)}>
                        {course.nameCourse}
                      </a>
                    </td>
                    <td>{course.created_at}</td>
                    <td>{course.subjectNum}</td>
                    <td className="flex gap-2">
                      <Button
                        variant="primary"
                        onClick={() => handleShowEdit(course)}
                      >
                        Sửa
                      </Button>
                      <button
                        className="btn btn-danger"
                        onClick={() => setCourseDelete(course)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {courseDelete && (
              <div className="overlay">
                <div className="modal-custom">
                  <div className="modal-header-custom">
                    <h5>Xác nhận</h5>
                    <i
                      className="fas fa-xmark"
                      onClick={() => setCourseDelete(null)}
                    />
                  </div>
                  <div className="modal-body-custom">
                    <p>Bạn chắc chắn muốn xóa {courseDelete?.nameCourse}?</p>
                  </div>
                  <div className="modal-footer-footer">
                    <button
                      className="btn btn-light"
                      onClick={() => setCourseDelete(null)}
                    >
                      Hủy
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(courseDelete.id)}
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            )}

            <br />
            <div className="statistical">
              <div className="total-records">
                <p>Hiển thị 5/{courseState.length} bản ghi</p>
              </div>
              <div className="pagination">
                <Form.Select aria-label="Default select example">
                  <option value="1">Hiển thị 10 bản ghi trên trang</option>
                  <option value="2">Hiển thị 20 bản ghi trên trang</option>
                  <option value="3">Hiển thị 50 bản ghi trên trang</option>
                  <option value="4">Hiển thị 100 bản ghi trên trang</option>
                </Form.Select>
                <div className="button">
                  <button>Pre</button>
                  <button>1</button>
                  <button>2</button>
                  <button>Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
