import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import * as Page from './components/Pages';

function App() {
 
  return (
    <div className="App">
      <div className="App-container">
      <Router>
        
        <Switch>
        <Route path="/" exact component={Page.Signup}/>
        <Route path="/otp" component={Page.Otpverify}/>
        <Route path="/profile" component={Page.Createprofile}/>
        <Route path="/sharelink" component={Page.QRConnect}/>
        <Route path="/qrscan" component={Page.QRScan}/>
        <Route path="/chatbox" component={Page.ChatBox}/>
        </Switch>
        <Route/>
      </Router>
      </div>
     
    </div>
  );
}

export default App;
