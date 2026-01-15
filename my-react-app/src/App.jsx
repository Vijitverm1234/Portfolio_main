import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Timeline from "./components/Timeline/Timeline";
import './App.css'
import { useEffect, useState } from "react";
import Analytics from "./components/Analytics/Analytics";
function App() {
  const [showPopup, setShowPopup] = useState(true);
    useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showPopup && (
        <div className="thought-popup">
          <span>Black is such a happy color 🖤</span>
          <button className="close-btn" onClick={() => setShowPopup(false)}>
            ×
          </button>
        </div>
      )}

      <Navbar></Navbar>
      <Header></Header>
      <Timeline></Timeline>
      <Analytics></Analytics>
    </>
  );
}

export default App;
