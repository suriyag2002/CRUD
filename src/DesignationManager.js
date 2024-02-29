import React, { useState } from 'react';

const DesignationManager = ({ onDesignationsChange }) => {
  const [designations, setDesignations] = useState(['HR', 'Manager', 'Sales']);
  const [newDesignation, setNewDesignation] = useState('');

  const handleAddDesignation = () => {
    if (newDesignation && !designations.includes(newDesignation)) {
      const updatedDesignations = [...designations, newDesignation];
      setDesignations(updatedDesignations);
      onDesignationsChange(updatedDesignations); 
      setNewDesignation('');
    }
  };

  const handleDeleteDesignation = (designationToDelete) => {
    const updatedDesignations = designations.filter(d => d !== designationToDelete);
    setDesignations(updatedDesignations);
    onDesignationsChange(updatedDesignations); 
  };

  return (
    <div>
      <input
        type="text"
        value={newDesignation}
        onChange={(e) => setNewDesignation(e.target.value)}
        placeholder="New Designation"
      />
      <button onClick={handleAddDesignation}>Add</button>
      <ul>
        {designations.map((designation, index) => (
          <li key={index}>
            {designation} <button onClick={() => handleDeleteDesignation(designation)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesignationManager;
