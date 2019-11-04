import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCompanyData, getEmployeesData } from './actions';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Employees from '../../components/Employees';

const App = () => {
  const dispatch = useDispatch();

  // get company and employees data
  useEffect(() => {
    dispatch(getCompanyData());
    dispatch(getEmployeesData());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container>
        <Employees />
      </Container>
    </>
  );
};

export default App;
