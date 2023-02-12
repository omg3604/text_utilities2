import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); //tells whether dark mode is enabled or not.

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#3a3b3a';
      showAlert("success", "Dark mode has been enabled.")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("success", "Light mode has been enabled.")
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  return (
    <Router>
      <div>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-4'>
          <Routes>
            <Route path='/' element={<TextForm mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>}></Route>
            <Route path='/about' element={<About mode={mode} toggleMode={toggleMode} />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
