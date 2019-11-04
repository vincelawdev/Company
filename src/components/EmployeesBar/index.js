import React from 'react';
import styled from 'styled-components';

const EmployeesRow = styled.section`
    display: flex;
`;

const EmployeesColumn = styled.div`
    flex-grow: 1;

    &:last-child {
        font-size: 16px;
        line-height: 16px;
        text-align: right;
    }
`;

const EmployeesHeading = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 18px;
    line-height: 20px;
    color: black;
`;

const EmployeesBar = () => (
  <EmployeesRow>
    <EmployeesColumn>
      <EmployeesHeading>Our Employees</EmployeesHeading>
    </EmployeesColumn>
    <EmployeesColumn>
            Sort by:
    </EmployeesColumn>
  </EmployeesRow>
);

export default EmployeesBar;
