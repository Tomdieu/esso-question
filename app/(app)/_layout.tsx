import { View, Text, Pressable } from "react-native";
import React from "react";
import { useAuth } from "@/store/user";
import { Redirect, Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Home } from "lucide-react-native";
import { Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { images } from "@/constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AppLayout = () => {
  const { user } = useAuth();
  if (!user) {
    return <Redirect href={"/(auth)/login"} />;
  }
  const { bottom } = useSafeAreaInsets();
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}
      drawerContent={({ ...props }) => (
        <View className="flex-1">
          <Image
            className="w-full h-[250px]"
            resizeMode="contain"
            source={images.LogoImage}
          />
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
          </DrawerContentScrollView>

          <Pressable style={{ bottom }}>
            <Text>Logout</Text>
          </Pressable>
        </View>
      )}
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
