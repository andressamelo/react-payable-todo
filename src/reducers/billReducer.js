import {
  ADD_BILL,
  GET_BILLS,
  DELETE_BILL,
  UPDATE_BILL,
  LOADING,
  GET_BILL,
  FILTER_COMPLETED_BILLS
} from '../actions/actionTypes';
import initialState from './initialState';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BILL:
      const { bill } = action.payload;

      return {
        ...state,
        bills: [...state.bills, bill],
        loading: { active: false }
      };

    case GET_BILLS:
      return {
        ...state,
        bills: [...action.payload.bills],
        loading: { active: false }
      };

    case GET_BILL:
      return { ...state, bill: { ...action.payload.bill }, loading: { active: false } };

    case DELETE_BILL:
      return {
        ...state,
        bills: state.bills.filter(bill => bill._id !== action.payload.id),
        loading: { active: false }
      };

    case UPDATE_BILL:
      const updatedBills = state.bills.map(bill => {
        if (bill._id === action.payload._id) {
          return { ...bill, ...action.payload };
        }
        return bill;
      });

      return {
        ...state,
        bills: [...updatedBills],
        bill: { ...action.payload },
        loading: { active: false }
      };

    case LOADING:
      return {
        ...state,
        loading: {
          active: true,
          text: action.payload.text
        }
      };

    case FILTER_COMPLETED_BILLS:
      return {
        ...state,
        filterCompleted: {
          active: action.payload.active
        }
      };

    default:
      return state;
  }
};

export default rootReducer;
