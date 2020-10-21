import React, { Component } from "react";
import { connect } from 'react-redux';

import Header from "../components/Header";

class Profile extends Component {
  componentDidMount() {
  }

  render() {    
    return (
      <div>
        <Header />
        <div className="">
          <h1>Appointments page</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.userProfile
  };
};

const mapDispatchToProps = dispatch => {
    return {
        getProfile: (userId) => dispatch(getProfile(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
