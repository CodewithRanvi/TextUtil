import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About'
// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState('Enable Dark mode');
  const [alert, setAlert] = useState(null);
  const [buttonColor,setButtonColor] = useState('primary');
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 5000);
  }
  const colorChange = (color,btnColor)=>{
    document.body.style.backgroundColor = mode==='light'?"white":color;
    setButtonColor(mode==='light'?"primary":btnColor);
  }
  const toggleMode = () => {
    const onModeChangeDiv = document.getElementById('onModeChange');
    if (mode === 'light') {
      setMode('dark')
      setModeText('Enable Light mode')
      colorChange("rgb(9 26 42)", buttonColor);
      document.body.style.backgroundColor = "rgb(9 26 42)"
      showAlert("Dark mode has been enabled", "Success");
      if (onModeChangeDiv) {
        onModeChangeDiv.style.display = "block"; // Show color change buttons
      }
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is amazing!";
      // }, 1500);
      // setInterval(() => {
      //   document.title = "Refer to a friend for a reward";
      // }, 2000);
    }
    else {
      setMode('light')
      setModeText('Enable Dark mode')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "Success");
      colorChange("white", "primary"); 
      if (onModeChangeDiv) {
        onModeChangeDiv.style.display = "none"; // Show color change buttons
      }
      document.title = "TextUtils-Light Mode";

    }
  }

  return (
     <>
     {/* //<BrowserRouter> */}
      <Navbar title="TextUtils"  colorChange={colorChange} mode={mode} modeText={modeText} toggleMode={toggleMode} aboutText="About TextUtils" />
      <Alert alert={alert} />
      
      {/* <Routes> */}
        {/* <Route path="/" element={<TextForm showAlert={showAlert} color={buttonColor} input="Enter your text to analyze" mode={mode}/> }/>
        <Route path="/about" element={<About/>} /> */}
         <TextForm showAlert={showAlert} color={buttonColor} input="Enter your text to analyze" mode={mode}/>
      {/* </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
