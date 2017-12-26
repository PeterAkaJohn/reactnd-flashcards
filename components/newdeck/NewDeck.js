import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { insertNewDeck } from "../../actions";
import { blueBase, greenLight, primaryText } from "../../utils/colors";

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
    if (text) {
      this.props.insertNewDeck(text).then(data => {
        this.props.navigation.navigate("DeckDetail", { deckName: data.title });
      });
      this.setState({ text: "" });
    }
  }
  render() {
    return (
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Choose a name"
          style={[styles.defaultStyle, styles.textInput]}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <TouchableOpacity
          style={[styles.defaultStyle, styles.btn]}
          onPress={this.onSubmitDeck}
        >
          <Text style={styles.btnText}>ADD NEW DECK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: blueBase
  },
  defaultStyle: {
    height: 40
  },
  textInput: {
    borderColor: greenLight,
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: greenLight,
    width: 300,
    marginBottom: 50,
    color: primaryText,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 18
  },
  btn: {
    justifyContent: "center",
    height: 45,
    width: 200,
    marginBottom: 10,
    padding: 10,
    backgroundColor: greenLight,
    ...Platform.select({
      ios: {
        borderRadius: 7,
        marginLeft: 40,
        marginRight: 40
      },
      android: {
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center"
      }
    })
  },
  btnText: {
    textAlign: "center",
    color: primaryText,
    fontSize: 20,
    fontWeight: "700"
  }
});

export default connect(null, { insertNewDeck })(NewDeck);
