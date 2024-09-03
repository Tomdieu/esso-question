import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAuth } from "@/store/user";
import { Redirect, router, usePathname } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { FileChartColumn, Home, LogOut } from "lucide-react-native";
import { Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { images } from "@/constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Seperator from "@/components/Seperator";
import { AntDesign } from "@expo/vector-icons";

const AppLayout = () => {
  const { user, logout } = useAuth();
  const pathName = usePathname();
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
          <DrawerContentScrollView {...props}>
            <Image
              className="w-full h-[250px]"
              resizeMode="contain"
              source={images.LogoImage}
            />
            <DrawerItemList {...props} />
            <DrawerItem
              label={"Output"}
              onPress={() => {
                router.push("/(app)/(tabs)/output");
              }}
              labelStyle={{
                marginLeft: -20,
              }}
              icon={({ color, size }) => (
                <FileChartColumn size={size} color={color} />
              )}
              activeTintColor="#3b82f6"
              activeBackgroundColor="#dbeafe"
              inactiveBackgroundColor="#e5e7eb"
              focused={pathName === "/output"}
            />
            <DrawerItem
              label={"About"}
              onPress={() => {
                router.push("/(app)/(tabs)/output");
              }}
              labelStyle={{
                marginLeft: -20,
              }}
              icon={({ color, size }) => (
                <AntDesign name="questioncircleo" size={size} color={color} />
              )}
              activeTintColor="#3b82f6"
              activeBackgroundColor="#dbeafe"
              inactiveBackgroundColor="#e5e7eb"
              focused={pathName === "/output"}
            />
            <Seperator />
            <TouchableOpacity
              onPress={logout}
              style={{ bottom }}
              className="rounded-md bg-red-400 flex-row py-2.5 px-3 m-2 items-center"
            >
              <LogOut className="text-white mr-2" size={24} />
              <Text className="text-sm text-white">Logout</Text>
            </TouchableOpacity>
          </DrawerContentScrollView>
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
