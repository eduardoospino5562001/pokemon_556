import React, { useState } from 'react';
import Swal from 'sweetalert2';

// Esta función es usada para agregar empleados a la lista de empleados.
const Add = ({ employees, setEmployees, setIsAdding }) => {

   // Estos son dos estados usando useState para almacenar el nombre y el apellido del usuario.
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  // Esta función controla el evento de agregar un elemento, 
  //validando que los campos estén llenos y lanzando una alerta si no lo están.
  const handleAdd = e => {
    e.preventDefault();

    if (!firstName || !lastName ) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Todos los campos son obligatorios.',
        showConfirmButton: true,
      });
    }

    // Esta línea de código crea un objeto de empleado con una ID única.
    const id = employees.length + 1;
    const newEmployee = {
      id,
      firstName,
      lastName,
      
    };

    // Esta función guarda un nuevo empleado en el LocalStorage y actualiza el estado de la aplicación.
    employees.push(newEmployee);
    localStorage.setItem('employees_data', JSON.stringify(employees));
    setEmployees(employees);
    setIsAdding(false);

   // indicacion que los datos han sido añadidos exitosamente.
    Swal.fire({
      icon: 'Exito',
      title: 'Añadido',
      text: `${firstName} ${lastName}'Los datos han sido añadidos.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    //Esta función permite agregar un nuevo Pokemon a la lista.
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Añadir pokemon</h1>
        <label htmlFor="firstName">pokemon</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />

        {/* Esta parte de código permite al usuario ingresar un valor en un campo de texto para recibir una respuesta. */}
        <label htmlFor="lastName">Poder</label> 
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
{/*         Esta linea de código agrega un botón para cancelar la adición de un elemento y volver a la vista previa.*/}       
           <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancelar"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
