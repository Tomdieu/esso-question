import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { OutilDevelopementSchema } from "@/schema/index.schema";
import { ZodError } from "zod";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Checkbox from "expo-checkbox";
import { useIdeogrammeStore } from "@/store/answer";

type Props = {};

const choices = [
  "service",
  "circuit de production",
  "circuit de distribution",
  "entreprise",
  "organisation",
  "marché",
  "secteur économique",
  "région",
  "programme",
  "système",
];

const OutilDevelopementScreen = (props: Props) => {
  const [formValues, setFormValues] = useState<{
    outil_developement: string[];
  }>({
    outil_developement: [],
  });
  const [errors, setErrors] = useState<any>({});

  const {setOutilDevelopement} = useIdeogrammeStore()

  const validateForm = (updatedValues: { outil_developement: string[] }) => {
    try {
      OutilDevelopementSchema.parse(updatedValues);
      setErrors({});
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

  const addOutilDevelopement = (value: string) => {
    const updatedValues = {
      ...formValues,
      outil_developement: [...formValues.outil_developement, value],
    };
    setFormValues(updatedValues);
    validateForm(updatedValues); // Live validation
  };

  const removeOutilDevelopment = (value: string) => {
    const updatedValues = {
      ...formValues,
      outil_developement: formValues.outil_developement.filter(
        (od) => od !== value
      ),
    };
    setFormValues(updatedValues);
    validateForm(updatedValues); // Live validation
  };

  const handleSubmit = () => {
    try {
      OutilDevelopementSchema.parse(formValues);
      setErrors({});
      setOutilDevelopement(formValues)
      router.push("/questions/voie_consomation");
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
    <View className="flex-1 bg-white py-2 px-3">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false} >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          className="flex-1 min-h-[95vh] justify-center items-center h-full"
        >
          <View className="flex-1">
            <View className="flex-1 gap-2 pt-2">
              <Text className="text-2xl font-inter-medium">
                Quel est votre outil de développement ?
              </Text>
              <View className="">
                {choices.map((choice, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      if (formValues.outil_developement.includes(choice)) {
                        removeOutilDevelopment(choice);
                      } else {
                        addOutilDevelopement(choice);
                      }
                    }}
                    key={index}
                    className="flex-row gap-2 mb-3 items-center"
                  >
                    <Checkbox
                      value={formValues.outil_developement.includes(choice)}
                      onValueChange={(checked) => {
                        if (checked) {
                          addOutilDevelopement(choice);
                        } else {
                          removeOutilDevelopment(choice);
                        }
                      }}
                      className="checked:bg-blue-700"
                    />
                    <Text style={{}} className="text-xl">
                      {choice}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View className="mb-3 space-y-2">
                {errors.outil_developement && (
                  <Text
                    style={{ color: "red" }}
                    className="text-sm font-inter-regular"
                  >
                    {errors.outil_developement}
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

export default OutilDevelopementScreen;
