import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';

import { employeesData } from '../../data';


// Este código permite a los usuarios registrados gestionar los datos de una lista de pokemones, añadiendo, 
//editando y seleccionando pokemones.
 const Dashboard = ({ setIsAuthenticated }) => {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  //obtencion de los datos almacenados en el almacenamiento local para establecer pokemones.
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('employees_data'));
    if (data !== null && Object.keys(data).length !== 0) setEmployees(data);
  }, []);

  //edicion de la información de un pokemon almacenado en base de datos.
  const handleEdit = id => {
    const [employee] = employees.filter(employee => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  //eliminación de un elemento usando una ventana emergente de confirmación
  
  const handleDelete = id => {
    Swal.fire({
      icon: 'Advertencia',
      title: '¿Estas seguro?',
      text: "¡No podrás revertir esto!",
      showCancelButton: true,
      confirmButtonText: 'si, eliminalo',
      cancelButtonText: 'No, cancelalo!',
    }).then(result => {

      // eliminar un pokemon de la lista 
      if (result.value) {
        const [employee] = employees.filter(employee => employee.id === id);

        Swal.fire({
          icon: 'exito',
          title: 'borrado!',
          text: `${employee.firstName} ${employee.lastName}'los datos han sido borrados`,
          showConfirmButton: false,
          timer: 1500,
        });

        const employeesCopy = employees.filter(employee => employee.id !== id);
        localStorage.setItem('employees_data', JSON.stringify(employeesCopy));
        setEmployees(employeesCopy);
      }
    });
  };

  // agregar, editar y eliminar información de pokemon.
  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
