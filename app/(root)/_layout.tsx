import { View, Text } from "react-native";
import React from "react";
import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/store/user";

type Props = {};

const RootLayout = (props: Props) => {
  const { user, logout } = useAuth();
  if (!user) {
    return <Redirect href={"/(auth)/login"} />;
  }
  return <Stack />;
};

export default RootLayout;
