import React, {useState, useEffect} from 'react';
import './App.css';
import Sitebar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import ReserveIndex from './Reserve/ReserveIndex';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return(sessionToken === localStorage.getItem('token') ? <Home token={sessionToken} /> : <Auth updateToken={updateToken}/>)
  }
  const protectedViews2 = () => {
    return(sessionToken === localStorage.getItem('token') ? <ReserveIndex token={sessionToken} /> : <Auth updateToken={updateToken}/>)
  }

  // function sidebarTernary() {
  //   return localStorage.getItem('token') === null ? '' : <Sidebar />
  // }

  return (
    <div className="App">
      <Router>
        <Sitebar clickLogout={clearToken}/>
          <Sidebar protectedViews={protectedViews} 
            protectedViews2={protectedViews2} 
            token={sessionToken} 
          />
      </Router>
    </div>
  );
}

export default App;
