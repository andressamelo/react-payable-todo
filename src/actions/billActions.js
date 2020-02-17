import axios from 'axios';
import { bills } from './bills';
import {
  ADD_BILL,
  DELETE_BILL,
  GET_BILLS,
  GET_BILL,
  UPDATE_BILL,
  LOADING,
  FILTER_COMPLETED_BILLS
} from './actionTypes';

const { REACT_APP_NODE_ENV } = process.env;
const isStatic = REACT_APP_NODE_ENV === 'static';
const apiUrl = 'http://localhost:3001/api/bills';

export function createBill({ title, amount, details, conclusion_date, remember_me_date }) {
  return dispatch => {
    dispatch(loading('Creating Bill'));
    if (isStatic) {
      let bill = { title, amount, details, conclusion_date, remember_me_date };
      return dispatch(createBillSuccess(bill));
    }

    return axios
      .post(`${apiUrl}`, { title, amount, details, conclusion_date, remember_me_date })
      .then(res => {
        console.log(res.data);
        dispatch(createBillSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  };
}

export function createBillSuccess(bill) {
  return {
    type: ADD_BILL,
    payload: {
      bill
    }
  };
}

export function deleteBill(id) {
  return dispatch => {
    dispatch(loading('Deleting bill'));

    if (isStatic) {
      return dispatch(deleteBillSuccess(id));
    }

    return axios
      .delete(`${apiUrl}/${id}`)
      .then(res => {
        dispatch(deleteBillSuccess(res.data));
      })
      .catch(err => {
        throw err;
      });
  };
}

export function deleteBillSuccess(id) {
  return {
    type: DELETE_BILL,
    payload: {
      id
    }
  };
}

export function updateBill({
  _id,
  title,
  amount,
  completed,
  details,
  conclusion_date,
  remember_me_date
}) {
  return dispatch => {
    dispatch(loading('Updating Bill'));

    if (isStatic) {
      let bill = {
        _id,
        title,
        amount,
        completed,
        details,
        conclusion_date,
        remember_me_date
      };
      return dispatch(updateBillSuccess(bill));
    }

    return axios
      .put(`${apiUrl}/${_id}`, {
        _id,
        title,
        amount,
        completed,
        details,
        conclusion_date,
        remember_me_date
      })
      .then(res => {
        dispatch(updateBillSuccess(res.data));
      })
      .catch(err => {
        throw err;
      });
  };
}

export function updateBillSuccess(data) {
  return {
    type: UPDATE_BILL,
    payload: {
      _id: data._id,
      title: data.title,
      amount: data.amount,
      details: data.details,
      conclusion_date: data.conclusion_date,
      remember_me_date: data.remember_me_date
    }
  };
}

export function getAllBills() {
  return dispatch => {
    dispatch(loading('Synching bills'));

    if (isStatic) {
      return dispatch(getAllBillsSuccess(bills));
    }

    return axios
      .get(apiUrl)
      .then(res => {
        dispatch(getAllBillsSuccess(res.data));
      })
      .catch(err => {
        throw err;
      });
  };
}

export function getAllBillsSuccess(bills) {
  return {
    type: GET_BILLS,
    payload: {
      bills
    }
  };
}

export function getBillById(id) {
  return dispatch => {
    dispatch(loading('Retrieving bill'));

    if (isStatic) {
      let bill = bills.filter(bill => bill._id === id);
      return dispatch(getBillByIdSuccess(bill[0]));
    }

    return axios
      .get(`${apiUrl}/${id}`)
      .then(res => {
        dispatch(getBillByIdSuccess(res.data));
      })
      .catch(err => {
        throw err;
      });
  };
}

export function getBillByIdSuccess(bill) {
  return {
    type: GET_BILL,
    payload: {
      bill
    }
  };
}

export function loading(text = 'Loading') {
  return {
    type: LOADING,
    payload: {
      text
    }
  };
}

export function filterCompletedBills(active) {
  return {
    type: FILTER_COMPLETED_BILLS,
    payload: {
      active
    }
  };
}
