import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { images } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchemaType } from "@/schema/login.schema";

type Props = {};

const LoginScreen = (props: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchemaType) => {
    console.log(data);
  };

  return (
    <SafeAreaView className="flex h-full jus)tify-between bg-white ">
      <ScrollView className="flex-1 bg-white">
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          className="flex-1 min-h-[95vh] justify-center items-center h-full"
        >
          <View className="flex-1 bg-white">
            <View className="relative w-full h-[250px]">
              <Image
                source={images.LogoImage}
                className="z-0 w-full h-[250px]"
              />
            </View>

            <View className="px-3 gap-5 w-full">
              <Controller
                control={control}
                name="username"
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className="gap-y-1">
                    <Text className="font-medium text-lg">Username</Text>
                    <TextInput
                      className="py-3 px-2 rounded-md border"
                      placeholder="Username"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                    {errors.username && (
                      <Text style={{ color: "red" }}>
                        {errors.username.message}
                      </Text>
                    )}
                  </View>
                )}
              />
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className="gap-y-1">
                    <Text className="font-medium text-lg">Password</Text>

                    <TextInput
                      style={{
                        borderWidth: 1,
                        borderColor: "gray",
                        marginBottom: 10,
                        padding: 8,
                      }}
                      placeholder="Password"
                      secureTextEntry
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                    {errors.password && (
                      <Text style={{ color: "red" }}>
                        {errors.password.message}
                      </Text>
                    )}
                  </View>
                )}
              />

              <TouchableOpacity
                style={{
                  borderRadius: 5,
                  marginVertical: 8,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="bg-blue-600 px-5 py-3 rounded-md w-full font-inter-medium flex items-center flex-col"
                onPress={() => {
                  handleSubmit(onSubmit);
                }}
              >
                <Text
                  style={{ fontWeight: "bold" }}
                  className="text-2xl font-medium text-center text-white"
                >
                  Sign In
                </Text>
              </TouchableOpacity>
              <View className="gap-y-3 flex-row gap-x-1">
                <Text>Je n'ai pas de compte</Text>
                <Link href={"/(auth)/register"}>Cree</Link>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
