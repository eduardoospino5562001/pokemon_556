import React, { useState, useEffect } from 'react'; //importacion de librerias

import Login from '../Login'; //haciendo llamado de login
import Dashboard from '../Dashboard'; // haciendo llamado de el dashboard


// verificacion si el usuario esta autenticado
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
  }, []);

  //comprobacion si el usuario esta autenticado
  return (
    <>
      {isAuthenticated ? (
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
};

export default App;
