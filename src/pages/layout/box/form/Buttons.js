import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Buttons = ({ deleteBill, id }) => {
    let deleteBillButton =
        <button className="button is-danger" type="button" onClick={deleteBill}>
            Delete Bill
        </button>

    return (
        <Fragment>
            <div className="field">
                <div className="level">
                    <div className="level-left">
                        {id ? deleteBillButton : ''}
                    </div>
                    <div className="level-right">
                        <div className="level-item">
                            <Link to='/' className="control">
                                <button className="button is-text" type="button">
                                    Cancel
                                </button>
                            </Link>
                        </div>
                        <div className="level-item">
                            <button type="submit" className="button is-link">
                                {id ? 'Update Bill' : 'Save Bill'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Buttons;