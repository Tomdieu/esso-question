import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  ModeleArchitecturalSchema,
} from "@/schema/index.schema";
import { ZodError } from "zod";
import { cn } from "@/lib/utils";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import Checkbox from "expo-checkbox";
import { useIdeogrammeStore } from "@/store/answer";
import { IdeoGramm } from "@/lib/IdeoGramDatabase";

type Props = {};

const choices = [
  "Intégré",
  "Dissocié deux blocs",
  "Dissocié trois blocs",
  "Système intégré ",
  "Système dissocié ",
];

const configs = ["Geo", "Bio", "Eco", "Cognitif", "Énergie", "Force"];

const ModeleArchitecturalScreen = (props: Props) => {
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
    modele_architectural: string;
    configuration: string[];
  }>({
    modele_architectural: ideogram.modelesArchitectural[index].modele_architectural||"",
    configuration: ideogram.modelesArchitectural[index].configuration || [],
  });
  const [errors, setErrors] = useState<any>({});

  const {setModeleArchitectural} = useIdeogrammeStore()

  const handleChange = (name: string, value: string) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const addConfig = (config: string) => {
    setFormValues({
      ...formValues,
      configuration: [...formValues.configuration, config],
    });
  };
  const removeConfig = (config: string) => {
    setFormValues({
      ...formValues,
      configuration: formValues.configuration.filter((conf) => conf !== config),
    });
  };

  const handleSubmit = () => {
    try {
      ModeleArchitecturalSchema.parse(formValues);
      setErrors({});
      setModeleArchitectural(formValues)
      IdeoGramm.updateModeleArchitectural(ideogram,index,formValues)
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
            <View className="flex-1 gap-5">
              <Text className="text-2xl font-inter-medium">
                Quel est votre modèle architectural ?
              </Text>

              <View className="">
                {choices.map((choice, index) => (
                  <TouchableOpacity
                    key={index}
                    className="flex-row items-center mb-2"
                    onPress={() => handleChange("modele_architectural", choice)}
                  >
                    <View
                      className={cn(
                        "h-6 w-6 rounded-xl border-gray-500 border-2 items-center justify-center",
                        {
                          "border-blue-600":
                            formValues.modele_architectural === choice,
                        }
                      )}
                    >
                      {formValues.modele_architectural === choice && (
                        <View className="h-3 w-3 rounded-md bg-blue-600" />
                      )}
                    </View>
                    <Text
                      // style={styles.radioLabel}
                      className={cn(
                        "ml-2 font-inter-medium text-neutral-800 text-lg capitalize",
                        {
                          "text-blue-600":
                            formValues.modele_architectural === choice,
                        }
                      )}
                    >
                      {choice}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              {errors.modele_architectural && (
                <View className="space-y-2">
                  <Text
                    style={{ color: "red" }}
                    className="text-sm font-inter-regular"
                  >
                    {errors.modele_architectural}
                  </Text>
                </View>
              )}
              <View className="mt-4">
                <Text className="font-inter-medium text-xl">Config : </Text>
                <View className="flex-row flex-wrap gap-3">
                  {configs.map((config, index) => (
                    <TouchableOpacity
                      onPress={() => {
                        if (formValues.configuration.includes(config)) {
                          removeConfig(config);
                        } else {
                          addConfig(config);
                        }
                      }}
                      key={index}
                      className="flex-row gap-2 mb-3 items-center"
                    >
                      <Checkbox
                        value={formValues.configuration.includes(config)}
                        onValueChange={(checked) => {
                          if (checked) {
                            addConfig(config);
                          } else {
                            removeConfig(config);
                          }
                        }}
                        className="checked:bg-blue-700"
                      />
                      <Text style={{}} className="text-xl">
                        {config}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View className="mb-2 space-y-2">
                  {errors.configuration && (
                    <Text
                      style={{ color: "red" }}
                      className="text-sm font-inter-regular"
                    >
                      {errors.configuration}
                    </Text>
                  )}
                </View>
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

export default ModeleArchitecturalScreen;
