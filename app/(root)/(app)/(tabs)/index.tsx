import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@/store/user";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

type Props = {};

const Index = (props: Props) => {
  const { user } = useAuth();
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer);
  };

  return (
    <SafeAreaView className="flex-1 bg-blue-500">
      <StatusBar style="light" />
      <ScrollView className="flex-1 p-2 py-0 ">
        <View className="min-h-[85vh] gap-4">
          {/* Header */}
          {/* <View style={{elevation:20,shadowColor:"#ddd"}} className="shadow-md flex-row items-center justify-between px-2 py-5 bg-white">
            <View className="flex-row items-end gap-2">
              <Text className="text-3xl font-inter-bold text-gray-800">
                Welcome,
              </Text>
              <Text className="text-2xl font-inter-regular text-gray-600">
                {user?.username}
              </Text>
            </View>
          </View> */}

          <View className="flex-row justify-between">
            <View className="bg-white h-24 w-24"></View>
            <View className="w-36 h-36">
              <Image
                source={require("@/assets/images/splash-icon.jpg")}
                resizeMode="contain"
                className="w-full h-full"
              />
            </View>
            <TouchableOpacity>

            <View className="bg-white h-24 w-24 p-1">
              <Text className="font-inter-medium font-bold">Photo 4x4</Text>
              <Text className="font-inter-medium font-bold">Nom</Text>
              <Text className="font-inter-medium font-bold">
                Identite professionelle
              </Text>
            </View>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-between">
            <TouchableOpacity>
              <View className="bg-white h-24 w-24 flex items-center justify-center">
                <Text className="font-inter-bold text-xl">CODAGE</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View className="bg-white h-24 w-24 flex items-center justify-center">
                <Text className="font-inter-bold text-xl">ECODEV</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-between">
            <TouchableOpacity>
              <View className="bg-white h-24 w-24 flex items-center justify-center">
                <Text className="font-inter-bold text-xl">CATA</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="bg-white h-24 w-24 flex items-center justify-center">
                <Text className="font-inter-bold text-xl">IDEO</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="bg-white h-24 w-24 flex items-center justify-center">
                <Text className="font-inter-bold text-xl">ETS</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-between">
            <TouchableOpacity>
              <View className="bg-white h-24 w-24 flex items-center justify-center">
                <Text className="font-inter-bold text-xl">MAQUET</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="bg-white h-24 w-24 flex items-center justify-center">
                <Text className="font-inter-bold text-xl">BOUTIQUE</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="bg-white h-24 w-24 flex items-center justify-center">
                <Text className="font-inter-bold text-xl">PROTO</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
