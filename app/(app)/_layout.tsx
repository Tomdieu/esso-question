import { View, Text } from "react-native";
import React from "react";
import { useAuth } from "@/store/user";
import { Redirect, Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Home } from "lucide-react-native";

const AppLayout = () => {
  const { user } = useAuth();
  if (!user) {
    return <Redirect href={"/(auth)/login"} />;
  }
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
    </Drawer>
  );
};

export default AppLayout;
