import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";

function QuizSummary(props) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Score</Text>

      <Text style={styles.correct}>Correct: {props.correct}</Text>

      <Text style={styles.wrong}>Wrong: {props.wrong}</Text>

      <TouchableOpacity style={styles.btn} onPress={props.toHome}>
        <Text style={styles.btnText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 70,
    paddingBottom: 70
  },
  correct: {
    fontSize: 20,
    color: "green"
  },
  wrong: {
    fontSize: 20,
    color: "red"
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

export default QuizSummary;
