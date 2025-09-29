// ProtectedRoute.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

class ProtectedRoute extends Component {
  render() {
    debugger;
    const { isLoggedIn, children } = this.props;

    if (!isLoggedIn) {
      // login değilse login sayfasına yönlendir
      debugger;
      return <Navigate to="/" replace />;
    }

    return children;
  }
}


function mapStateToProps(state) {
  debugger;
  return {
  
    isLoggedIn: state.authReducer1.isLoggedIn,
    user: state.authReducer1.user,
    error: state.authReducer1.error
  };
}

export default connect(mapStateToProps)(ProtectedRoute);
