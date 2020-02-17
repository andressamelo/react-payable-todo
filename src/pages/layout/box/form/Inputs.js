import React, { Fragment } from 'react';

// Components
import TextInput from '../../../../components/TextInput';

const Inputs = ({ state, onChange }) => {
    return (
        <Fragment>
            <div className="field">
                <div className="control is-expanded is-bill-title">
                    <TextInput
                        className="is-medium"
                        placeholder='Bill Title'
                        id="title"
                        value={state.title}
                        onChange={onChange}
                        autoFocus={true}
                    />
                </div>
            </div>
            <div className="field">
                <div className="control is-expanded is-bill-title">
                    <TextInput
                        className="is-medium"
                        placeholder='Amount'
                        id="amount"
                        value={state.amount}
                        onChange={onChange}
                        autoFocus={true}
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">
                    Details
                        <span className="has-text-weight-light">
                        - Optional
                        </span>
                </label>
                <div className="control">
                    <textarea
                        className="textarea is-shadowless"
                        id="details"
                        value={state.details}
                        onChange={onChange} />
                </div>
            </div>
            <div className="field">
                <label className="label">
                    Remember me at
                        <span className="has-text-weight-light">
                        - Optional
                        </span>
                </label>
                <div className="control">
                    <input
                        className="input fit-content is-shadowless"
                        type="date"
                        id="remember_me_date"
                        value={state.remember_me_date}
                        onChange={onChange}
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default Inputs;