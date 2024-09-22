import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { CreativiteSchema, CreativiteType } from "@/schema/index.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "react-native";
import { IdeoGramm } from "@/lib/IdeoGramDatabase";
import { router } from "expo-router";

type Props = {};

const CreateCreativiteProject = (props: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<CreativiteType>({
    resolver: zodResolver(CreativiteSchema),
    mode: "all",
  });

  const onSubmit = ({ project_name }: CreativiteType) => {
    if (project_name) {
      const ideogram = IdeoGramm.create(project_name);
      router.push(`/creativite/${ideogram.id}`);
    }
  };
  return (
    <View className="flex-1">
      <ScrollView
        overScrollMode="never"
        indicatorStyle="white"
        showsVerticalScrollIndicator={false}
        bounces
        className="flex-1 bg-white"
      >
        <View className="min-h-[100vh]">
          <View className="flex-1 p-2 gap-y-3 pt-9">
            <Controller
              control={control}
              name="project_name"
              render={({ field: { onChange, onBlur, value } }) => (
                <View className="gap-y-1 w-full">
                  <Text className="font-inter-regular text-gray-700 text-xl">
                    Nom du projet
                  </Text>
                  <TextInput
                    className="py-3 px-2 rounded-md border border-gray-400"
                    placeholder="Nom du projet"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                  {errors.project_name && (
                    <Text style={{ color: "red" }}>
                      {errors.project_name.message}
                    </Text>
                  )}
                </View>
              )}
            />
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              className="bg-blue-600 justify-center items-center rounded-md p-3"
            >
              <Text className="text-white font-inter-bold text-2xl">Cree</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateCreativiteProject;

const styles = StyleSheet.create({});
