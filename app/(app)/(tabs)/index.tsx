import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@/store/user";
import { Ionicons } from "@expo/vector-icons";

type Props = {};

const Index = (props: Props) => {
  const { user } = useAuth();
  
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView className="flex-1 p-2 py-0 ">
        <View className="min-h-[85vh]">

        {/* Header */}
        <View className="shadow-md flex-row items-center justify-between px-2 py-5 bg-white">
          <View className="flex-row items-end gap-2">
            <Text className="text-3xl font-inter-semibold text-gray-800">Welcome,</Text>
            <Text className="text-2xl font-inter-regular text-gray-600">{user?.username}</Text>
          </View>
          {/* <TouchableOpacity>
            <Ionicons name="settings-outline" size={24} color="gray" />
          </TouchableOpacity> */}
        </View>

        {/* Content */}
        <View className="mt-6 flex-1">
          <Text className="text-4xl font-inter-bold text-gray-900 px-2 uppercase">Ideogramme</Text>
          <Text className="text-lg text-gray-600 mt-2 px-2">
            Track and manage your ideograms with ease.
          </Text>
        </View>

        {/* Data Collection Button */}
        <View className="mt-10 px-2">
          <TouchableOpacity className="bg-blue-500 rounded-md py-4 flex-row items-center justify-center shadow-lg">
            <Ionicons name="add-circle-outline" size={24} color="white" />
            <Text className="text-lg font-inter-semibold text-white ml-2">Start New Collection</Text>
          </TouchableOpacity>
        </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
