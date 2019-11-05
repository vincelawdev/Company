/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const EmployeeContainer = styled.div`
  margin: 0 15px 20px 15px;
  flex: 1 0 calc(33.333333% - 30px);
  box-sizing: border-box;
  border: 1px solid black;
`;

const EmployeeAvatar = styled.img`
    width: 128px;
    height: 128px;
    margin: 0 15px 0 0;
    float: left;
`;

const EmployeeCard = (props) => {
  const { firstName, lastName, avatar } = props.employee;

  const fallbackAvatar = (ev) => {
    // eslint-disable-next-line no-param-reassign
    ev.target.src = 'https://via.placeholder.com/128';
  };

  return (
    <EmployeeContainer>
      <EmployeeAvatar src={avatar} onError={fallbackAvatar} alt="{firstName} {lastName}" />
      {firstName} {lastName}
    </EmployeeContainer>
  );
};

EmployeeCard.propTypes = {
  employee: PropTypes.object.isRequired,
};

export default EmployeeCard;
