import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

type Props = {};

const CreativiteScreen = (props: Props) => {
  return (
    <View className="bg-blue-500 flex-1">
      <StatusBar style="dark" />
      <View className="h-56 bg-white m-1"></View>

      <View className="flex-row justify-between py-4 px-2">
        <TouchableOpacity className="p-2 border border-blue-600 bg-white">
          <Text className="text-orange-400 font-inter-bold">Maquette</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2 border border-blue-600 bg-white">
          <Text className="text-orange-400 font-inter-bold">Traduction</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2 border border-blue-600 bg-white">
          <Text className="text-orange-400 font-inter-bold">Prototype</Text>
        </TouchableOpacity>
      </View>
      <View className="justify-center items-center">
        <Text className="text-2xl font-inter-bold">Creativite</Text>
      </View>
      <View className="p-1 ">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row gap-2 py-2"
        >
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>PB</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Sol</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Re</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>OD</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Ve</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Fe</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Fab</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Str</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Mo</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Phi</Text>
          </TouchableOpacity>
        </ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row gap-2 py-2"
        >
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>PB</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Sol</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Re</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>OD</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Ve</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Fe</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Fab</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Str</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Mo</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Phi</Text>
          </TouchableOpacity>
        </ScrollView>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row gap-2 py-2"
        >
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>PB</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Sol</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Re</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>OD</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Ve</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Fe</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Fab</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Str</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Mo</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Phi</Text>
          </TouchableOpacity>
        </ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row gap-2 py-2"
        >
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>PB</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Sol</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Re</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>OD</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Ve</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Fe</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Fab</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Str</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Mo</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center p-1.5 border border-blue-500 bg-white w-10 h-10">
            <Text>Phi</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default CreativiteScreen;

const styles = StyleSheet.create({});
