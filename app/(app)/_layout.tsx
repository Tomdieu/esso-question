import { View, Text } from "react-native";
import React from "react";
import { useAuth } from "@/store/user";
import { Redirect, Stack } from "expo-router";

const AppLayout = () => {
  const { user } = useAuth();
  if (!user) {
    return <Redirect href={"/(auth)/login"} />;
  }
  return (
    <Stack/>
  );
};

export default AppLayout;
