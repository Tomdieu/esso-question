import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Question, questions } from "@/constants/questions";
import useStore from "@/hooks/store";
import { Input } from "@/components/ui/input";
import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
  ButtonGroup,
} from "@/components/ui/button";

// Define theme colors and fonts
const THEME_COLORS = {
  primary: "#f4511e", // Example - choose your own color
  background: "#fff",
  text: "#333",
  border: "#ddd",
};

const FONT_FAMILY = {
  regular: "InterRegular", // Assuming you have these fonts loaded
  medium: "InterMedium",
  bold: "InterBold",
};

const QuestionScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const questionId = parseInt(id ?? "1", 10) - 1;
  const question: Question | undefined = questions[questionId];
  const [answer, setAnswer] = useState("");

  const { setAnswer: storeAnwser } = useStore();

  useEffect(() => {
    setAnswer("");
  }, [questionId]);

  const handleNext = () => {
    storeAnwser(question.id, answer);
    if (questionId < questions.length - 1) {
      router.push(`/questions/${question.id + 1}`);
    } else {
      router.push("/questions/results");
    }
  };

  if (!question) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFoundText}>Question not found!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: `Question ${question.id}`,
          headerStyle: {
            backgroundColor: THEME_COLORS.primary,
          },
          headerTintColor: THEME_COLORS.background,
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: FONT_FAMILY.bold,
          },
        }}
      />

      <View style={styles.content}>
        <Text style={styles.questionText}>{question.text}</Text>

        <Input
          style={styles.answerInput}
          value={answer}
          onChangeText={setAnswer}
          placeholder="Enter your answer here..."
          placeholderTextColor={THEME_COLORS.border}
          className="bg-white placeholder:text-gray-700 caret-blue-600 text-black"
        />
        {/* <CustomButton className="py-2" title="Next" onPress={handleNext} disabled={!answer} /> */}
        {/* <Button
          title="Next"
          onPress={handleNext}
          disabled={!answer}
          color={THEME_COLORS.primary} // Change button color
        /> */}

        <Button size="md" variant="solid" action="primary">
          <ButtonText>Hello World!</ButtonText>
        </Button>
      </View>
    </View>
  );
};

export default QuestionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.background,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  questionText: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: FONT_FAMILY.medium,
    color: THEME_COLORS.text,
  },
  answerInput: {
    borderWidth: 1,
    borderColor: THEME_COLORS.border,
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontFamily: FONT_FAMILY.regular,
    textAlignVertical: "top", // Align text to the top
  },
  notFoundText: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.regular,
    color: THEME_COLORS.text,
  },
});
