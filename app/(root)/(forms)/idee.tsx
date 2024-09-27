import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { IdeeSchema } from "@/schema/index.schema";
import { ZodError } from "zod";
import { cn } from "@/lib/utils";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { useIdeogrammeStore } from "@/store/answer";
import { IdeoGramm } from "@/lib/IdeoGramDatabase";
import { useRefresh } from "@/hooks/useRefresh";

type Props = {};

const ideas = [
  "Machine",
  "Véhicule",
  "Appareil",
  "Molécules",
  "Organisme",
  "Animal",
  "Végétale",
  "Solution",
  "Mélange de systèmes",
  "Procédé",
  "Processus",
  "Procédure",
  "Compétences",
  "Poste de travail",
  "Expérimentation",
];

const IdeeScreen = (props: Props) => {
  const { ideogramId, objectIndex } = useLocalSearchParams<{
    ideogramId: string;
    objectIndex: string;
  }>();
  const index = parseInt(objectIndex, 10);
  const ideogram = IdeoGramm.findById(ideogramId);
  const {setRefresh} = useRefresh()
  if (!ideogram) {
    return <Redirect href={"/creativite"} />;
  }
  const [formValues, setFormValues] = useState({
    idee: ideogram.solutions[index].solution||"",
  });
  const [errors, setErrors] = useState<any>({});

  const { setIdee } = useIdeogrammeStore();

  const handleChange = (name: string, value: string) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    try {
      IdeeSchema.parse(formValues);
      setErrors({});
      setIdee(formValues);
      IdeoGramm.updateIdee(ideogram,index,formValues)
      setRefresh(true)
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
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          className="flex-1 min-h-[95vh] justify-center items-center h-full"
        >
          <View className="flex-1">
            <View className="flex-1 gap-5 pt-2">
              <Text className="text-2xl font-inter-medium">
                Quelle est votre idée ?
              </Text>

              <View className="mb-3 space-y-2">
                <View className="">
                  {ideas.map((idea, index) => (
                    <TouchableOpacity
                      key={index}
                      className="flex-row items-center mb-2"
                      onPress={() => handleChange("idee", idea)}
                    >
                      <View
                        className={cn(
                          "h-6 w-6 rounded-xl border-gray-500 border-2 items-center justify-center",
                          {
                            "border-blue-600": formValues.idee === idea,
                          }
                        )}
                      >
                        {formValues.idee === idea && (
                          <View className="h-3 w-3 rounded-md bg-blue-600" />
                        )}
                      </View>
                      <Text
                        // style={styles.radioLabel}
                        className={cn(
                          "ml-2 font-inter-medium text-neutral-800 text-lg capitalize",
                          {
                            "text-blue-600": formValues.idee === idea,
                          }
                        )}
                      >
                        {idea}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
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
        <Text className="text-xl text-white font-inter-regular">Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IdeeScreen;
