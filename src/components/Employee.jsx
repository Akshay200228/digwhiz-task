import React from 'react';
import styles from '../style';

const employees = [
  { id: 1, name: 'John Doe', designation: 'Software Engineer', contact: '1234567898', profile: 'Total responsibilty to handle Front End Work York' },
  { id: 2, name: 'Jane Smith', designation: 'UX Designer', contact: '1234567898', profile: 'Handle all .net development' },
  { id: 3, name: 'Mike Johnson', designation: 'Sales Manager', contact: '1234567898', profile: 'Create Website, Graphics etc.' },
  { id: 4, name: 'Emily Davis', designation: 'Marketing Specialist', contact: '1234567898', profile: 'Handle all .net development' },
  { id: 5, name: 'David Lee', designation: 'HR Manager', contact: '1234567898', profile: 'SEO Work' },
  { id: 6, name: 'David Lee', designation: 'HR Manager', contact: '1234567898', profile: 'SEO Work' },
];

const Employee = () => (
  <section className={`${styles.flexCenter} overflow-x-auto`}>
    <div className="w-full">
      <h1 className="text-4xl text-center mb-8">Employee details</h1>
      <div className="flex justify-center">
        <div className="overflow-x-auto">
          <table className="border-collapse border border-gray-300 mx-auto sm:mx-0">
            <thead className="bg-[#215895] text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Designation</th>
                <th className="border border-gray-300 px-4 py-2">Contact Details</th>
                <th className="border border-gray-300 px-4 py-2">Work Profile</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr
                  key={employee.id}
                  className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} ${index % 2 === 1 ? 'bg-[#DBE6F2]' : ''}`}
                >
                  <td className="border border-gray-300 px-4 py-2">{employee.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{employee.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{employee.designation}</td>
                  <td className="border border-gray-300 px-4 py-2">{employee.contact}</td>
                  <td className="border border-gray-300 px-4 py-2">{employee.profile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
);

export default Employee;
