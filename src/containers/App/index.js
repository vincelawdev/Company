import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyData, getEmployeesData } from './actions';
import Header from '../../components/Header';

const App = () => {
  const {
    loading, error, // companyInfo, employees,
  } = useSelector((state) => ({
    loading: state.global.loading,
    error: state.global.error,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyData());
    dispatch(getEmployeesData());
  }, [dispatch]);

  return (
    <Header>
      Loading: {loading}<br />
      Error: {error}<br />
    </Header>
  );
};

export default App;
