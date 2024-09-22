import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { VoieConsomationSchema } from "@/schema/index.schema";
import { ZodError } from "zod";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import Checkbox from "expo-checkbox";
import { useIdeogrammeStore } from "@/store/answer";
import { IdeoGramm } from "@/lib/IdeoGramDatabase";

type Props = {};

const choices = [
  "esprit",
  "yeux",
  "nez",
  "cerveau",
  "peau",
  "langue",
  "oreilles",
  "organes",
  "nature",
  "Consciences",
  "personnalité",
];

const VoieConsomationScreen = (props: Props) => {
  const { ideogramId, objectIndex } = useLocalSearchParams<{
    ideogramId: string;
    objectIndex: string;
  }>();
  const index = parseInt(objectIndex, 10);
  const ideogram = IdeoGramm.findById(ideogramId);
  if (!ideogram) {
    return <Redirect href={"/creativite"} />;
  }
  const [formValues, setFormValues] = useState<{ voie_consomation: string[] }>({
    voie_consomation:ideogram.voiesConsomation[index].voie_consomation|| [],
  });
  const [errors, setErrors] = useState<any>({});

  const {setVoieConsomation} = useIdeogrammeStore()

  const validateForm = (updatedValues: { voie_consomation: string[] }) => {
    try {
      VoieConsomationSchema.parse(updatedValues);
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

  const addVoieConsomation = (value: string) => {
    const updatedValues = {
      ...formValues,
      voie_consomation: [...formValues.voie_consomation, value],
    };
    setFormValues(updatedValues);
    validateForm(updatedValues); // Live validation
  };

  const removeVoieConsomation = (value: string) => {
    const updatedValues = {
      ...formValues,
      voie_consomation: formValues.voie_consomation.filter(
        (od) => od !== value
      ),
    };
    setFormValues(updatedValues);
    validateForm(updatedValues); // Live validation
  };


  const handleSubmit = () => {
    try {
      VoieConsomationSchema.parse(formValues);
      setErrors({});
      setVoieConsomation(formValues)
      IdeoGramm.updateVoieConsomation(ideogram,index,formValues)
      router.back()
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
            <View className="flex-1 gap-5 pt-2">
              <Text className="text-2xl font-inter-medium">
                Quelle est la voie de consommation ?
              </Text>

              <View className="">
                {choices.map((choice, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      if (formValues.voie_consomation.includes(choice)) {
                        removeVoieConsomation(choice);
                      } else {
                        addVoieConsomation(choice);
                      }
                    }}
                    key={index}
                    className="flex-row gap-2 mb-3 items-center"
                  >
                    <Checkbox
                      value={formValues.voie_consomation.includes(choice)}
                      onValueChange={(checked) => {
                        if (checked) {
                          addVoieConsomation(choice);
                        } else {
                          removeVoieConsomation(choice);
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
                {errors.voie_consomation && (
                  <Text
                    style={{ color: "red" }}
                    className="text-sm font-inter-regular"
                  >
                    {errors.voie_consomation}
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
        <Text className="text-xl text-white font-inter-regular">Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VoieConsomationScreen;
