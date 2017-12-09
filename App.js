import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import Decks from "./components/decks/Decks";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Decks />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
