/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const EmployeeRow = styled.div`
  margin: 0 15px 20px 15px;
  flex: 1 0 calc(33.333333% - 30px);
  box-sizing: border-box;
  border: 1px solid black;
`;

const EmployeeCard = (props) => {
  const { firstName, lastName } = props.employee;

  return (
    <EmployeeRow>
      {firstName} {lastName}
    </EmployeeRow>
  );
};

EmployeeCard.propTypes = {
  employee: PropTypes.object.isRequired,
};

export default EmployeeCard;
