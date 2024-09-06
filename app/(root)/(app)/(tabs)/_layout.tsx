import React from "react";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"; // Importing icons from @expo/vector-icons
import { List, HomeIcon, Notebook, FileChartColumn, SquarePen } from "lucide-react-native";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false,tabBarHideOnKeyboard:true }} initialRouteName="index">
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => {
            return (
              <HomeIcon
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="questions"
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <SquarePen
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="output"
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return <FileChartColumn size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
