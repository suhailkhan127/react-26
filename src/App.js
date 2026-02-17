import './App.css';
import About from './components/About';
import Alert from './components/Alert';

import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm';
import React, {useState } from 'react';

// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null); //Jab state kabhi object ho sakti hai aur kabhi "kuch bhi nahi", tab "null" use hota he, React me conditional rendering ke liye use hota he : 
  // Agar alert null hai kuch render nahi hoga  →  Agar object hai alert render hoga

  const showAlert = (message, type, heading) =>{
    setAlert({
      msg: message,
      type: type,
      head: heading
    });
    setTimeout(() =>{
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743'
      document.body.style.color= '#fff'
      showAlert("Dark Mode has been enabled!", "success", "Dark Mode")
      document.title = 'Dark Mode Accessing'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= '#fff';
      document.body.style.color= '#333'
      showAlert("Light Mode has been enabled!", "warning", "Light Mode")
      document.title = 'Light Mode Accessing'
    }
  }

  return (
      <>
        <div className="App">          
          <Navbar homeNavlink="About" title="React Site" applyMode={mode} toggleMode={toggleMode} />
          
          <Alert alert={alert} />
          <TextForm heading="Enter the text below:" showAlert={showAlert}></TextForm>
          <About />
        </div>



      {/* <BrowserRouter>
        <div className="App">          
          <Navbar homeNavlink="About" title="React Site" applyMode={mode} toggleMode={toggleMode} />
          
          <Alert alert={alert} />
        </div>

         "exact" will help to get correct url  
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/textform" element={<TextForm heading="Enter the text below:" showAlert={showAlert}></TextForm>} />
          
        </Routes>
      </BrowserRouter> */}

      </>
  );
}

export default App;
