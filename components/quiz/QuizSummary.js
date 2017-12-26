import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions
} from "react-native";
import {
  yellowBase,
  greenLight,
  primaryText,
  purpleLight
} from "../../utils/colors";

function QuizSummary(props) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Score</Text>

      <Text style={styles.correct}>Correct: {props.correct}</Text>

      <Text style={styles.wrong}>Wrong: {props.wrong}</Text>

      <Text style={styles.percentage}>
        Percentage: {Math.trunc(props.correct * 100 / props.totalQuestions)}%
      </Text>

      <TouchableOpacity style={styles.btn} onPress={props.toHome}>
        <Text style={styles.btnText}>DONE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    width: Dimensions.get("window").width * 0.7,
    marginTop: 70,
    marginBottom: 90,
    backgroundColor: yellowBase,
    borderRadius: 5
  },
  correct: {
    fontSize: 20,
    color: "green"
  },
  wrong: {
    fontSize: 20,
    color: "red"
  },
  percentage: {
    fontSize: 20,
    color: purpleLight
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
        justifyContent: "center",
        alignItems: "center"
      }
    })
  },
  btnText: {
    textAlign: "center",
    fontSize: 21,
    color: primaryText,
    fontWeight: "700"
  }
});

export default QuizSummary;
