import React, { Component } from "react";
import { connect } from 'react-redux';
import { DatePicker } from 'antd';


import Header from "../components/Header";
import SpecialtyCard from "../components/SpecialtyCard";
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


import { fetchSpecialties } from "../store/actions";


class Specialties extends Component {
  componentDidMount() {
    this.props.fetchSpecialties();
  }

  render() {    
    const { specialties, isFetching } = this.props.specialties;
    let specialtiesList;
    specialtiesList = specialties.map((specialty) =>  (<SpecialtyCard key={specialty.id} specialty={specialty} />))

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
            <h1>Specialties page</h1>
              { specialtiesList }
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    specialties: state.specialties
  };
};

const mapDispatchToProps = dispatch => {
    return {
      fetchSpecialties: () => dispatch(fetchSpecialties())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Specialties);
