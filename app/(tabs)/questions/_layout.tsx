import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Colors } from "@/constants/Colors";

type Props = {};

const StackLayout = (props: Props) => {
  const colorScheme = useColorScheme();
  return (
    <Stack>
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
