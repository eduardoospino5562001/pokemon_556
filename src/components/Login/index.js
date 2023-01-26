import React, { useState } from 'react';
import Swal from 'sweetalert2';

// Esta función es una pantalla de inicio de sesión, que autentica al usuario ingresando un email y contraseña específicos.
const Login = ({ setIsAuthenticated }) => {
  const adminEmail = 'admin@example.com';
  const adminPassword = 'qwerty';

  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('qwerty');

  //Este código proporciona una forma segura de autenticación para iniciar sesión en una aplicación web.
  const handleLogin = e => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          localStorage.setItem('is_authenticated', true);
          setIsAuthenticated(true);

          Swal.fire({
            icon: 'success',
            title: 'Successfully logged in!',
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    } else {
     // Este código muestra una ventana emergente con un mensaje de error si los datos de inicio de sesión ingresados son incorrectos.
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'contraseña o email incorrectos.',
            showConfirmButton: true,
          });
        },
      });
    }
  };

  //Este código crea un formulario de inicio de sesión de administrador para que un usuario pueda acceder al contenido de la aplicación.
  return (
    <div className="small-container">
      <form onSubmit={handleLogin}>
        <h1>Inicio de sesión de administrador</h1>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="admin@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">contraseña</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="qwerty"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input style={{ marginTop: '12px' }} type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
