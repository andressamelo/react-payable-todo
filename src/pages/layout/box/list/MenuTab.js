import React from 'react';
import { connect } from 'react-redux';

// Actions
import { filterCompletedBills } from '../../../../actions/billActions';

// Components
import Tab from './menuTab/Tab';

// Redux state to component props
const mapStateToProps = state => {
    return {
        bills: state.billReducer.bills,
        filterCompleted: state.billReducer.filterCompleted
    };
};

// Redux dispatach to component props
const mapDispatchToProps = dispatch => {
    return {
        applyFilter: (active) => dispatch(filterCompletedBills(active)),
    }
}

const MenuTab = ({ bills, filterCompleted, applyFilter }) => {
    const numberOfCompletedBills = bills
        .filter(bill => bill.completed).length;

    return (
        <div className="tabs is-fullwidth has-text-weight-bold">
            <ul>
                <Tab
                    text="Payable"
                    quantity={(bills.length - numberOfCompletedBills)}
                    className={filterCompleted.active ? '' : 'is-active'}
                    onClick={() => applyFilter(false)}
                />

                <Tab
                    text="Paid"
                    quantity={numberOfCompletedBills}
                    className={filterCompleted.active ? 'is-active' : ''}
                    onClick={() => applyFilter(true)}
                />
            </ul>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuTab);