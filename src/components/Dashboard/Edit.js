import React, { useState } from 'react';
import Swal from 'sweetalert2';

//Esta función permite editar los datos de un pokemon seleccionado.
const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {

  //obtencion el ID de pokemon seleccionado.
  const id = selectedEmployee.id;

  //Creacion de dos estados para almacenar nombre y poder de un pokemon 
  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
   
  // manejo la actualización de datos en una aplicación.
  const handleUpdate = e => {
    e.preventDefault();

    //compruebacion si los campos de nombre y poder están vacíos y muestra un mensaje de error si es así.
    if (!firstName || !lastName ) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Todos los campos son obligatorios.',
        showConfirmButton: true,
      });
    }

    //Este código crea un objeto de pokemon con sus propiedades de identificación.
    const employee = {
      id,
      firstName,
      lastName,
       
    };

    //Este código reemplaza un pokemon específico en una matriz de pokemones 
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    //Este código guarda los datos de los pokemones en el almacenamiento local y 
    //actualiza los datos.
    localStorage.setItem('employees_data', JSON.stringify(employees));
    setEmployees(employees);
    setIsEditing(false);

    //Esta parte muestra que los datos se guardaron.
    Swal.fire({
      icon: 'Éxito',
      title: 'Guardar!',
      text: `${employee.firstName} ${employee.lastName}'Los datos han sido guardados`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (

/*     Esta parte actuliza los datos de pokemon*/
      <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Editar pokemon</h1>
        <label htmlFor="firstName">Nombre</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />


        <label htmlFor="lastName">Poder</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />


        <label htmlFor="lastName">Poder</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
{/*          Genera botones para actualizar o cancelar una edición  */}
           <div style={{ marginTop: '30px' }}>
           <input type="submit" value="Update" />
           <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
