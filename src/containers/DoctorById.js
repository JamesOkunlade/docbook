import React, { Component } from "react";
import { connect } from 'react-redux';

import Header from "../components/Header";
import { fetchDoctorById } from "../store/actions";


class DoctorById extends Component {
  componentDidMount() {
    const { match: { params } } = this.props
    this.props.fetchDoctorById(params.doctorId)
  }


  render() {    
    const { doctor, isFetching } = this.props.doctor;
    // const doctors = this.props.doctors;
    // console.log(typeof(doctors))
    // const doctor = doctors.find(doctor => doctor.id == 1);

    const { id, name, info, address, license, appointments, phone, specialty_id, years_of_experience, avatar  } = doctor;
    
    return (
      <div>
        <Header />
        <div className="">
          <h1>{name}</h1>
          <img src={avatar} alt={name} />
          <p>Info: {info}</p>
          <p>Id: {id}</p>
          <p>License: {license}</p>
          <p>Phone: {phone}</p>
          <p>Specialty Id: {specialty_id}</p>
          <p>Avatar: {avatar}</p>
          <p>Years of experience: {years_of_experience}</p>
          <p>Address: {address}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    doctor: state.doctor,
    // doctors: state.doctors
  };
};

const mapDispatchToProps = dispatch => {
    return {
      fetchDoctorById: (doctorId) => dispatch(fetchDoctorById(doctorId))        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorById);
