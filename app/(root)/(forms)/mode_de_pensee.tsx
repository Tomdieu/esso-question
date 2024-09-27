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
import { ModeDePenseeSchema } from "@/schema/index.schema";
import { ZodError } from "zod";
import { cn } from "@/lib/utils";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { useIdeogrammeStore } from "@/store/answer";
import { useRefresh } from "@/hooks/useRefresh";
import { IdeoGramm } from "@/lib/IdeoGramDatabase";

type Props = {};

const ModeDePenseeScreen = (props: Props) => {
  const [formValues, setFormValues] = useState({
    mode_de_pensee: "",
  });
  const [errors, setErrors] = useState<any>({});

  const { setModeDePensee } = useIdeogrammeStore();
  const { setRefresh } = useRefresh();

  const { ideogramId, objectIndex } = useLocalSearchParams<{
    ideogramId: string;
    objectIndex: string;
  }>();
  const index = parseInt(objectIndex, 10);
  const ideogram = IdeoGramm.findById(ideogramId);
  if (!ideogram) {
    return <Redirect href={"/creativite"} />;
  }

  const handleChange = (name: string, value: string) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    try {
      ModeDePenseeSchema.parse(formValues);
      setErrors({});
      setModeDePensee(formValues);
      IdeoGramm.updateModeDePensee(ideogram, index, formValues);

      setRefresh(false);
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
                Choisir le mode de pensée :
              </Text>

              <View className="mb-3 space-y-2">
                <TextInput
                  placeholder="Mode de pensee..."
                  value={formValues.mode_de_pensee}
                  onChangeText={(value) =>
                    handleChange("mode_de_pensee", value)
                  }
                  className={cn(
                    "p-3 rounded-md border-gray-500 border-2 bg-white placeholder:text-2xl placeholder:font-inter-regular",
                    { "border-red-500": errors.mode_de_pensee }
                  )}
                />
                {errors.mode_de_pensee && (
                  <Text
                    style={{ color: "red" }}
                    className="text-sm font-inter-regular"
                  >
                    {errors.mode_de_pensee}
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

export default ModeDePenseeScreen;
