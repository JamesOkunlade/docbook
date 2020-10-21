import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const SpecialtyCard = (props) => {
    const { id, area_of_specialization } = props.specialty;
   


    return (
        <section>           
            <p>Id: {id}</p>
            <p>License: {area_of_specialization}</p>
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(null, mapDispatchToProps)(SpecialtyCard);
