import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const EmployeesBarRow = styled.section`
  padding-bottom: 8px;
  display: flex;
  border-bottom: 1px solid black;
`;

const EmployeesBarColumn = styled.div`
  flex-grow: 1;

  &:last-child {
    font-size: 14px;
    line-height: 14px;
    text-align: right;
  }
`;

const EmployeesBarHeading = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 18px;
  line-height: 18px;
  color: black;
`;

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
    <>
      <EmployeesBarRow>
        <EmployeesBarColumn>
          <EmployeesBarHeading>Our Employees</EmployeesBarHeading>
        </EmployeesBarColumn>
        <EmployeesBarColumn>Sort by | Search</EmployeesBarColumn>
      </EmployeesBarRow>
      <EmployeesContainer>
        {renderEmployees()}
      </EmployeesContainer>
    </>
  );
};

export default Employees;
