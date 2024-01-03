import { useLocation } from "react-router-dom";
import "./Progress.scss";

const Progress = () => {
  const location = useLocation();
  const percentage =
    location.pathname === "/gender"
      ? 11
      : location.pathname === "/birthday"
      ? 22
      : location.pathname === "/palms-hold"
      ? 33
      : location.pathname === "/wish"
      ? 44
      : location.pathname === "/relationship"
      ? 55
      : location.pathname === "/resonate"
      ? 66
      : location.pathname === "/color"
      ? 77
      : location.pathname === "/decisions"
      ? 88
      : location.pathname === "/guidance"
      ? 100
      : "";
  const number =
    location.pathname === "/gender"
      ? 1
      : location.pathname === "/birthday"
      ? 2
      : location.pathname === "/palms-hold"
      ? 3
      : location.pathname === "/wish"
      ? 4
      : location.pathname === "/relationship"
      ? 5
      : location.pathname === "/resonate"
      ? 6
      : location.pathname === "/color"
      ? 7
      : location.pathname === "/decisions"
      ? 8
      : location.pathname === "/guidance"
      ? 9
      : "";

  return (
    <div className="progress">
      <div className="count">{number}/9</div>
      <div className="bar">
        <div className="left-circle"></div>
        <div className="fill" style={{ width: `${percentage}%` }}></div>
        <div className={`right-circle ${location.pathname === "/guidance" && "filled"}`}></div>
      </div>
    </div>
  );
};

export default Progress;
