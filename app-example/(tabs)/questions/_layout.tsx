import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box } from "native-base";

type Props = {};

const StackLayout = (props: Props) => {
  const colorScheme = useColorScheme();
  return (
    <NativeBaseProvider>
      <Stack
        screenOptions={{ animation: "slide_from_right", headerShown: false }}
      >
        <StatusBar style="light" backgroundColor="#ffff" />
        <Stack.Screen
          name="index"
          options={{
            title: "Question",
            animation: "slide_from_left",
            //   headerTintColor: Colors["dark"].tint,
          }}
        />
      </Stack>
    </NativeBaseProvider>
  );
};

export default StackLayout;
