import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyData } from './actions';

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
  }, [dispatch]);

  return (
    <div>
      Loading: {loading}<br />
      Error: {error}<br />
    </div>
  );
};

export default App;
