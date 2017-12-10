import React, { Component } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import MainNavigator from "./components/common/MainNavigator";
import CustomStatusBar from "./components/common/CustomStatusBar";
import { blue } from "./utils/colors";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <CustomStatusBar backgroundColor={blue} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blue
  }
});

export default App;
