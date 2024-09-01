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
  import { IdeeSchema, ProblemSchema } from "@/schema/index.schema";
  import { ZodError } from "zod";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { cn } from "@/lib/utils";
  import { router } from "expo-router";
import { useIdeogrammeStore } from "@/store/answer";
  
  type Props = {};
  
  const IdeeScreen = (props: Props) => {
    const [formValues, setFormValues] = useState({
      idee: "",
    });
    const [errors, setErrors] = useState<any>({});

    const {setIdee} = useIdeogrammeStore()
  
    const handleChange = (name: string, value: string) => {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };
  
    const handleSubmit = () => {
      try {
        IdeeSchema.parse(formValues);
        setErrors({})
        setIdee(formValues)
        router.push("/questions/mode_de_pensee")
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
      <SafeAreaView className="flex-1 bg-white py-4 px-3">
        <ScrollView className="flex-1">
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            className="flex-1 min-h-[95vh] justify-center items-center h-full"
          >
            <View className="flex-1">
              <View className="flex-1 gap-5 pt-8">
                <Text className="text-2xl font-inter-medium">
                Quelle est votre idée ?
                </Text>
  
                <View className="mb-3 space-y-2">
                  <TextInput
                    placeholder="Idee..."
                    value={formValues.idee}
                    onChangeText={(value) => handleChange("idee", value)}
                    className={cn(
                      "p-3 rounded-md border-gray-500 border-2 bg-white placeholder:text-2xl placeholder:font-inter-regular",
                      { "border-red-500": errors.idee }
                    )}
                  />
                  {errors.idee && (
                    <Text
                      style={{ color: "red" }}
                      className="text-sm font-inter-regular"
                    >
                      {errors.idee}
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
      </SafeAreaView>
    );
  };
  
  export default IdeeScreen;
  