import React, { useContext, useState } from 'react';
import EmployeeContext from './EmployeeContext'; 
import './Employeelist.css';
import profilePic from './assets/Custom_profile_picture.webp';

const EmployeeList = () => {
    const { employees, deleteEmployee, updateEmployee } = useContext(EmployeeContext);
    const [editingEmployee, setEditingEmployee] = useState(null);

    const handleEditChange = (e, field) => {
        setEditingEmployee({ ...editingEmployee, [field]: e.target.value });
    };

    const saveEdit = () => {
        if (editingEmployee) {
            
            const updatedEmployee = {
                ...editingEmployee,
                course: typeof editingEmployee.course === 'string' ?
                    editingEmployee.course.split(',').map(course => course.trim()) :
                    editingEmployee.course,
            };
            updateEmployee(updatedEmployee);
            setEditingEmployee(null); 
        }
    };

    return (
        <>
            <div className="employee-list">
                <h2>Employee List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile No</th>
                            <th>Designation</th>
                            <th>Gender</th>
                            <th>Course</th>
                            <th>Create Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={profilePic} alt="Employee" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                                </td>
                                {editingEmployee && editingEmployee.email === employee.email ? (
                                    <>
                                        <td><input type="text" value={editingEmployee.name} onChange={(e) => handleEditChange(e, 'name')} /></td>
                                        <td><input type="text" value={editingEmployee.email} onChange={(e) => handleEditChange(e, 'email')} /></td>
                                        <td><input type="text" value={editingEmployee.mobile} onChange={(e) => handleEditChange(e, 'mobile')} /></td>
                                        <td><input type="text" value={editingEmployee.department} onChange={(e) => handleEditChange(e, 'department')} /></td>
                                        <td><input type="text" value={editingEmployee.gender} onChange={(e) => handleEditChange(e, 'gender')} /></td>
                                        <td><input type="text" value={editingEmployee.course ? editingEmployee.course : ''} onChange={(e) => handleEditChange(e, 'course')} /></td>
                                        <td><input type="text" value={editingEmployee.createDate} onChange={(e) => handleEditChange(e, 'createDate')} /></td>
                                    </>
                                ) : (
                                    <>
                                        <td>{employee.name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.mobile}</td>
                                        <td>{employee.department}</td>
                                        <td>{employee.gender}</td>
                                        <td>{employee.course && Array.isArray(employee.course) ? employee.course.join(', ') : 'N/A'}</td>
                                        <td>{employee.createDate}</td>
                                    </>
                                )}
                                <td>
                                    {editingEmployee && editingEmployee.email === employee.email ? (
                                        <button onClick={saveEdit}>Save</button>
                                    ) : (
                                        <>
                                            <button onClick={() => setEditingEmployee(employee)}>Edit</button>
                                            <button onClick={() => deleteEmployee(employee.email)}>Delete</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default EmployeeList;
