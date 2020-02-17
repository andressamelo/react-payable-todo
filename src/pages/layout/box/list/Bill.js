import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { updateBill } from '../../../../actions/billActions';

// Components
import TextInput from '../../../../components/TextInput';
import AmountInput from '../../../../components/AmountInput';
import DoneButton from './bill/DoneButton';
import EditButton from './bill/EditButton';

// Redux dispatch to component props
const mapDispatchToProps = dispatch => {
    return {
        updateBill: bill => dispatch(updateBill(bill))
    }
}

class Bill extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            amount: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    componentDidMount() {
        const { bill } = this.props;

        if (bill) {
            this.setState(bill);
        }
    }

    componentDidUpdate() {
        const { bill } = this.props;

        if (bill && (this.state.title !== bill.title)) {
            if (!this.state.title === '') {
                this.setState(bill);
            }
        }
    }

    handleChange(event) {
        this.setState({
            title: event.target.value,
            amount: event.target.value
        });
    }

    handleBlur() {
        const { bill } = this.props;
        if (bill.title !== this.state.title) {
            bill.title = this.state.title;
            this.props.updateBill(bill);
        }
    }

    render() {
        const { bill } = this.props;

        return (
            <div className="box" key={bill._id}>
                <div className="columns is-mobile">

                    <div className="column is-1 is-centered">
                        <DoneButton bill={bill} />
                    </div>

                    <div className="column is-6">
                        <TextInput
                            id={bill._id}
                            name={'title'}
                            value={this.state.title}
                            className="is-shadowless"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                        />
                    </div>
                    <div className="column is-2">
                    <AmountInput
                            id={'amount'}
                            name={'amount'}
                            value={this.state.amount}
                            className="is-shadowless"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                        />
                    </div>
                    <div className="column is-2 is-centered" >
                        <EditButton _id={bill._id} />
                    </div>

                </div>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Bill);