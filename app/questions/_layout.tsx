import React from "react";
import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { StatusBar } from "expo-status-bar";

type Props = {};

const StackLayout = (props: Props) => {
  return (
    <Stack
        screenOptions={{ animation: "slide_from_right", headerShown: false }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Question",
            animation: "slide_from_left",
            //   headerTintColor: Colors["dark"].tint,
          }}
        />
      </Stack>
  );
};

export default StackLayout;
