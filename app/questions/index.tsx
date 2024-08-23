import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import { questions } from "@/constants/questions";
import { Link, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

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
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView className="flex h-full bg-white">
      <View style={styles.container}>
        <Text style={styles.title}>Ideogramme</Text>
        <View className="flex-1 items-center justify-center">
          <Text className="text-2xl text-center">Vous devez répondre à cette série de questions.</Text>
        </View>
        {/* <Swiper
          ref={swiperRef}
          loop={false}
          dot={
            <View className="w-[20px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
          }
          activeDot={
            <View className="w-[20px] h-[4px] mx-1 bg-[#000] rounded-full" />
          }
          onIndexChanged={(index) => setActiveIndex(index)}
        >
          {questions.map((question)=>(
            <View key={question.id} className="flex items-center justify-center flex-1">
              <Text className="text-2xl font-bold text-center">{question.text}</Text>
            </View>
          ))}
        </Swiper> */}
        <Link href={`/questions/${1}`} asChild>
          <TouchableOpacity style={styles.button} className="w-full bg-blue-600">
            <Text style={styles.buttonText}>Debuter</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Questions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
