import React, { Component } from "react";
import { connect } from 'react-redux';

import Header from "../components/Header";

class AppointmentById extends Component {
  componentDidMount() {
  }

  render() {    
    return (
      <div>
        <Header />
        <div className="">
          <h1>Appointment by id page</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
   
  };
};

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentById);
