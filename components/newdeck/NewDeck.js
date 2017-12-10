import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { insertNewDeck } from "../../actions";

class NewDeck extends Component {
  constructor() {
    super();
    this.onSubmitDeck = this.onSubmitDeck.bind(this);
    this.state = {
      text: ""
    };
  }

  onSubmitDeck() {
    const { text } = this.state;
    this.props.insertNewDeck(text).then(data => {
      this.props.navigation.navigate("DeckDetail", { deck: data });
    });
  }
  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <TouchableOpacity
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onPress={this.onSubmitDeck}
        >
          <Text>Add New Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null, { insertNewDeck })(NewDeck);
