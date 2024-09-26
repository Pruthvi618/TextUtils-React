import React from "react";
import "./App.css";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [swichText, setSwichText] = useState("Enable dark mode");
  const [switchColor, setSwitchColor] = useState("black");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setSwichText("Enable light mode");
      setSwitchColor("white");
      document.body.style.backgroundColor = "#001F3F";
      showAlert("Dark mode is enabled ", "success");
    } else {
      setMode("light");
      setSwichText("Enable dark mode");
      setSwitchColor("black");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };

 


  return (
    <>
      {/* <Router> */}
        <Navbar 
          title="TextUtil Band"
          about="About TextUtils"
          mode={mode}
          toggleMode ={toggleMode}
          switchText={swichText}
          switchColor={switchColor}
        />
        {/* when ever we use path we should provide exact path ( exact path) because  if we dont use exact path then it will be treated as a sub path */}
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About heading="About us" />} />   */}
            {/* <Route exact path="/" element={} /> */}
            <TextForm heading="Enter the Text to Analyze" mode={mode} showAlert={showAlert} />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
