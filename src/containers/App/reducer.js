import {
  GET_COMPANY_DATA_INIT, GET_COMPANY_DATA_SUCCESS, GET_COMPANY_DATA_ERROR,
  GET_EMPLOYEES_DATA_INIT, GET_EMPLOYEES_DATA_SUCCESS, GET_EMPLOYEES_DATA_ERROR,
} from './constants';

const initialState = {
  loading: false,
  error: null,
  companyInfo: {},
  employees: [],
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
  case GET_COMPANY_DATA_INIT:
    return {
      ...state,
      loading: true,
    };
  case GET_COMPANY_DATA_SUCCESS:
    return {
      ...state,
      loading: false,
      error: null,
      companyInfo: action.companyInfo,
    };
  case GET_COMPANY_DATA_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  case GET_EMPLOYEES_DATA_INIT:
    return {
      ...state,
      loading: true,
    };
  case GET_EMPLOYEES_DATA_SUCCESS:
    return {
      ...state,
      loading: false,
      employees: action.employees,
    };
  case GET_EMPLOYEES_DATA_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  default:
    return state;
  }
}
