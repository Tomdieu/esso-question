import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { FormeCapitatlisationSchema } from "@/schema/index.schema";
import { ZodError } from "zod";
import { cn } from "@/lib/utils";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { useIdeogrammeStore } from "@/store/answer";
import { IdeoGramm } from "@/lib/IdeoGramDatabase";

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
  const { ideogramId, objectIndex } = useLocalSearchParams<{
    ideogramId: string;
    objectIndex: string;
  }>();
  const index = parseInt(objectIndex, 10);
  const ideogram = IdeoGramm.findById(ideogramId);
  if (!ideogram) {
    return <Redirect href={"/creativite"} />;
  }
  const [formValues, setFormValues] = useState<{
    forme_capitatlisation: string;
  }>({
    forme_capitatlisation:
      ideogram.formesCapitatlisation[index].forme_capitatlisation || "",
  });
  const [errors, setErrors] = useState<any>({});

  const { setFormeCapitalisation } = useIdeogrammeStore();

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
      setFormeCapitalisation(formValues);
      IdeoGramm.updateFormeCapitatlisation(ideogram, index, formValues);
      router.back();
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
    <View className="flex-1 bg-white px-3 pb-2">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          className="flex-1 min-h-[95vh] justify-center items-center h-full"
        >
          <View className="flex-1">
            <View className="flex-1 gap-5 pt-2">
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
        <Text className="text-xl text-white font-inter-regular">Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormeCapitatlisationScreen;
