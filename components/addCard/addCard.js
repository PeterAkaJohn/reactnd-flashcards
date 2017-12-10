import React, { Component } from "react";
import { Text, View } from "react-native";

class AddCard extends Component {
  static navigationOptions() {
    return {
      title: `Add a card`
    };
  }
  render() {
    return (
      <View>
        <Text>AddCard Component</Text>
      </View>
    );
  }
}

export default AddCard;
