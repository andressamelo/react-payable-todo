import React, { Fragment } from 'react';
import { connect } from 'react-redux';

// Actions
import { updateBill } from '../../../../../actions/billActions';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Redux dispatch to component props
const mapDispatchToProps = dispatch => {
    return {
        updateBill: bill => dispatch(updateBill(bill))
    }
}

const DoneButton = ({ bill, updateBill }) => {
    const changeCompletedAttibute = (e, bill) => {
        e.preventDefault();

        bill.completed = !bill.completed;
        updateBill(bill);
    }

    return (
        <Fragment>
            <span className="icon is-primary">
                <a onClick={(e) => changeCompletedAttibute(e, bill)}>
                    <FontAwesomeIcon icon={
                        ['far', bill.completed ? 'check-circle' : 'circle']
                    } />
                </a>
            </span>
        </Fragment>
    );
};

export default connect(null, mapDispatchToProps)(DoneButton);