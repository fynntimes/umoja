import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const Container = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: #8ec9bb;
`;

const Title = styled(Animatable.Text)`
  font-size: 56px;
  font-family: "raleway-bold";
`;

const Description = styled(Animatable.Text)`
  margin-top: 20px;
  margin-bottom: 80px;
  font-size: 24px;
  font-family: "roboto";
`;

const ButtonArea = styled(Animatable.View)`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Button = styled.TouchableOpacity`
  border-radius: 20px;
  padding: 10px;
  width: 70%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  text-align: center;
  color: white;
  font-family: roboto;
  font-size: 16px;
  margin-left: 10px;
`;

class Login extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    console.log("Mounted login");
  }

  render() {
    return (
      <Container>
        <Title animation="fadeInDown">Welcome.</Title>
        <Description animation="fadeIn" delay={500}>
          The app for all things Umoja.
        </Description>
        <ButtonArea animation="fadeIn" delay={500}>
          <Button style={{ backgroundColor: "#db4437", marginBottom: 10 }}>
            <Ionicons name="logo-google" color="white" size={24} />
            <ButtonText>Sign in with Google</ButtonText>
          </Button>
          <Button style={{ backgroundColor: "#3C5A99", marginBottom: 10 }}>
            <Ionicons name="logo-facebook" color="white" size={24} />
            <ButtonText>Sign in with Facebook</ButtonText>
          </Button>
          <Button style={{ backgroundColor: "#909090" }}>
            <Ionicons name="ios-mail" color="white" size={24} />
            <ButtonText>Sign in with Email</ButtonText>
          </Button>
        </ButtonArea>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  theme: state.theme;
};

export default connect(mapStateToProps)(Login);
