import React, { Component } from "react";
import { connect } from 'react-redux';

import Header from "../components/Header";
import DoctorCard from "../components/DoctorCard";

import { fetchDoctors } from "../store/actions";


class Doctors extends Component {
  componentDidMount() {
    this.props.fetchDoctors();
  }

  render() {    
    const { doctors, isFetching } = this.props.doctors;
    let doctorsList;
    doctorsList = doctors.map((doctor) =>  (<DoctorCard key={doctor.id} doctor={doctor} />))

    if(isFetching) {
      return (
        <div>
         <h3>Loading...</h3>
       </div>
      )
    } else {
      return (
        <div>
          <Header />
          <div className="">
            <h1>Doctors page</h1>
              { doctorsList }
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    doctors: state.doctors
  };
};

const mapDispatchToProps = dispatch => {
    return {
      fetchDoctors: () => dispatch(fetchDoctors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Doctors);
