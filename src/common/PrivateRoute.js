// import React from 'react';
// import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types';

// const RouteWithLayout = props => {
//   const { layout: Layout, component: Component, ...rest } = props;

//   return (
//     <Route
//       {...rest}
//       render={matchProps => (
//         <Layout>
//           <Component {...matchProps} />
//         </Layout>
//       )}
//     />
//   );
// };

// RouteWithLayout.propTypes = {
//   component: PropTypes.any.isRequired,
//   layout: PropTypes.any.isRequired,
//   path: PropTypes.string
// };

// export default RouteWithLayout;

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ layout: Layout, component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            <Layout>
                {auth.isAuthenticate === true ? (
                    <Component {...props} />
                ) : (
                        <Redirect to="/login" />
                    )}
            </Layout>
        }
    />
);

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, {})(PrivateRoute);