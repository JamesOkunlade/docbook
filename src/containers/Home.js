import React, { Component } from "react";
import { connect } from 'react-redux';

import Header from "../components/Header";

class Home extends Component {
  componentDidMount() {
  }

  render() {    
    return (
      <div>
        <Header />
        <div className="">
          <h1>Home page</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
