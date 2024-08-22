import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import useStore from "@/hooks/store";
import { questions } from "@/constants/questions";
import { Link, useRouter } from "expo-router";
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="white" style="dark"/>
      <Text style={styles.header}>Your Responses:</Text>

      {questions.map((question) => (
        <View key={question.id} style={styles.resultItem}>
          <Text style={styles.questionText}>{question.text}</Text>
          <Text style={styles.answerText}>
            {answers[question.id] || "Not answered"}
          </Text>
        </View>
      ))}

      <TouchableOpacity
        onPress={() => router.push("/questions/")}
        style={styles.button}
        className="w-full"
      >
        <Text style={styles.buttonText}>Retour au debut</Text>
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
  },
  button: {
    backgroundColor: THEME_COLORS.primary,
    padding: 15,
    borderRadius: 8,
    alignSelf: "center", // Center the button horizontally
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: FONT_FAMILY.medium,
    textAlign: "center",
  },
});
