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
import { ResultatSchema } from "@/schema/index.schema";
import { ZodError } from "zod";
import { cn } from "@/lib/utils";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { useIdeogrammeStore } from "@/store/answer";
import { IdeoGramm } from "@/lib/IdeoGramDatabase";

type Props = {};

const Resultatscreen = (props: Props) => {
  const { ideogramId, objectIndex } = useLocalSearchParams<{
    ideogramId: string;
    objectIndex: string;
  }>();
  const index = parseInt(objectIndex, 10);
  const ideogram = IdeoGramm.findById(ideogramId);
  if (!ideogram) {
    return <Redirect href={"/creativite"} />;
  }
  const [formValues, setFormValues] = useState({
    resultat: ideogram.resultats[index].resultat || "",
  });
  const [errors, setErrors] = useState<any>({});

  const {setResultat} = useIdeogrammeStore()

  const handleChange = (name: string, value: string) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });

    // Live validation on change
    try {
      ResultatSchema.parse({ [name]: value });
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
      ResultatSchema.parse(formValues);
      setErrors({});
      setResultat(formValues)
      IdeoGramm.updateResultat(ideogram,index,formValues)
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
          className="flex-1 justify-center items-center h-full"
        >
          <View className="flex-1">
            <View className="flex-1 gap-5 pt-4">
              <Text className="text-2xl font-inter-medium">
                Quel est votre résultat ?
              </Text>

              <View className="mb-3 space-y-2">
                <TextInput
                  placeholder="Resultat..."
                  value={formValues.resultat}
                  onChangeText={(value) => handleChange("resultat", value)}
                  className={cn(
                    "p-3 rounded-md border-gray-500 border-2 bg-white placeholder:text-2xl placeholder:font-inter-regular",
                    { "border-red-500": errors.resultat }
                  )}
                  verticalAlign="auto"
                  numberOfLines={3}
                  multiline
                />
                {errors.resultat && (
                  <Text
                    style={{ color: "red" }}
                    className="text-sm font-inter-regular"
                  >
                    {errors.resultat}
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

export default Resultatscreen;
