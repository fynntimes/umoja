import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components/native";

const mapStateToProps = state => {
  theme: state.theme;
};

const Container = styled.View`
  padding: 10px;
  flex: 1;
  align-items: center;
`;

const Title = styled.Text`
  margin-top: 40px;
  font-family: "raleway-bold";
  font-size: 56px;
`;

const Description = styled.Text`
  margin-top: 10px;
  font-family: "roboto";
  font-size: 16px;
`;

class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  componentDidMount() {
    console.log(this.props.theme);
  }

  render() {
    return (
      <Container>
        <Title>Hello World!</Title>
        <Description>Welcome to the official Umoja Games app.</Description>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Home);
