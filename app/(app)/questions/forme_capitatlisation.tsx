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
import { FormeCapitatlisationSchema, ProblemSchema, VoieConsomationSchema } from "@/schema/index.schema";
import { ZodError } from "zod";
import { SafeAreaView } from "react-native-safe-area-context";
import { cn } from "@/lib/utils";
import { router } from "expo-router";
import Checkbox from "expo-checkbox";
import { useIdeogrammeStore } from "@/store/answer";

type Props = {};

const choices = [
  "Livre",
  "logiciel",
  "vidéo",
  "émission radio/TV",
  "media",
  "son",
  "couleurs",
  "figures géométriques", // géométriques
  "État liquide",
  "État solide",
  "État gazeux",
  "État intermédiaire",
  "émotions",
  "Éducation", // Éducation
  "presse écrite",
  "vocabulaire",
];

const FormeCapitatlisationScreen = (props: Props) => {
  const [formValues, setFormValues] = useState<{
    forme_capitatlisation: string;
  }>({
    forme_capitatlisation: "",
  });
  const [errors, setErrors] = useState<any>({});

  const {setFormeCapitalisation} = useIdeogrammeStore()

  const handleChange = (name: string, value: string) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    try {
      FormeCapitatlisationSchema.parse(formValues);
      setErrors({});
      setFormeCapitalisation(formValues)
      router.push("/questions/modele_architectural");
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedError = error.errors.reduce((acc: any, curr) => {
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
                Quelle est votre forme de capitalisation ?
              </Text>

              <View className="">
                {choices.map((choice, index) => (
                  <TouchableOpacity
                    key={index}
                    className="flex-row items-center mb-3"
                    onPress={() =>
                      handleChange("forme_capitatlisation", choice)
                    }
                  >
                    <View
                      className={cn(
                        "h-6 w-6 rounded-xl border-gray-500 border-2 items-center justify-center",
                        {
                          "border-blue-600":
                            formValues.forme_capitatlisation === choice,
                        }
                      )}
                    >
                      {formValues.forme_capitatlisation === choice && (
                        <View className="h-3 w-3 rounded-md bg-blue-600" />
                      )}
                    </View>
                    <Text
                      // style={styles.radioLabel}
                      className={cn(
                        "ml-2 font-inter-medium text-neutral-800 text-lg capitalize",
                        {
                          "text-blue-600":
                            formValues.forme_capitatlisation === choice,
                        }
                      )}
                    >
                      {choice}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View className="mb-3 space-y-2">
                {errors.forme_capitatlisation && (
                  <Text
                    style={{ color: "red" }}
                    className="text-sm font-inter-regular"
                  >
                    {errors.forme_capitatlisation}
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

export default FormeCapitatlisationScreen;
