import { useRefresh } from "@/hooks/useRefresh";
import { IdeoGramm } from "@/lib/IdeoGramDatabase";
import { cn } from "@/lib/utils";
import { EcodevSchema, EcodevType } from "@/schema/index.schema";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Keyboard, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { ZodError } from "zod";

export default function EcodevScreen() {
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

    const handleSubmit = () => {
        try {
            EcodevSchema.parse(formValues)
            setErrors({})
            if (ideogram) {
                IdeoGramm.updateEcodev(ideogram, formValues)
                setRefresh(true)
            }
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

    }

    return (
        <View className="flex-1 bg-white py-4 px-3">
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                    className="flex-1 min-h-[95vh] justify-center items-center h-full"
                >
                    <View className="flex-1">
                        <View className="flex-1 gap-1 pt-2">
                            <Text className="text-2xl font-inter-medium">
                                Entreprise de production
                            </Text>
                            <View className="mb-3 space-y-2">
                                <TextInput
                                    placeholder="Entreprise de production..."
                                    value={formValues.entreprise_production}
                                    onChangeText={(value) => handleChange("entreprise_production", value)}
                                    className={cn(
                                        "p-3 rounded-md border-gray-500 border-2 bg-white placeholder:text-2xl placeholder:font-inter-regular",
                                        { "border-red-500": errors.entreprise_production }
                                    )}
                                />
                                {errors.entreprise_production && (
                                    <Text
                                        style={{ color: "red" }}
                                        className="text-sm font-inter-regular"
                                    >
                                        {errors.entreprise_production}
                                    </Text>
                                )}
                            </View>
                        </View>
                        <View className="flex-1 gap-1 pt-2">
                            <Text className="text-2xl font-inter-medium">
                                Entreprise de distribution
                            </Text>
                            <View className="mb-3 space-y-2">
                                <TextInput
                                    placeholder="Entreprise de production..."
                                    value={formValues.entreprise_distribution}
                                    onChangeText={(value) => handleChange("entreprise_distribution", value)}
                                    className={cn(
                                        "p-3 rounded-md border-gray-500 border-2 bg-white placeholder:text-2xl placeholder:font-inter-regular",
                                        { "border-red-500": errors.entreprise_distribution }
                                    )}
                                />
                                {errors.entreprise_distribution && (
                                    <Text
                                        style={{ color: "red" }}
                                        className="text-sm font-inter-regular"
                                    >
                                        {errors.entreprise_distribution}
                                    </Text>
                                )}
                            </View>
                        </View>
                        <View className="flex-1 gap-1 pt-2">
                            <Text className="text-2xl font-inter-medium">
                                Entreprise de consomation
                            </Text>
                            <View className="mb-3 space-y-2">
                                <TextInput
                                    placeholder="Entreprise de production..."
                                    value={formValues.entreprise_consomation}
                                    onChangeText={(value) => handleChange("entreprise_consomation", value)}
                                    className={cn(
                                        "p-3 rounded-md border-gray-500 border-2 bg-white placeholder:text-2xl placeholder:font-inter-regular",
                                        { "border-red-500": errors.entreprise_consomation }
                                    )}
                                />
                                {errors.entreprise_consomation && (
                                    <Text
                                        style={{ color: "red" }}
                                        className="text-sm font-inter-regular"
                                    >
                                        {errors.entreprise_consomation}
                                    </Text>
                                )}
                            </View>
                        </View>
                        <View className="flex-1 gap-1 pt-2">
                            <Text className="text-2xl font-inter-medium">
                                Entreprise de dechet
                            </Text>
                            <View className="mb-3 space-y-2">
                                <TextInput
                                    placeholder="Entreprise de production..."
                                    value={formValues.entreprise_dechet}
                                    onChangeText={(value) => handleChange("entreprise_dechet", value)}
                                    className={cn(
                                        "p-3 rounded-md border-gray-500 border-2 bg-white placeholder:text-2xl placeholder:font-inter-regular",
                                        { "border-red-500": errors.entreprise_dechet }
                                    )}
                                />
                                {errors.entreprise_dechet && (
                                    <Text
                                        style={{ color: "red" }}
                                        className="text-sm font-inter-regular"
                                    >
                                        {errors.entreprise_dechet}
                                    </Text>
                                )}
                            </View>
                        </View>
                        <View className="flex-1 gap-1 pt-2">
                            <Text className="text-2xl font-inter-medium">
                                Partenaire d'innovation
                            </Text>
                            <View className="mb-3 space-y-2">
                                <TextInput
                                    placeholder="Partenaire d'innovation..."
                                    value={formValues.partenaires_innovation}
                                    onChangeText={(value) => handleChange("partenaires_innovation", value)}
                                    className={cn(
                                        "p-3 rounded-md border-gray-500 border-2 bg-white placeholder:text-2xl placeholder:font-inter-regular",
                                        { "border-red-500": errors.partenaires_innovation }
                                    )}
                                />
                                {errors.partenaires_innovation && (
                                    <Text
                                        style={{ color: "red" }}
                                        className="text-sm font-inter-regular"
                                    >
                                        {errors.partenaires_innovation}
                                    </Text>
                                )}
                            </View>
                        </View>
                        <View className="flex-1 gap-1 pt-2">
                            <Text className="text-2xl font-inter-medium">
                                Partenaire de distribution
                            </Text>
                            <View className="mb-3 space-y-2">
                                <TextInput
                                    placeholder="Partenaire de distribution..."
                                    value={formValues.partenaires_distribution}
                                    onChangeText={(value) => handleChange("partenaires_distribution", value)}
                                    className={cn(
                                        "p-3 rounded-md border-gray-500 border-2 bg-white placeholder:text-2xl placeholder:font-inter-regular",
                                        { "border-red-500": errors.partenaires_distribution }
                                    )}
                                />
                                {errors.partenaires_distribution && (
                                    <Text
                                        style={{ color: "red" }}
                                        className="text-sm font-inter-regular"
                                    >
                                        {errors.partenaires_distribution}
                                    </Text>
                                )}
                            </View>
                        </View>
                        <View className="flex-1 gap-1 pt-2">
                            <Text className="text-2xl font-inter-medium">
                                Partenaire juridiques
                            </Text>
                            <View className="mb-3 space-y-2">
                                <TextInput
                                    placeholder="Partenaire juridiques..."
                                    value={formValues.partenaires_juridiques}
                                    onChangeText={(value) => handleChange("partenaires_juridiques", value)}
                                    className={cn(
                                        "p-3 rounded-md border-gray-500 border-2 bg-white placeholder:text-2xl placeholder:font-inter-regular",
                                        { "border-red-500": errors.partenaires_juridiques }
                                    )}
                                />
                                {errors.partenaires_juridiques && (
                                    <Text
                                        style={{ color: "red" }}
                                        className="text-sm font-inter-regular"
                                    >
                                        {errors.partenaires_juridiques}
                                    </Text>
                                )}
                            </View>
                        </View>
                        <View className="flex-1 gap-1 pt-2">
                            <Text className="text-2xl font-inter-medium">
                                Partenaire de production
                            </Text>
                            <View className="mb-3 space-y-2">
                                <TextInput
                                    placeholder="Partenaire de production..."
                                    value={formValues.partenaires_production}
                                    onChangeText={(value) => handleChange("partenaires_production", value)}
                                    className={cn(
                                        "p-3 rounded-md border-gray-500 border-2 bg-white placeholder:text-2xl placeholder:font-inter-regular",
                                        { "border-red-500": errors.partenaires_production }
                                    )}
                                />
                                {errors.partenaires_production && (
                                    <Text
                                        style={{ color: "red" }}
                                        className="text-sm font-inter-regular"
                                    >
                                        {errors.partenaires_production}
                                    </Text>
                                )}
                            </View>
                        </View>
                        <View className="flex-1 gap-1 pt-2">
                            <Text className="text-2xl font-inter-medium">
                                Partenaire de transport
                            </Text>
                            <View className="mb-3 space-y-2">
                                <TextInput
                                    placeholder="Partenaire de transport..."
                                    value={formValues.partenaires_transport}
                                    onChangeText={(value) => handleChange("partenaires_transport", value)}
                                    className={cn(
                                        "p-3 rounded-md border-gray-500 border-2 bg-white placeholder:text-2xl placeholder:font-inter-regular",
                                        { "border-red-500": errors.partenaires_transport }
                                    )}
                                />
                                {errors.partenaires_transport && (
                                    <Text
                                        style={{ color: "red" }}
                                        className="text-sm font-inter-regular"
                                    >
                                        {errors.partenaires_transport}
                                    </Text>
                                )}
                            </View>
                        </View>
                        <View className="flex-1 gap-1 pt-2">
                            <Text className="text-2xl font-inter-medium">
                                Partenaire financiers
                            </Text>
                            <View className="mb-3 space-y-2">
                                <TextInput
                                    placeholder="Partenaire financiers..."
                                    value={formValues.partenaires_financiers}
                                    onChangeText={(value) => handleChange("partenaires_financiers", value)}
                                    className={cn(
                                        "p-3 rounded-md border-gray-500 border-2 bg-white placeholder:text-2xl placeholder:font-inter-regular",
                                        { "border-red-500": errors.partenaires_financiers }
                                    )}
                                />
                                {errors.partenaires_financiers && (
                                    <Text
                                        style={{ color: "red" }}
                                        className="text-sm font-inter-regular"
                                    >
                                        {errors.partenaires_financiers}
                                    </Text>
                                )}
                            </View>
                        </View>
                        <View className="flex-1 gap-1 pt-2">
                            <Text className="text-2xl font-inter-medium">
                                Partenaire commerciax
                            </Text>
                            <View className="mb-3 space-y-2">
                                <TextInput
                                    placeholder="Partenaire commerciax..."
                                    value={formValues.partenaires_commerciax}
                                    onChangeText={(value) => handleChange("partenaires_commerciax", value)}
                                    className={cn(
                                        "p-3 rounded-md border-gray-500 border-2 bg-white placeholder:text-2xl placeholder:font-inter-regular",
                                        { "border-red-500": errors.partenaires_commerciax }
                                    )}
                                />
                                {errors.partenaires_commerciax && (
                                    <Text
                                        style={{ color: "red" }}
                                        className="text-sm font-inter-regular"
                                    >
                                        {errors.partenaires_commerciax}
                                    </Text>
                                )}
                            </View>
                        </View>
                        <View className="flex-1 gap-1 pt-2">
                            <Text className="text-2xl font-inter-medium">
                                Autres partenaire
                            </Text>
                            <View className="mb-3 space-y-2">
                                <TextInput
                                    placeholder="Autres partenaire..."
                                    value={formValues.autres_partenaires}
                                    onChangeText={(value) => handleChange("autres_partenaires", value)}
                                    className={cn(
                                        "p-3 rounded-md border-gray-500 border-2 bg-white placeholder:text-2xl placeholder:font-inter-regular",
                                        { "border-red-500": errors.autres_partenaires }
                                    )}
                                />
                                {errors.autres_partenaires && (
                                    <Text
                                        style={{ color: "red" }}
                                        className="text-sm font-inter-regular"
                                    >
                                        {errors.autres_partenaires}
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
    )
}