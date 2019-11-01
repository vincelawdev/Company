import axios from 'axios';
import { GET_COMPANY_DATA_INIT, GET_COMPANY_DATA_SUCCESS, GET_COMPANY_DATA_ERROR } from './constants';

export function getCompanyDataInit() {
  return {
    type: GET_COMPANY_DATA_INIT,
  };
}

export function getCompanyDataSuccess(companyInfo) {
  return {
    type: GET_COMPANY_DATA_SUCCESS,
    companyInfo,
  };
}

export function getCompanyDataError(error) {
  return {
    type: GET_COMPANY_DATA_ERROR,
    error,
  };
}

export function addTodo(dispatch) {
  dispatch(getCompanyDataInit());

  axios
    .get('https://company-json.herokuapp.com/companyInfo')
    .then((response) => {
      dispatch(getCompanyDataSuccess(response.data));
    })
    .catch((error) => {
      dispatch(getCompanyDataError(error));
    });
}
