import {
    View,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React, { useState } from "react";
  import { ProblemSchema, SolutionSchema } from "@/schema/index.schema";
  import { ZodError } from "zod";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { cn } from "@/lib/utils";
import { router } from "expo-router";
import { useIdeogrammeStore } from "@/store/answer";
  
  type Props = {};
  
  const SolutionScreen = (props: Props) => {
    const [formValues, setFormValues] = useState({
      solution: "",
    });
    const [errors, setErrors] = useState<any>({});

    const {setSolution} = useIdeogrammeStore()
  
    const handleChange = (name: string, value: string) => {
      setFormValues({
        ...formValues,
        [name]: value,
      });

      // Live validation on change
      try {
        SolutionSchema.parse({ [name]: value });
        setErrors((prevErrors: any) => ({
          ...prevErrors,
          [name]: undefined, // Clear the error for this field if it's valid
        }));
      } catch (error) {
        if (error instanceof ZodError) {
          const formattedError = error.errors.reduce((acc: any, curr) => {
            if (curr.path[0] === name) {
              acc[curr.path[0]] = curr.message;
            }
            return acc;
          }, {});
          setErrors((prevErrors: any) => ({
            ...prevErrors,
            ...formattedError,
          }));
        }
      }
    };
  
    const handleSubmit = () => {
      try {
        SolutionSchema.parse(formValues);
        setErrors({})
        setSolution(formValues)
        router.push("/questions/resultat")
      } catch (error) {
        if (error instanceof ZodError) {
          const formattedError = error.errors.reduce((acc:any, curr) => {
            acc[curr.path[0]] = curr.message;
            return acc;
          }, {});
          setErrors(formattedError);
        }
      }
    };
  
    return (
      <View className="flex-1 bg-white py-2 px-3">
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false} >
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            className="flex-1 min-h-[95vh] justify-center items-center h-full"
          >
            <View className="flex-1">
              <View className="flex-1 gap-5 pt-4">
                <Text className="text-2xl font-inter-medium">
                Quelle est votre solution ?
                </Text>
  
                <View className="mb-3 space-y-2">
                  <TextInput
                    placeholder="Solution..."
                    value={formValues.solution}
                    onChangeText={(value) => handleChange("solution", value)}
                    className={cn(
                      "p-3 rounded-md border-gray-500 border-2 bg-white placeholder:text-2xl placeholder:font-inter-regular",
                      { "border-red-500": errors.solution }
                    )}
                  />
                  {errors.solution && (
                    <Text
                      style={{ color: "red" }}
                      className="text-sm font-inter-regular"
                    >
                      {errors.solution}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
        <TouchableOpacity
          onPress={handleSubmit}
          className="w-full bg-blue-500 items-center justify-center py-4 rounded-md"
        >
          <Text className="text-xl text-white font-inter-regular">Next</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default SolutionScreen;
  