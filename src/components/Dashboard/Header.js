import React from 'react';

import Logout from '../Logout';

//Esta función se encarga de mostrar en pantalla título y botones.
const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
      <h1>Lista pokemones</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={() => setIsAdding(true)}>Añadir pokemon</button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

export default Header;
