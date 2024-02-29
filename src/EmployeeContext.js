import React, { createContext, useState } from 'react';

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);
    const [designations, setDesignations] = useState(['HR', 'Manager', 'Sales']); 

    const addEmployee = (newEmployee) => {
        setEmployees([...employees, newEmployee]);
    };

    const deleteEmployee = (email) => {
        setEmployees(employees.filter(employee => employee.email !== email));
    };

    const updateEmployee = (updatedEmployee) => {
        setEmployees(employees.map(employee => employee.email === updatedEmployee.email ? updatedEmployee : employee));
    };

    return (
        <EmployeeContext.Provider value={{ employees, addEmployee, deleteEmployee, updateEmployee, designations, setDesignations }}>
            {children}
        </EmployeeContext.Provider>
    );
};

export default EmployeeContext;
