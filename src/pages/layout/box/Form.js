import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'moment';

// Actions
import {
  getBillById,
  createBill,
  updateBill,
  deleteBill
} from '../../../actions/billActions';

// Components
import Inputs from './form/Inputs';
import Buttons from './form/Buttons';

// Redux dipstach to component props
const mapDispatchToProps = dispatch => {
  return {
    getBillById: id => dispatch(getBillById(id)),
    createBill: bill => dispatch(createBill(bill)),
    updateBill: bill => dispatch(updateBill(bill)),
    deleteBill: _id => dispatch(deleteBill(_id))
  };
};

const mapStateToProps = state => {
  return {
    bill: state.billReducer.bill
  };
};

class Form extends Component {
  constructor() {
    super();

    this.state = {
      _id: '',
      title: '',
      amount: '',
      details: '',
      remember_me_date: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { bill } = this.props;

    if (id) {
      if (bill && bill._id === id) {
        this.fillInputWithBill(bill);
      } else {
        this.props.getBillById(id);
      }
    }
  }

  componentDidUpdate() {
    const { id } = this.props.match.params;
    const { bill } = this.props;

    if (id) {
      if (bill && bill._id === id && this.state._id === '') {
        this.fillInputWithBill(bill);
      }
    }
  }

  fillInputWithBill(bill) {
    bill.remember_me_date = Moment.utc(bill.remember_me_date).format('YYYY-MM-DD');
    this.setState(bill);
  }

  handleDelete(id) {
    this.props.history.push('/');
    this.props.deleteBill(id);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state._id) {
      this.props.updateBill(this.state);
    } else {
      this.props.createBill(this.state);
    }

    // redirect to home page
    this.props.history.push('/');
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    let { id } = this.props.match.params;

    if (id === undefined) {
      id = null;
    }

    return (
      <Fragment>
        <h1 className="title has-text-grey-dark">{id ? 'Edit' : 'Create'} Bill</h1>
        <form onSubmit={this.handleSubmit}>
          <Inputs state={this.state} onChange={this.handleChange} />
          <Buttons deleteBill={() => this.handleDelete(id)} id={id} />
        </form>
      </Fragment>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Form)
);
