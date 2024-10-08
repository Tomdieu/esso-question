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
import { registerSchema, RegisterSchemaType } from "@/schema/login.schema";
import { Eye, EyeOff } from "lucide-react-native";
import { useAuth } from "@/store/user";

type Props = {};

const RegisterScreen = (props: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    mode: "all",
  });

  const [showPassword, setShowPassword] = useState(false);

  const {setUser} = useAuth()

  const onSubmit = ({username,password}: RegisterSchemaType) => {
    setUser({
      username:username.trim(),
      password:password.trim()
    })
    router.push("/login")
    ToastAndroid.showWithGravity("Compte cree avec success",3000,ToastAndroid.TOP)
  };

  return (
    <SafeAreaView className="flex h-full jus)tify-between bg-white ">
      <ScrollView
        bounces
        showsVerticalScrollIndicator={false}
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
              <Controller
                control={control}
                name="username"
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className="gap-y-1 w-full">
                    <Text className="font-inter-regular text-base text-gray-600">
                      Nom d'utilisateur
                    </Text>
                    <TextInput
                      className="py-3 px-2 rounded-md border border-gray-400"
                      placeholder="Nom d'utilisateur"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      inputMode="text"
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
                    <Text className="font-inter-regular text-base text-gray-600">
                      Mot de passe
                    </Text>

                    <View className="w-full relative">
                      <TextInput
                        className="py-3 px-2 rounded-md border w-full border-gray-400"
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

              <Controller
                control={control}
                name="confirm_password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className="gap-y-1 w-full">
                    <Text className="font-inter-regular text-base text-gray-600 ">
                      Confirmer le mot de passe
                    </Text>
                    <View className="w-full relative">
                      <TextInput
                        className="py-3 px-2 rounded-md border border-gray-400"
                        placeholder="Confirmer le mot de passe"
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
                  S'inscrire
                </Text>
              </TouchableOpacity>
              <View className="gap-y-3 flex-row gap-x-1 items-center">
                <Text className="text-base font-inter-regular">
                  Vous avez déjà un compte ?
                </Text>
                <Link href={"/(auth)/login"}>
                  <Text className="text-base font-inter-bold">
                    Se connecter
                  </Text>
                </Link>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
