import React from 'react';
import { connect } from 'react-redux';

// Components
import Loading from '../components/Loading';
import Box from './layout/Box';

// Redux state to component props
const mapStateToProps = state => {
    return {
        loading: state.billReducer.loading
    }
}

const Layout = ({ loading }) => {
    return (
        <section className="hero  is-medium is-dark is-bold is-fullheight">
            <div className="hero-body">
                <div className="container">
                    {loading.active ? <Loading /> : ''}
                    <div className="columns">
                        <div className="column is-half is-offset-one-quarter">
                            <Box></Box>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default connect(mapStateToProps)(Layout);