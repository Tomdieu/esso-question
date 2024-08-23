import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
  Easing,
} from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { Question, questions } from '@/constants/questions';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Checkbox from 'expo-checkbox';
import { useQuestionStore } from '@/store/questions';

// Define theme colors and fonts
const THEME_COLORS = {
  primary: '#f4511e',
  background: '#fff',
  text: '#333',
  separator: '#eee',
  border: '#eee',
};

const FONT_FAMILY = {
  regular: 'InterRegular',
  medium: 'InterMedium',
  bold: 'InterBold',
};

const QuestionScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const { getAnswer, setAnswer: storeAnswer } = useQuestionStore();

  const questionId = parseInt(id ?? '1', 10) - 1;
  const question = questions[questionId];
  const [answer, setAnswer] = useState<string | string[] | null>(null);

  const buttonAnimation = useRef(new Animated.Value(0)).current;
  const questionOpacity = useRef(new Animated.Value(0)).current;
  const questionTranslateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    const savedAnswer = getAnswer(question.id);
    setAnswer(savedAnswer || null);

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
  }, [questionId, getAnswer]);

  useEffect(() => {
    Animated.timing(buttonAnimation, {
      toValue: answer ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [answer]);

  const handleNext = () => {
    if (isValidAnswer(answer, question.type)) {
      if(answer){

        storeAnswer(question.id, answer);
      }

      if (questionId < questions.length - 1) {
        router.push(`/questions/${question.id + 1}`);
      } else {
        router.push('/questions/results');
      }
    } else {
      // You can add visual feedback here (e.g., show an error message)
      // to indicate that the answer is required
      console.log('Please answer the question');
    }
  };

  const isValidAnswer = (
    answer: string | string[] | null,
    questionType: 'text' | 'checkbox' | 'radio'
  ): boolean => {
    if (questionType === 'text') {
      return answer !== null &&  typeof answer=="string" && answer.trim() !== ''; // Check if text is not empty
    } else if (questionType === 'checkbox' || questionType === 'radio') {
      return answer !== null && answer.length > 0; // Check if at least one option is selected
    }
    return false;
  };

  const renderInput = (currentQuestion: Question) => {
    const handleSubAnswerChange = (questionId:number,newAnswer: string | string[]) => {
      setAnswer(newAnswer);
      // Store answer immediately for checkboxes and radio buttons
      if (currentQuestion.type !== 'text') {
        storeAnswer(questionId, newAnswer);
      }
    };

    switch (currentQuestion.type) {
      case 'text':
        return (
          <TextInput
            style={styles.answerInput}
            value={typeof answer === 'string' ? answer : ''}
            onChangeText={(value)=>{
              handleSubAnswerChange(currentQuestion.id,value)
            }}
            placeholder="Enter your answer here..."
            placeholderTextColor={THEME_COLORS.border}
            numberOfLines={5}
          />
        );
      case 'checkbox':
        return currentQuestion.choices?.map((choice, index) => (
          <View key={index} style={styles.checkboxContainer}>
            <Checkbox
              value={Array.isArray(answer) && answer.includes(choice)}
              onValueChange={(checked) => {
                const newAnswer = checked
                  ? Array.isArray(answer)
                    ? [...answer, choice]
                    : [choice]
                  : Array.isArray(answer)
                  ? answer.filter((item) => item !== choice)
                  : [];
                handleSubAnswerChange(currentQuestion.id,newAnswer);
              }}
            />
            <Text style={styles.checkboxLabel}>{choice}</Text>
          </View>
        ));
      case 'radio':
        return currentQuestion.choices?.map((choice, index) => (
          <TouchableOpacity
            key={index}
            style={styles.radioContainer}
            onPress={() => handleSubAnswerChange(currentQuestion.id,choice)}
          >
            <View
              style={[
                styles.radioCircle,
                {
                  borderColor: answer === choice ? THEME_COLORS.primary : THEME_COLORS.border,
                },
              ]}
            >
              {answer === choice && (
                <View
                  style={[
                    styles.radioSelected,
                    { backgroundColor: THEME_COLORS.primary },
                  ]}
                />
              )}
            </View>
            <Text style={styles.radioLabel}>{choice}</Text>
          </TouchableOpacity>
        ));
      default:
        return null;
    }
  };

  const renderSubQuestions = (subQuestions: Question[]) => {
    return subQuestions.map((subQuestion) => (
      <View key={subQuestion.id} style={styles.subQuestionContainer}>
        <Text style={styles.subQuestionText}>{subQuestion.text}</Text>
        {renderInput(subQuestion)}
      </View>
    ));
  };

  if (!question) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFoundText}>Question not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="white" style="dark" />
      <Animated.Text
        style={[
          styles.header,
          {
            opacity: questionOpacity,
            transform: [{ translateY: questionTranslateY }],
          },
        ]}
      >
        Question {question.id}
      </Animated.Text>
      <View style={styles.resultItem}>
        <Animated.Text
          style={[
            styles.questionText,
            {
              opacity: questionOpacity,
              transform: [{ translateY: questionTranslateY }],
            },
          ]}
        >
          {question.text}
        </Animated.Text>
        {renderInput(question)}
        {question.subQuestions && renderSubQuestions(question.subQuestions)}
      </View>

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
            disabled={!isValidAnswer(answer, question.type)}
            onPress={handleNext}
            style={[
              styles.button,
              { backgroundColor: !isValidAnswer(answer, question.type) ? 'rgba(37,99,235,0.78)' : '#2563eb' },
            ]}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ScrollView>
  );
};

export default QuestionScreen;

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
  answerInput: {
    borderWidth: 1,
    borderColor: THEME_COLORS.border,
    borderRadius: 8,
    padding: 12,
    fontFamily: FONT_FAMILY.regular,
    textAlignVertical: 'top',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontFamily: FONT_FAMILY.regular,
    color: THEME_COLORS.text,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    height: 12,
    width: 12,
    borderRadius: 6,
  },
  radioLabel: {
    marginLeft: 8,
    fontFamily: FONT_FAMILY.regular,
    color: THEME_COLORS.text,
  },
  subQuestionContainer: {
    marginTop: 20,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: THEME_COLORS.primary,
  },
  subQuestionText: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.medium,
    color: THEME_COLORS.text,
    marginBottom: 10,
  },
  buttonContainer: {
    paddingBottom: 20,
  },
  button: {
    paddingVertical: 13,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  notFoundText: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.regular,
    color: THEME_COLORS.text,
    textAlign: 'center',
  },
});