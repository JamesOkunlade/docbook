import React, { Component } from "react";
import { connect } from 'react-redux';
import { Layout, Carousel, Row, Col } from 'antd';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

// import Header from "../components/Header";



const { Header, Footer, Content } = Layout;
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

class Home extends Component {
  componentDidMount() {
  }

  render() {    
    return (
      <div>
        <div className="">
          <h1>Home page</h1>
          <Layout>
            <Header>Header</Header>
            <Content>

              <Carousel autoplay>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
            </Content>
            <Row gutter={[48, 40]}>
              <Col span={8}>Col 1</Col>
              <Col span={8}>Col 2</Col>
              <Col span={8}>Col 3</Col>
            </Row>
            <Footer>Footer</Footer>
          </Layout>
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
