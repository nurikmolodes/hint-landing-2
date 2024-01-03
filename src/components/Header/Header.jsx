import "./Header.scss";
import { useLocation, useNavigate } from "react-router-dom";
import hint from "../../assets/hint.png";

const Header = () => {
  const navigate = useNavigate();
  const currentUrl = useLocation();
  const route =
    currentUrl.pathname === "/welcome"
      ? "/welcome"
      : currentUrl.pathname === "/gender"
      ? "/welcome"
      : currentUrl.pathname === "/birthday"
      ? "/gender"
      : currentUrl.pathname === "/palms-hold"
      ? "/birthday"
      : currentUrl.pathname === "/wish"
      ? "/palms-hold"
      : currentUrl.pathname === "/relationship"
      ? "/wish"
      : currentUrl.pathname === "/resonate"
      ? "/relationship"
      : currentUrl.pathname === "/color"
      ? "/resonate"
      : currentUrl.pathname === "/decisions"
      ? "/color"
      : currentUrl.pathname === "/guidance"
      ? "/decisions"
      : currentUrl.pathname === "/scan"
      ? "/guidance"
      : currentUrl.pathname === "/scan-info"
      ? "/scan"
      : currentUrl.pathname === "/analyze"
      ? "/scan-info"
      : currentUrl.pathname === "/email"
      ? "/analyze"
      : currentUrl.pathname === "/plan"
      ? "/email"
      : currentUrl.pathname === "/paywall"
      ? "/plan"
      : "welcome";
      
  return (
    <div className="header">
      <svg
        onClick={() => navigate(`${route}`)}
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.7676 12.3203H5.76758"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
        <path
          d="M12.7676 19.3203L5.76758 12.3203L12.7676 5.32031"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
      </svg>
      <img src={hint} />
    </div>
  );
};

export default Header;
