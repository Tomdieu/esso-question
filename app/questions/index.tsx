import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { questions } from "@/constants/questions";
import { Link, useNavigation } from "expo-router";

// Define theme colors and fonts
const THEME_COLORS = {
  primary: "#f4511e", // Example color, customize to your liking
  background: "#fff",
  text: "#333",
};

const FONT_FAMILY = {
  regular: "InterRegular",
  medium: "InterMedium",
  bold: "InterBold",
};

const Questions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Questions</Text>

      <Link href={`/questions/${1}`} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Debuter</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    padding: 20,
    backgroundColor: THEME_COLORS.background,
  },
  title: {
    fontSize: 32,
    marginBottom: 30,
    fontFamily: FONT_FAMILY.bold,
    color: THEME_COLORS.text,
  },
  button: {
    backgroundColor: THEME_COLORS.primary,
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: FONT_FAMILY.medium,
    textAlign: "center",
  },
});
