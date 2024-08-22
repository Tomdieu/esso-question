import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Animated, // Import Animated API
  Easing,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Question, questions } from "@/constants/questions";
import useStore from "@/hooks/store";

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

  const { setAnswer: storeAnswer } = useStore();

  const buttonAnimation = useRef(new Animated.Value(0)).current; // Animation value for the button
  const questionOpacity = useRef(new Animated.Value(0)).current; // Animation value for question opacity
  const questionTranslateY = useRef(new Animated.Value(20)).current; // Animation value for question translation

  useEffect(() => {
    setAnswer("");

    // Reset and start the question animation when the question changes
    questionOpacity.setValue(0);
    questionTranslateY.setValue(20);
    Animated.parallel([
      Animated.timing(questionOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(questionTranslateY, {
        toValue: 0,
        duration: 500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();
  }, [questionId]);

  useEffect(() => {
    // Animate the button when the answer changes
    Animated.timing(buttonAnimation, {
      toValue: answer ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [answer]);

  const handleNext = () => {
    storeAnswer(question.id, answer);
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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Stack.Screen
              options={{
                headerTitle: `Question ${question.id}`,
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
              <Animated.Text
                style={[
                  styles.questionText,
                  {
                    opacity: questionOpacity,
                    transform: [{ translateY: questionTranslateY }],
                  },
                ]}
                className={"mt-8"}
              >
                {question.text}
              </Animated.Text>

              <TextInput
                style={styles.answerInput}
                value={answer}
                onChangeText={setAnswer}
                placeholder="Enter your answer here..."
                placeholderTextColor={THEME_COLORS.border}
                className="bg-white placeholder:text-gray-700 caret-blue-600 text-black"
                numberOfLines={5}
              />
            </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <Animated.View
              style={{
                opacity: buttonAnimation,
                transform: [
                  {
                    scale: buttonAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.95, 1],
                    }),
                  },
                ],
              }}
            >
              <TouchableOpacity
                disabled={!answer}
                style={[
                  styles.button,
                  { backgroundColor: !answer ? "rgba(37,99,235,0.78)" : "#2563eb" },
                ]}
                onPress={handleNext}
              >
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default QuestionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.background,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 100, // Ensure there's enough space for the button
  },
  content: {
    marginTop: 20,
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
    fontFamily: FONT_FAMILY.regular,
    textAlignVertical: "top", // Align text to the top
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20, // Adjust for proper spacing
  },
  button: {
    paddingVertical: 13,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  notFoundText: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.regular,
    color: THEME_COLORS.text,
    textAlign: "center",
  },
});
