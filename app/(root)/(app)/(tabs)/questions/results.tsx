import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import useStore from "@/hooks/store";
import { Question, questions } from "@/constants/questions";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

// Define theme colors and fonts
const THEME_COLORS = {
  primary: "#f4511e",
  background: "#fff",
  text: "#333",
  separator: "#eee",
};

const FONT_FAMILY = {
  regular: "InterRegular",
  medium: "InterMedium",
  bold: "InterBold",
};

const ResultScreen = () => {
  const answers = useStore((state) => state.answers);
  const router = useRouter();

  const renderSubQuestions = (subQuestions: Question[]) => {
    return subQuestions.map((subQuestion) => (
      <View key={subQuestion.id} style={styles.subResultItem}>
        <Text style={styles.subQuestionText}>{subQuestion.text}</Text>
        <Text style={styles.subAnswerText}>
          {Array.isArray(answers[subQuestion.id])
            ? (answers[subQuestion.id] as string[]).join(", ")
            : answers[subQuestion.id] || "Not answered"}
        </Text>
      </View>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="white" style="dark" />
      <Text style={styles.header}>Your Responses:</Text>

      {questions.map((question) => (
        <View key={question.id} style={styles.resultItem}>
          <Text style={styles.questionText}>{question.text}</Text>
          <Text style={styles.answerText}>
            {Array.isArray(answers[question.id])
              ? (answers[question.id] as string[]).join(", ")
              : answers[question.id] || "Not answered"}
          </Text>
          {question.subQuestions && renderSubQuestions(question.subQuestions)}
        </View>
      ))}

      <TouchableOpacity
        onPress={() => router.push("/questions/")}
        style={styles.button}
        className="bg-blue-500"
      >
        <Text style={styles.buttonText}>Retour au début</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    backgroundColor: THEME_COLORS.background,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: FONT_FAMILY.bold,
    color: THEME_COLORS.text,
  },
  resultItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: THEME_COLORS.separator,
    paddingBottom: 10,
  },
  questionText: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.medium,
    color: THEME_COLORS.text,
  },
  answerText: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.regular,
    color: THEME_COLORS.text,
    marginTop: 5,
  },
  subResultItem: {
    marginLeft: 20,
    marginTop: 10,
    borderLeftWidth: 2,
    borderLeftColor: THEME_COLORS.separator,
    paddingLeft: 10,
  },
  subQuestionText: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.medium,
    color: THEME_COLORS.text,
  },
  subAnswerText: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.regular,
    color: THEME_COLORS.text,
    marginTop: 5,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 30,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: FONT_FAMILY.medium,
    textAlign: "center",
  },
});
