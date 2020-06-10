import React, {useState, useEffect} from 'react';
import './App.css';
import Sitebar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import ReserveIndex from './Reserve/ReserveIndex';

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
    return(sessionToken === localStorage.getItem('token') ? <ReserveIndex token={sessionToken} /> : <Auth updateToken={updateToken} />)
  }


  return (
    <div className="App">
      <Sitebar clickLogout={clearToken} />
      {protectedViews()}

    </div>
  );
}

export default App;
