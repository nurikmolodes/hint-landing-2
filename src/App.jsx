import { useEffect, useState } from "react";
import "./App.css";
import Introduction from "./pages/Introduction/Introduction";
import Welcome from "./pages/Welcome/Welcome";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Gender from "./pages/Gender/Gender";
import Header from "./components/Header/Header";
import Progress from "./components/Progress/Progress";
import { AnimatePresence } from "framer-motion";
import Birthday from "./pages/Birthday/Birthday";
import PalmsHold from "./pages/PalmsHold/PalmsHold";
import Wish from "./pages/Wish/Wish";
import Relationship from "./pages/Relationship/Relationship";
import Resonate from "./pages/Resonate/Resonate";
import Color from "./pages/Color/Color";
import Decisions from "./pages/Decisions/Decisions";
import Guidance from "./pages/Guidance/Guidance";
import Scan from "./pages/Scan/Scan";
import ScanInfo from "./pages/ScanInfo/ScanInfo";
import PageTransition from "./pages/PageTransition";
import Analyze from "./pages/Analyze/Analyze";
import Email from "./pages/Email/Email";
import Plan from "./pages/Plan/Plan";
import Paywall from "./pages/Paywall/Paywall";

function App() {
  const [showIntroduction, setShowIntroduction] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const footerRoutes = [
    "/gender",
    "/birthday",
    "/palms-hold",
    "/wish",
    "/relationship",
    "/resonate",
    "/color",
    "/decisions",
    "/guidance",
  ];
  const shouldDisplayNavbar = footerRoutes.includes(location.pathname);
  useEffect(() => {
    // localStorage.setItem("currentPage", location.pathname);
    setTimeout(() => {
      setShowIntroduction(false);
      const currentPage = localStorage.getItem("currentPage");
      if (currentPage) {
        navigate(currentPage);
      } else {
        navigate("/welcome");
      }
    }, 2000);
  }, []);
  // IMAGE PALM
  const [imgSrc, setImgSrc] = useState(null); // initialize it
  return (
    <div className="app">
      {showIntroduction ? (
        <Introduction />
      ) : (
        <div className="pages">
          <Header />
          {shouldDisplayNavbar && <Progress />}
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route
                path="/welcome"
                element={
                  <PageTransition>
                    <Welcome />
                  </PageTransition>
                }
              />
              <Route
                path="/gender"
                element={
                  <PageTransition>
                    <Gender />
                  </PageTransition>
                }
              />
              <Route
                path="/birthday"
                element={
                  <PageTransition>
                    <Birthday />
                  </PageTransition>
                }
              />
              <Route
                path="/palms-hold"
                element={
                  <PageTransition>
                    <PalmsHold />
                  </PageTransition>
                }
              />
              <Route
                path="/wish"
                element={
                  <PageTransition>
                    <Wish />
                  </PageTransition>
                }
              />
              <Route
                path="/relationship"
                element={
                  <PageTransition>
                    <Relationship />
                  </PageTransition>
                }
              />
              <Route
                path="/resonate"
                element={
                  <PageTransition>
                    <Resonate />
                  </PageTransition>
                }
              />
              <Route
                path="/color"
                element={
                  <PageTransition>
                    <Color />
                  </PageTransition>
                }
              />
              <Route
                path="/decisions"
                element={
                  <PageTransition>
                    <Decisions />
                  </PageTransition>
                }
              />
              <Route
                path="/guidance"
                element={
                  <PageTransition>
                    <Guidance />
                  </PageTransition>
                }
              />
              <Route
                path="/scan"
                element={
                  <PageTransition>
                    <Scan />
                  </PageTransition>
                }
              />
              <Route
                path="/scan-info"
                element={
                  <PageTransition>
                    <ScanInfo imgSrc={imgSrc} setImgSrc={setImgSrc} />
                  </PageTransition>
                }
              />
              <Route
                path="/analyze"
                element={
                  <PageTransition>
                    <Analyze imgSrc={imgSrc} />
                  </PageTransition>
                }
              />
              <Route
                path="/email"
                element={
                  <PageTransition>
                    <Email />
                  </PageTransition>
                }
              />
              <Route
                path="/plan"
                element={
                  <PageTransition>
                    <Plan />
                  </PageTransition>
                }
              />
              <Route
                path="/paywall"
                element={
                  <PageTransition>
                    <Paywall />
                  </PageTransition>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

export default App;
