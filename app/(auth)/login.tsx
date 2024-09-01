import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { images } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchemaType } from "@/schema/login.schema";
import { Eye, EyeOff } from "lucide-react-native";
import { useAuth } from "@/store/user";
import Toast from 'react-native-toast-message';

type Props = {};

const LoginScreen = (props: Props) => {
  const { user } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: "all",
    defaultValues:{
      username:user?.username,
      password:user?.password
    }
  });

  const [showPassword, setShowPassword] = useState(false);


  const onSubmit = ({ password, username }: LoginSchemaType) => {
    if (
      user?.username.trim() === username.trim() &&
      user.password.trim() === password.trim()
    ) {
      Toast.show({
        type: 'success', // Use your custom type
        text1: 'Success',
        text2: 'Login successfull.',
      });
      router.push("/(app)/(tabs)/questions/");
    } else {
      setError("root", {
        message: "Nom d'utilisateur ou mot de passe incorrecte", 
      });
      
      Toast.show({
        type: 'error', // Use your custom type
        text1: 'Error',
        text2: "Nom d'utilisateur ou mot de passe incorrecte",
      });
    }
  };

  return (
    <SafeAreaView className="flex h-full justify-between bg-white">
      <ScrollView
        overScrollMode="never"
        indicatorStyle="white"
        showsVerticalScrollIndicator={false}
        bounces
        className="flex-1 bg-white"
      >
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
              {errors.root && (
                <View className="my-3">
                  <Text className="text-red-400 font-inter-bold text-base">
                    {errors.root.message}
                  </Text>
                </View>
              )}

              <Controller
                control={control}
                name="username"
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className="gap-y-1 w-full">
                    <Text className="font-inter-regular text-base text-gray-700">
                      Nom d'utilisateur
                    </Text>
                    <TextInput
                      className="py-3 px-2 rounded-md border border-gray-400"
                      placeholder="Nom d'utilisateur"
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
                    <Text className="font-inter-regular text-base text-gray-700">
                      Mot de passe
                    </Text>

                    <View className="w-full relative">
                      <TextInput
                        className="py-3 px-2 rounded-md border border-gray-400 w-full"
                        placeholder="Mot de passe"
                        secureTextEntry={!showPassword}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                      <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                        className="absolute right-1 bottom-1 top-1 bg-gray-50 items-center justify-center p-2 rounded-md"
                      >
                        {showPassword ? (
                          <EyeOff className="text-gray-500 w-8 h-8" />
                        ) : (
                          <Eye className="text-gray-500 w-8 h-8" />
                        )}
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
                onPress={handleSubmit(onSubmit)}
              >
                <Text
                  style={{ fontWeight: "medium" }}
                  className="text-xl font-inter-regular text-center text-white"
                >
                  Se connecter
                </Text>
              </TouchableOpacity>
              <View className="gap-y-3 flex-row gap-x-1 items-center">
                <Text className="text-base font-inter-regular">
                  Je n'ai pas de compte
                </Text>
                <Link href={"/(auth)/register"}>
                  <Text className="text-base font-inter-bold">Créer</Text>
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
