import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import EmployeeCardBio from './EmployeeCardBio';

const EmployeeContainer = styled.div`
  margin: 0 15px 20px 15px;
  flex: 1 0 calc(100% - 30px);
  box-sizing: border-box;
  border: 1px solid black;

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    flex-basis: calc(33.333333% - 30px);
  }
`;

const EmployeeAvatar = styled.img`
  width: 128px;
  height: 128px;
  margin: 0 15px 0 0;
  float: left;
`;

const EmployeeName = styled.div`
  padding: 15px 15px 0 0;
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
`;

const EmployeeCard = (props) => {
  const {
    firstName,
    lastName,
    avatar,
    bio,
  } = props.employee;

  const fallbackAvatar = (event) => {
    // eslint-disable-next-line no-param-reassign
    event.target.src = 'https://via.placeholder.com/128';
  };

  return (
    <EmployeeContainer>
      <EmployeeAvatar src={avatar} onError={fallbackAvatar} alt="{firstName} {lastName}" />
      <EmployeeName>{firstName} {lastName}</EmployeeName>
      <EmployeeCardBio bio={bio} />
    </EmployeeContainer>
  );
};

EmployeeCard.propTypes = {
  employee: PropTypes.object.isRequired,
};

export default EmployeeCard;
