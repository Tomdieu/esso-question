import React from "react";
import { Stack, useRouter,router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FAB, useTheme } from "react-native-paper";
import { ArrowRight } from "lucide-react-native";

export default function Index() {
  return (
    <SafeAreaView className="flex h-full justify-between bg-white ">
      <ScrollView className="flex-1">
      <View className="flex-1 justify-center items-center h-full px-5  min-h-[95vh]">
        <TouchableOpacity
          onPress={() => {router.push("/(auth)/login")}}
          className="w-full flex justify-end items-end p-5"
        >
          <Text className="text-black text-md font-inter-bold">Skip</Text>
        </TouchableOpacity>
        <View className="flex-1">
          <Image
            source={require("../assets/images/img8.jpeg")}
            className="w-72 h-72"
            resizeMode="contain"
          />
        </View>
        <View className="w-full">
          <Text className="font-bold text-4xl font-inter-regular">Bienvenue !</Text>
          <Text className="text-left text-lg font-bold text-gray-500 font-inter-regular">
            Sur ideogramme.
          </Text>
        </View>

        <TouchableOpacity
          style={{
            borderRadius: 5,
            marginVertical: 8,
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center"
          }}
          className="bg-blue-600 px-5 py-3 rounded-md w-full font-inter-medium flex items-center flex-col"
          onPress={()=>{
            router.push('/questions/problem')
          }}
        >
          <Text
            style={{ fontWeight: "bold" }}
            className="text-2xl font-medium text-center text-white"
          >
            Continue
          </Text>
          <ArrowRight color="white" size={32} className=""/>
        </TouchableOpacity>
      </View>
      </ScrollView>
     
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
