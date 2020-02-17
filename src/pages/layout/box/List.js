import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// Actions
import { getAllBills } from '../../../actions/billActions';

// Components
import CreateButton from '../../../components/CreateButton';
import Bill from './list/Bill';
import MenuTab from './list/MenuTab';

// Redux state to component props
const mapStateToProps = state => {
  return {
    allBills: state.billReducer.bills,
    loading: state.billReducer.loading,
    filterActive: state.billReducer.filterCompleted.active
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllBills: () => dispatch(getAllBills())
  };
};

class List extends Component {
  componentDidMount() {
    const { loading } = this.props;

    // Gets all the bills from db if it wasn't triggered before
    // if (!loading.active) {
    //   this.props.getAllBills();
    // }
  }

  render() {
    const { allBills } = this.props;
    const { loading } = this.props;
    const { filterActive } = this.props;

    let billListComponent = '';
    let bills = allBills;

    bills = bills.filter(bill => bill.completed === filterActive);

    if (!allBills.length && !loading.active) {
      billListComponent = (
        <Fragment>
          <div className="box">
            <h1>There's no bill created</h1>
          </div>
        </Fragment>
      );
    }
    else if (!bills.length && !loading.active) {
      billListComponent = (
        <Fragment>
          <div className="box">
            <h1>There's no bill here</h1>
          </div>
        </Fragment>
      );
    }
    else {
      billListComponent = (
        <Fragment>
          {bills.map(bill => (
            <Bill bill={bill} key={bill._id} />
          ))}
        </Fragment>
      );
    }

    return (
      <div>
        <MenuTab />
        <div className="is-bill-list">{billListComponent}</div>
        <CreateButton />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
