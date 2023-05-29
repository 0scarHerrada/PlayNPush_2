import React, { useState, useEffect } from 'react';
import './preAuth/Login.css';
import './postAuth/PlayNPush.css';
import PlayNPush from './postAuth/PlayNPush'
import Login from './preAuth/Login'

function App() {

  const [token, setToken] = useState('');

  useEffect(() => {

    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();

  }, []);

  return (
    <>
        { (token === '') ? <Login/> : <PlayNPush token={token} /> }
    </>
  );
}


export default App;
