import React, { Component } from "react";
import * as Font from "expo-font";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { connect, Provider } from "react-redux";
import store from "./ducks/index";
import { createStackNavigator, createAppContainer } from "react-navigation";

const RootStack = createStackNavigator(
  {
    Home: Home,
    Login: Login
  },
  {
    initialRouteName: "Login"
  }
);

const Navigation = createAppContainer(RootStack);

class App extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    // register fonts
    await Font.loadAsync({
      raleway: require("./assets/fonts/Raleway-Regular.ttf"),
      "raleway-bold": require("./assets/fonts/Raleway-Bold.ttf"),
      "raleway-light": require("./assets/fonts/Raleway-Light.ttf"),
      roboto: require("./assets/fonts/Roboto-Regular.ttf"),
      "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf")
    });

    this.setState({ ...this.state, loading: false });
  }

  render() {
    return (
      <Provider store={store}>
        {this.state.loading ? null : <Navigation />}
      </Provider>
    );
  }
}

export default App;
