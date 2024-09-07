import React from "react";
import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/store/user";

type Props = {};

const RootLayout = (props: Props) => {
  const { user } = useAuth();
  if (!user) {
    return <Redirect href={"/(auth)/login"} />;
  }
  return <Stack screenOptions={{ headerShown: false }} />;
};

export default RootLayout;
