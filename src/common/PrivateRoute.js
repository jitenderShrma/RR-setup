import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {compose , lifecycle } from 'recompose';
import AuthModal from '../views/User';

const PrivateRoute = ({ layout:Layout, component: Component, auth, ...rest }) => {
  const [s1, s1Change] = React.useState('initial values');
  setTimeout(() => {
    s1Change({s1: 'changed'})
  });
  return (<Route
    {...rest}
    render={props =>
      <Layout>
          {auth.isAuthenticate === true ? (
        <Component {...props} />
      ) : (
        <AuthModal s1={s1}/>
      )}
      </Layout>
    }
  />)
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
const enhancer = compose(
  connect(mapStateToProps, {})
);
export default enhancer(PrivateRoute);