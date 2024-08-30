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
import { Eye, EyeOff } from "lucide-react-native";

type Props = {};

const LoginScreen = (props: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: LoginSchemaType) => {
    console.log(data);
  };

  return (
    <SafeAreaView className="flex h-full jus)tify-between bg-white ">
      <ScrollView bounces className="flex-1 bg-white">
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          className="flex-1  justify-center items-center h-full w-full"
        >
          <View className="flex-1 min-h-[100vh] bg-white">
            <View className="relative w-full h-[250px] mt-5">
              <Image
                source={images.LogoImage}
                className="w-full h-[250px]"
                resizeMode="contain"
              />
            </View>

            <View className="px-2 w-full items-center  relative flex-1">
              <Controller
                control={control}
                name="username"
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className="gap-y-1 w-full">
                    <Text className="font-inter-regular text-base">Username</Text>
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
                  <View className="gap-y-1 w-full">
                    <Text className="font-inter-regular text-base">Password</Text>

                    <View className="w-full relative">
                      <TextInput
                        className="py-3 px-2 rounded-md border w-full"
                        placeholder="Password"
                        secureTextEntry={!showPassword}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                      <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                        className="absolute right-1 bottom-1 top-1"
                      >
                        {showPassword ? <EyeOff /> : <Eye />}
                      </TouchableOpacity>
                    </View>
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
                  alert("Hello submitting");
                  handleSubmit(onSubmit);
                }}
              >
                <Text
                  style={{ fontWeight: "medium" }}
                  className="text-xl font-inter-regular text-center text-white"
                >
                  Sign In
                </Text>
              </TouchableOpacity>
              <View className="gap-y-3 flex-row gap-x-1 items-center">
                <Text className="text-base font-inter-regular">Je n'ai pas de compte</Text>
                <Link href={"/(auth)/register"}>
                  <Text className="text-base font-inter-bold">Cree</Text>
                </Link>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
