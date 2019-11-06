import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { resetSelectedEmployee } from '../../containers/App/actions';

const EmployeeLightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.active ? 'block' : 'none')};
  background-color: rgb(255,255,255, 0.75);
`;

const EmployeeLightboxContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 90%;
  height: 50%;
  margin: auto;
  background-color: white;
  border: 1px solid black;

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    width: 50%;
    height: 50%;
    min-height: 250px;
  }
`;

const EmployeeLightboxClose = styled.div`
  position: absolute;
  top: -40px;
  right: 0;
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
    display: block;
    fill: black;    
  }
`;

const EmployeeLightbox = () => {
  const selectedEmployee = useSelector((state) => state.global.selectedEmployee);
  const dispatch = useDispatch();

  return (
    <EmployeeLightboxOverlay active={selectedEmployee !== null}>
      <EmployeeLightboxContent>
        <EmployeeLightboxClose onClick={() => dispatch(resetSelectedEmployee())}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </EmployeeLightboxClose>
      </EmployeeLightboxContent>
    </EmployeeLightboxOverlay>
  );
};

export default EmployeeLightbox;
