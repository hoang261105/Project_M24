import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllQues } from "../../services/admin/question.service";
import { Question } from "../../interface/admin";

export default function QuestionPage() {
  const { idExam } = useParams();
  const account = JSON.parse(localStorage.getItem("account") || "[]");
  const dispatch = useDispatch();
  const quesState = useSelector((state: any) => state.questions.ques);
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  console.log(quesState);

  useEffect(() => {
    if (idExam) {
      dispatch(getAllQues(parseInt(idExam)));
    }
  }, [dispatch]);

  const handlePreQues = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  const handleNextQues = () => {
    if (questionIndex < quesState.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };
  return (
    <div style={{ width: "100%" }}>
      <div className="header-exam">
        <div className="logo-header">
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/182/690/original/thi-letter-logo-design-with-polygon-shape-thi-polygon-and-cube-shape-logo-design-thi-hexagon-logo-template-white-and-black-colors-thi-monogram-business-and-real-estate-logo-vector.jpg"
            alt=""
          />
          <p>OnlineTest</p>
        </div>
        <div className="header-menu">
          <button
            className="material-symbols-outlined"
            style={{
              fontSize: 40,
              backgroundColor: "#FCBA2C",
              border: "#FCBA2C",
            }}
            id="exit"
          >
            exit_to_app
          </button>
        </div>
      </div>
      <section className="main-menu">
        {/* left */}
        <div className="menu-left">
          <div className="avt" id="infoAcc">
            <img src={account.image} alt="" />
            <p>{account.name}</p>
          </div>
          <div className="time">
            <span
              style={{ fontSize: 60 }}
              className="material-symbols-outlined"
            >
              timer
            </span>
            <div id="countdown">20:00</div>
          </div>
        </div>
        {/* left */}
        {/* mid */}
        <div className="menu-mid">
          {quesState.length > 0 && (
            <>
              <div className="question">
                <h1 id="numberquestion" style={{ marginLeft: "-500px" }}>
                  Câu {questionIndex + 1}
                </h1>
                <span id="questionName">
                  {quesState[questionIndex].nameQues}
                </span>
              </div>
              <form className="answer">
                {quesState[questionIndex].options.map(
                  (option: string, optIndex: number) => (
                    <div key={optIndex} className="answer1">
                      <input
                        name={`answer-${questionIndex}`}
                        type="radio"
                        id={`answer-${questionIndex}-${optIndex}`}
                      />
                      <p>{option}</p>
                    </div>
                  )
                )}
              </form>
            </>
          )}
          <div className="button-menu">
            <button className="pev" id="pev" onClick={handlePreQues}>
              <h4>Câu trước</h4>
            </button>
            <button className="next" id="next" onClick={handleNextQues}>
              <h4>Câu sau</h4>
            </button>
          </div>
        </div>
        {/* mid */}
        {/* right */}
        <div className="menu-right">
          {quesState.map((item: any, index: number) => (
            <button key={index} className="c">
              {index + 1}
            </button>
          ))}
          <button className="submit-menu">
            <a
              href=""
              style={{ fontSize: 18, textDecoration: "none", color: "black" }}
            >
              Nộp bài
            </a>
          </button>
        </div>
        {/* right */}
      </section>
    </div>
  );
}
