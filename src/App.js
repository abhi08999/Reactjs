
import { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import {BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  const [mode ,setMode] = useState('light');//state whether dark mode is enable or not
  const [alert ,setAlert] = useState(null);//state to set alert

  const showAlert=(message,type)=>{
   setAlert({  //now alert is object
     msg:message,
     type:type
   })
   setTimeout(()=>{
     setAlert(null);
   },1500); 
  }
 const ToggleMode=()=>{
if(mode==='light'){
  setMode('dark');
  document.body.style.backgroundColor ='#042743';//to enable bg color
  showAlert(" Dark mode has been Enabled","success");//calling show alert
}
else{
  setMode('light');
  document.body.style.backgroundColor ='white';
  showAlert(" light mode has been Enabled","success");//calling show alert
}
  } 
  return (
  <>
 <Router>
 <Navbar title='Textutil' about="Home" mode={mode} ToggleMode={ToggleMode}/>
 <Alerts alert={alert}/>
 <div className="container my-3">
   <Switch>
      <Route path="/about"><About/>
      </Route>
      <Route path="/">
        <Textform  showAlert={showAlert} heading="Enter the Text Below" mode={mode}/>
      </Route>
   </Switch>
 </div>
 </Router>
 </>
  );
}

export default App;
