import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const EmployeesContainer = styled.section`
    display: flex;
`;

const Employees = () => {
  const {
    loading, error, employees,
  } = useSelector((state) => ({
    loading: state.global.loading,
    error: state.global.error,
    employees: state.global.employees,
  }));

  const renderEmployees = () => {
    // display loading message
    if (loading && error === null) {
      return 'Loading...';
    }

    // display employees only after it has loaded without errors
    if (!loading && error === null && Array.isArray(employees) && employees.length > 0) {
      return employees.map((employee) => (
        <div key={employee.id}>{employee.firstName}</div>
      ));
    }

    return null;
  };

  return (
    <EmployeesContainer>
      {renderEmployees()}
    </EmployeesContainer>
  );
};

export default Employees;
