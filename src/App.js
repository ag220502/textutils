import React,{useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// let name="Akshay"
function App() {
  const [mode, setDarkMode] = useState("light");
  const [btnText, setbtnText] = useState("Enable Dark Mode");
  const [alert, setalert] = useState(null);
  const showAlert=(msg,type)=>
  {
    setalert({
        msg:msg,
        type:type
    });
    setTimeout(()=>{
      setalert(null);
    },1000);
  }
  const togglemode = ()=>
  {
    if(mode === "light")
    {
      setDarkMode("dark");
      document.body.style.backgroundColor="#163a5a";
      setbtnText("Enable Light Mode");
      showAlert("Dark Mode Has Been Enabled","success");
    }
    else
    {
      setDarkMode("light");
      document.body.style.backgroundColor="white";
      setbtnText("Enable Dark Mode");
      showAlert("Light Mode Has Been Enabled","success");
    }
    
  }
  return (
    <>
     <Router>
      <Navbar title="Text Utils" mode={mode} toggle={togglemode} text={btnText}/>
      <Alert NewAlert={alert}/> 
      <div className="container my-2">

       
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
            <TextForm showAlert={showAlert} heading= "Enter Text here" mode={mode}/>
            </Route>
          </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
