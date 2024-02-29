import React, { useState, useContext } from 'react';
import './Form.css';
import EmployeeContext from './EmployeeContext';

const Form = () => {
  const { addEmployee, designations, setDesignations } = useContext(EmployeeContext);
  const [newDesignation, setNewDesignation] = useState('');
  const [employeeData, setEmployeeData] = useState({
    name: '',
    email: '',
    mobile: '',
    department: '',
  });

  const handleAddDesignation = (e) => {
    e.preventDefault();
    if (newDesignation && !designations.includes(newDesignation)) {
      setDesignations([...designations, newDesignation]);
      setNewDesignation('');
    }
  };

  const handleDeleteDesignation = (designationToDelete) => {
    setDesignations(designations.filter((designation) => designation !== designationToDelete));
    if (employeeData.department === designationToDelete) {
      setEmployeeData({...employeeData, department: ''});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employeeData);
    setEmployeeData({
      name: '',
      email: '',
      mobile: '',
      department: '',
    }); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Create Employee</h2>
    
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={employeeData.name} onChange={handleChange} placeholder="Enter name" />
        </div>
      
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={employeeData.email} onChange={handleChange} placeholder="Enter email" />
        </div>
     
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input type="tel" id="mobile" name="mobile" value={employeeData.mobile} onChange={handleChange} placeholder="Enter mobile number" />
        </div>
        
        <div className="form-group">
          <label htmlFor="department">Designation:</label>
          <select id="department" name="department" value={employeeData.department} onChange={handleChange} style={{ color: 'black' }}>
            <option value="">Select Designation</option>
            {designations.map((designation, index) => (
              <option key={index} value={designation}>
                {designation}
              </option>
            ))}
          </select>
          <input type="text" value={newDesignation} onChange={(e) => setNewDesignation(e.target.value)} placeholder="New Designation" />
          <button onClick={handleAddDesignation}>Add Designation</button>
        </div>
        
        <div className="form-group">
          <label>Manage Designations:</label>
          <ul>
            {designations.map((designation, index) => (
              <li key={index}>
                {designation} <button type="button" onClick={() => handleDeleteDesignation(designation)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
