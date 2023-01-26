import React from 'react';
import Swal from 'sweetalert2';

//Este código proporciona una forma de cerrar sesión de manera segura para el usuario.
const Logout = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    Swal.fire({
      icon: 'pregunta',
      title: 'Saliendo de tu cuenta',
      text: '¿Estás seguro de que quieres cerrar sesión?',
      showCancelButton: true,
      confirmButtonText: 'Si',
    }).then(result => {
      if (result.value) {
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            localStorage.setItem('is_authenticated', false);
            setIsAuthenticated(false);
          },
        });
      }
    });
  };

  //Este código crea un botón para cerrar la sesión del usuario.
  return (
    <button
      style={{ marginLeft: '12px' }}
      className="muted-button"
      onClick={handleLogout}
    >
      Cerrar sesión
    </button>
  );
};

export default Logout;
