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
import {
  ModeleArchitecturalSchema,
  ProblemSchema,
  StructurateurSchema,
  VoieConsomationSchema,
} from "@/schema/index.schema";
import { ZodError } from "zod";
import { SafeAreaView } from "react-native-safe-area-context";
import { cn } from "@/lib/utils";
import { router } from "expo-router";
import Checkbox from "expo-checkbox";
import { useIdeogrammeStore } from "@/store/answer";

type Props = {};

const choices = ["Interne", "Externe", "Mixte", "Normatif", "Modérateur"];

const natures = [
  "Bouton",
  "Pédale", // Pédale
  "Levier",
  "Manivelle",
  "Clavier",
  "Capteur",
  "Quantificateurs",
  "Interface",
];
const actions = [
  "Biochimique",
  "Biologie",
  "Chimique",
  "Émotionnelle", // Émotionnelle
  "Linguistique",
  "Mathématique", // Mathématique
  "Mentale",
  "Numérique", // Numérique
];

const StructurateurScreen = (props: Props) => {
  const [formValues, setFormValues] = useState<{
    structurateur: string;
    actions: string[];
    natures:string[]
  }>({
    structurateur: "",
    actions: [],
    natures:[]
  });
  const [errors, setErrors] = useState<any>({});

  const {setStructurateur} = useIdeogrammeStore()

  const handleChange = (name: string, value: string) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const addAction = (action: string) => {
    setFormValues({
      ...formValues,
      actions: [...formValues.actions, action],
    });
  };

  const addNature = (nature: string) => {
    setFormValues({
      ...formValues,
      natures: [...formValues.natures, nature],
    });
  };

  const removeAction = (action: string) => {
    setFormValues({
      ...formValues,
      actions: formValues.actions.filter((conf) => conf !== action),
    });
  };

  const removeNature = (nature: string) => {
    setFormValues({
      ...formValues,
      natures: formValues.actions.filter((nat) => nat !== nature),
    });
  };

  const handleSubmit = () => {
    try {
      StructurateurSchema.parse(formValues);
      setErrors({});
      setStructurateur(formValues)
      router.push("/questions/idee");
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
    <View className="flex-1 bg-white px-3">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false} >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          className="flex-1 min-h-[95vh] justify-center items-center h-full"
        >
          <View className="flex-1">
            <View className="flex-1 gap-5 pt-2">
              <Text className="text-2xl font-inter-medium">
              Quel est votre structurateur ?
              </Text>

              <View className="">
                {choices.map((choice, index) => (
                  <TouchableOpacity
                    key={index}
                    className="flex-row items-center mb-2"
                    onPress={() => handleChange("structurateur", choice)}
                  >
                    <View
                      className={cn(
                        "h-6 w-6 rounded-xl border-gray-500 border-2 items-center justify-center",
                        {
                          "border-blue-600":
                            formValues.structurateur === choice,
                        }
                      )}
                    >
                      {formValues.structurateur === choice && (
                        <View className="h-3 w-3 rounded-md bg-blue-600" />
                      )}
                    </View>
                    <Text
                      // style={styles.radioLabel}
                      className={cn(
                        "ml-2 font-inter-medium text-neutral-800 text-lg capitalize",
                        {
                          "text-blue-600":
                            formValues.structurateur === choice,
                        }
                      )}
                    >
                      {choice}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              {errors.structurateur && (
                <View className="space-y-2">
                  <Text
                    style={{ color: "red" }}
                    className="text-sm font-inter-regular"
                  >
                    {errors.structurateur}
                  </Text>
                </View>
              )}
              <View className="mt-4">
                <Text className="font-inter-medium text-xl">Action : </Text>
                <View className="flex-row flex-wrap gap-3">
                  {actions.map((action, index) => (
                    <TouchableOpacity
                      onPress={() => {
                        if (formValues.actions.includes(action)) {
                          removeAction(action);
                        } else {
                          addAction(action);
                        }
                      }}
                      key={index}
                      className="flex-row gap-2 mb-3 items-center"
                    >
                      <Checkbox
                        value={formValues.actions.includes(action)}
                        onValueChange={(checked) => {
                          if (checked) {
                            addAction(action);
                          } else {
                            removeAction(action);
                          }
                        }}
                        className="checked:bg-blue-700"
                      />
                      <Text style={{}} className="text-xl">
                        {action}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View className="mb-2 space-y-2">
                  {errors.actions && (
                    <Text
                      style={{ color: "red" }}
                      className="text-sm font-inter-regular"
                    >
                      {errors.actions}
                    </Text>
                  )}
                </View>
              </View>
              <View className="mt-4">
                <Text className="font-inter-medium text-xl">Natures : </Text>
                <View className="flex-row flex-wrap gap-3">
                  {natures.map((nature, index) => (
                    <TouchableOpacity
                      onPress={() => {
                        if (formValues.natures.includes(nature)) {
                          removeNature(nature);
                        } else {
                          addNature(nature);
                        }
                      }}
                      key={index}
                      className="flex-row gap-2 mb-3 items-center"
                    >
                      <Checkbox
                        value={formValues.natures.includes(nature)}
                        onValueChange={(checked) => {
                          if (checked) {
                            addNature(nature);
                          } else {
                            removeNature(nature);
                          }
                        }}
                        className="checked:bg-blue-700"
                      />
                      <Text style={{}} className="text-xl">
                        {nature}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View className="mb-2 space-y-2">
                  {errors.natures && (
                    <Text
                      style={{ color: "red" }}
                      className="text-sm font-inter-regular"
                    >
                      {errors.natures}
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
        <Text className="text-xl text-white font-inter-regular">Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StructurateurScreen;
