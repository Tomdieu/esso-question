import React from "react";
import { router, Stack } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {};

const CreativiteLayout = (props: Props) => {
  return (
    <Stack screenOptions={{ animation: "ios" }}>
      <Stack.Screen name="index" options={{ headerTitle: "Creativite" }} />
      <Stack.Screen name="create" options={{ headerTitle: "Create Creativite" }} />

      <Stack.Screen
        name="[id]"
        options={{
          headerStyle: {
            backgroundColor: "#3b82f6",
          },
          headerRight(props) {
            return (
              <TouchableOpacity
                onPress={() => {
                  router.back();
                }}
                className="p-1 bg-white"
              >
                <Text className="font-inter-bold text-xl text-orange-500">
                  Retour
                </Text>
              </TouchableOpacity>
            );
          },
          headerLeft(props) {
            return (
              <View className="w-9 h-9 rounded-full border border-stone-50 p-1">
                <Image
                  source={require("@/assets/images/img8.jpeg")}
                  resizeMode="contain"
                  className="w-full h-full"
                />
              </View>
            );
          },
          headerTitle: "",
        }}
      />
    </Stack>
  );
};

export default CreativiteLayout;
