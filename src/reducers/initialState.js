import { bills } from '../actions/bills';

const { REACT_APP_NODE_ENV } = process.env;
const isStatic = REACT_APP_NODE_ENV === 'static';

const initialState = {
  bills: isStatic ? bills : [],
  bill: null,
  loading: {
    active: false,
    text: ''
  },
  filterCompleted: {
    active: false,
    filteredBills: []
  }
};

export default initialState;
