import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIdeogrammeStore } from "@/store/answer";
import { router } from "expo-router";
import Seperator from "@/components/Seperator";

const OutputScreen = () => {
  const {
    problem,
    solution,
    resultat,
    outil_developement,
    voie_consomation,
    forme_capitalisation,
    modele_architectural,
    structurateur,
    idee,
    mode_de_pensee,
  } = useIdeogrammeStore();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-2 py-3">
        <View className="">
          <Text className="font-inter-bold text-4xl">Response</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/(app)/(tabs)/questions/problem",
              params: {
                problem: problem?.problem,
              },
            })
          }
        >
          <View className="mt-5 p-2 px-0 ">
            <Text className="text-2xl capitalize">Problem </Text>
            <Text className="text-stone-600 text-lg">{problem?.problem}</Text>
          </View>
        </TouchableOpacity>
        <Seperator />
        <TouchableOpacity
          onPress={() => router.push("/(app)/(tabs)/questions/solution")}
        >
          <View className="mt-1 p-2 px-0">
            <Text className="text-2xl capitalize">Solution </Text>
            <Text className="text-stone-600 text-lg">{solution?.solution}</Text>
          </View>
        </TouchableOpacity>
        <Seperator />

        <TouchableOpacity
          onPress={() => router.push("/(app)/(tabs)/questions/resultat")}
        >
          <View className="mt-1 p-2 px-0">
            <Text className="text-2xl capitalize">Resultat </Text>
            <Text className="text-stone-600 text-lg">{resultat?.resultat}</Text>
          </View>
        </TouchableOpacity>
        <Seperator />

        <TouchableOpacity
          onPress={() =>
            router.push("/(app)/(tabs)/questions/outil_developement")
          }
        >
          <View className="mt-1 p-2 px-0">
            <Text className="text-2xl capitalize">Outil developement </Text>
            <Text className="text-stone-600 text-lg">
              {outil_developement?.outil_developement}
            </Text>
          </View>
        </TouchableOpacity>
        <Seperator />

        <TouchableOpacity
          onPress={() =>
            router.push("/(app)/(tabs)/questions/voie_consomation")
          }
        >
          <View className="mt-1 p-2 px-0">
            <Text className="text-2xl capitalize">voie de consommation </Text>
            <Text className="text-stone-600 text-lg">
              {voie_consomation?.voie_consomation.join(", ")}
            </Text>
          </View>
        </TouchableOpacity>
        <Seperator />

        <TouchableOpacity
          onPress={() =>
            router.push("/(app)/(tabs)/questions/forme_capitatlisation")
          }
        >
          <View className="mt-1 p-2 px-0">
            <Text className="text-2xl capitalize">
              forme de capitalisation{" "}
            </Text>
            <Text className="text-stone-600 text-lg">
              {forme_capitalisation?.forme_capitatlisation}
            </Text>
          </View>
        </TouchableOpacity>
        <Seperator />

        <TouchableOpacity
          onPress={() =>
            router.push("/(app)/(tabs)/questions/modele_architectural")
          }
        >
          <View className="mt-1 p-2 px-0">
            <Text className="text-2xl capitalize">modèle architectural </Text>
            <Text className="text-stone-600 text-lg">
              {modele_architectural?.modele_architectural}
            </Text>
            <Text className="text-2xl capitalize">Configuration </Text>
            <Text className="text-stone-600 text-lg">
              {modele_architectural?.configuration.join(", ")}
            </Text>
          </View>
        </TouchableOpacity>
        <Seperator />

        <TouchableOpacity
          onPress={() => router.push("/(app)/(tabs)/questions/structurateur")}
        >
          <View className="mt-1 p-2 px-0">
            <Text className="text-2xl capitalize">structurateur </Text>
            <Text className="text-stone-600 text-lg">
              {structurateur?.structurateur}
            </Text>
            <Text className="text-2xl capitalize">Nature </Text>
            <Text className="text-stone-600 text-lg">
              {structurateur?.natures.join(", ")}
            </Text>
            <Text className="text-2xl capitalize">Action </Text>
            <Text className="text-stone-600 text-lg">
              {structurateur?.actions.join(", ")}
            </Text>
          </View>
        </TouchableOpacity>
        <Seperator />

        <TouchableOpacity
          onPress={() => router.push("/(app)/(tabs)/questions/idee")}
        >
          <View className="mt-1 p-2 px-0">
            <Text className="text-2xl capitalize">Idee </Text>
            <Text className="text-stone-600 text-lg">{idee?.idee}</Text>
          </View>
        </TouchableOpacity>
        <Seperator />

        <TouchableOpacity
          onPress={() => router.push("/(app)/(tabs)/questions/mode_de_pensee")}
        >
          <View className="mt-1 mb-1 p-2 px-0">
            <Text className="text-2xl capitalize">mode de pensée </Text>
            <Text className="text-stone-600 text-lg">
              {mode_de_pensee?.mode_de_pensee}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OutputScreen;
