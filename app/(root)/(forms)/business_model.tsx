import { useRefresh } from "@/hooks/useRefresh";
import { IdeoGramm } from "@/lib/IdeoGramDatabase";
import { cn } from "@/lib/utils";
import { EcodevSchema, EcodevType } from "@/schema/index.schema";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Keyboard, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { ZodError } from "zod";
export default function BusinessModelScreen() {

    const { ideogramId } = useLocalSearchParams<{
        ideogramId: string;
    }>();

    const ideogram = IdeoGramm.findById(ideogramId);
    const { setRefresh } = useRefresh()
    if (!ideogram) {
        return <Redirect href={"/creativite"} />;
    }

    const [errors, setErrors] = useState<any>({});

    const [formValues, setFormValues] = useState<EcodevType>(ideogram.ecodev)

    const handleChange = (name: string, value: string) => {
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = () => { }

    return (
        <View className="flex-1 bg-white py-4 px-3">
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                    className="flex-1 min-h-[95vh] justify-center items-center h-full"
                ></TouchableWithoutFeedback>
            </ScrollView>
            <TouchableOpacity
                onPress={handleSubmit}
                className="w-full bg-blue-500 items-center justify-center py-4 rounded-md"
            >
                <Text className="text-xl text-white font-inter-regular">Save</Text>
            </TouchableOpacity>
        </View>
    )
}