import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform
} from "react-native";

class Question extends Component {
  render() {
    return (
      <View style={styles.questionContainer}>
        <View>
          <Text style={styles.questionText}>
            {this.props.question.question}
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.7
  },
  questionText: {
    fontSize: 25,
    alignItems: "center",
    textAlign: "center"
  },
  btn: {
    justifyContent: "center",
    height: 45,
    width: 200,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "green",
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
    textAlign: "center"
  }
});

export default Question;
