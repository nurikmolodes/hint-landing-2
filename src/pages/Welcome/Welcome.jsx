/* eslint-disable react/no-unescaped-entities */
import { useLocation, useNavigate } from "react-router-dom";
import "./Welcome.scss";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Welcome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    localStorage.setItem("currentPage", location.pathname);
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div className="welcome">
      <div className="palm">
        <svg width="200" height="200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.4 92.45c-.26 4.21-3.63 7.671-7.82 7.881-.34.03-.58.29-.58.63v.47c0 .34.26.61.58.63 4.16.21 7.5 3.61 7.82 7.8.03.34.32.63.68.63h.37c.34 0 .63-.26.68-.61.39-3.71 4.16-7.53 7.84-7.8.32-.03.55-.29.55-.58v-.55c0-.32-.24-.55-.53-.58-3.71-.34-7.61-4.14-7.87-7.85a.595.595 0 0 0-.58-.55h-.53c-.37-.08-.63.16-.63.47l.02.01z"
            fill="#DEE5F8"></path>
          <path
            d="M153.83 0h-.5c-.3 0-.56.23-.56.53-.25 3.56-3.99 7.2-7.54 7.53a.57.57 0 0 0-.5.56v.53c0 .3.23.53.53.56 3.53.25 7.14 3.92 7.52 7.48.03.33.3.58.66.58h.35c.35 0 .63-.25.66-.61.3-3.99 3.51-7.28 7.49-7.48.33-.03.56-.28.56-.61v-.45a.61.61 0 0 0-.56-.61c-4.01-.2-7.24-3.51-7.49-7.55-.05-.23-.3-.45-.61-.45l-.01-.01z"
            fill="#9BACD7"></path>
          <path
            d="M185.65 64.52c-.39 5.78-5.14 10.51-11.07 10.79-.47.03-.84.41-.84.84v.64c0 .46.37.84.84.84 5.9.28 10.62 4.96 11.07 10.69.03.48.45.87.97.87h.52c.5 0 .89-.36.94-.84.55-5.09 5.88-10.34 11.12-10.69.45-.03.79-.38.79-.81v-.76c0-.41-.31-.76-.76-.81-5.27-.46-10.75-5.68-11.15-10.79a.825.825 0 0 0-.84-.76h-.76c-.45.05-.81.38-.84.81l.01-.02z"
            fill="#DEE5F8"></path>
          <path
            d="M42.1 67.67c0-4.31 3.52-7.82 7.84-7.82s7.84 3.51 7.84 7.82v37.42c0 1.36 1.1 2.46 2.47 2.46s2.47-1.1 2.47-2.46V42.97c0-4.31 3.52-7.82 7.84-7.82s7.84 3.51 7.84 7.82v62.1c0 1.36 1.1 2.46 2.47 2.46s2.47-1.1 2.47-2.46V32.84c0-4.31 3.52-7.82 7.84-7.82s7.84 3.51 7.84 7.82v72.25c0 1.36 1.1 2.46 2.47 2.46s2.47-1.1 2.47-2.46v-62.1c0-4.31 3.52-7.82 7.84-7.82s7.84 3.51 7.84 7.82v57.77c0 .15.03.31.05.46-.03.51-.05 1.03-.05 1.51v26.78c0 1.36 1.1 2.46 2.47 2.46s2.47-1.1 2.47-2.46V102.7c0-5.56 2.08-11.2 5.32-14.38 2.03-2 4.42-2.97 7.09-2.92 1.23.03 3.26.38 3.26 2.49v35.4c0 .26.05.49.13.72l-.13.03v24.23h4.96V87.9c0-4.31-3.34-7.36-8.12-7.43-4.01-.08-7.66 1.44-10.64 4.36-.67.64-1.28 1.36-1.85 2.13V42.99c0-7.02-5.73-12.76-12.8-12.76-2.96 0-5.68 1-7.84 2.69v-.08c0-7.02-5.73-12.76-12.8-12.76s-12.8 5.72-12.8 12.76v.08a12.669 12.669 0 0 0-7.84-2.69c-7.04 0-12.8 5.72-12.8 12.76V57.6a12.669 12.669 0 0 0-7.84-2.69c-7.04 0-12.8 5.72-12.8 12.76v80.59h5.04V67.67h-.02z"
            fill="#9BACD7"></path>
          <path
            d="M91.12 195.01c-26.04 0-47.38-20.75-48.76-46.74h-4.91c1.38 28.77 24.92 51.74 53.67 51.74s52.29-22.97 53.67-51.74h-4.93c-1.35 26.02-22.69 46.74-48.74 46.74z"
            fill="#DEE5F8"></path>
          <path
            d="M171.18 140.539H11.84c-1.41 0-2.57 1.16-2.57 2.57v2.57c0 1.42 1.16 2.57 2.57 2.57h159.34c1.41 0 2.57-1.16 2.57-2.57v-2.57c0-1.42-1.16-2.57-2.57-2.57z"
            fill="#6B7BAA"></path>
        </svg>
      </div>
      <div className="description">
        <span>Find your happiness with highly-personalized predictions</span>
      </div>
      <div className="button">
        <button onClick={() => navigate("/gender")}>Let's Begin</button>
      </div>
      <div className="terms">
        <p className="term1">
          By continuing, you agree to our <u>EULA</u> and <u>Privacy Notice</u>. Have a question?
          Reach our support team <u>here</u>.
        </p>
        <p className="term2">
          This Palm Reading App is for entertainment purposes only and will not make death
          predictions
        </p>
      </div>
    </motion.div>
  );
};

export default Welcome;
