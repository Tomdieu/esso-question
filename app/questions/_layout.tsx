import React from "react";
import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { StatusBar } from "expo-status-bar";

type Props = {};

const StackLayout = (props: Props) => {
  return (
    <Stack
      screenOptions={{
        animation: "ios",
        headerShown: false,
        animationDuration: 300,
        animationTypeForReplace: "push",
        gestureEnabled:true,
        gestureDirection:"horizontal",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle:"Question"
        }}
      />
      <Stack.Screen 
        name="results"
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="problem"/>
    </Stack>
  );
};

export default StackLayout;
