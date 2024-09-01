import React from "react";
import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const StackLayout = (props: Props) => {
  return (
    <React.Fragment>
      <StatusBar />
      <Stack
        screenOptions={{
          animation: "ios",
          // headerShown: false,
          animationDuration: 300,
          animationTypeForReplace: "push",
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Question",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="results"
          options={{
            headerShown: false,
          }}
        />
        {/*  */}

        <Stack.Screen
          name="problem"
          options={{
            headerShown:false
          }}
        />
      </Stack>
    </React.Fragment>
  );
};

export default StackLayout;
