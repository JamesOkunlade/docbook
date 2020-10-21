import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const DoctorCard = (props) => {
    const { id, name, info, address, license, appointments, phone, specialty_id, years_of_experience, avatar  } = props.doctor;
   


    return (
        <section>
            <Link to={`/doctors/${id}`}><h1>{name}</h1></Link>
            <img src={avatar} alt={name} />
            <p>Info: {info}</p>
            <p>Id: {id}</p>
            <p>License: {license}</p>
            <p>Phone: {phone}</p>
            <p>Specialty Id: {specialty_id}</p>
            <p>Years of experience: {years_of_experience}</p>
            <p>Address: {address}</p>
            <p>Number of appointments: {appointments.length}</p>
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(null, mapDispatchToProps)(DoctorCard);
