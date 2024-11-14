import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useIdeoGramStore } from "@/store/ideogram";
import { router } from "expo-router";

type Props = {};

const CreativiteScreen = (props: Props) => {
  const { ideograms } = useIdeoGramStore();
  return (
    <View className="bg-slate-50 flex-1">
      <StatusBar style="dark" />
      {ideograms.length > 0 ? (
        <View className="flex-1 p-2 gap-y-5">
          <Text className="text-2xl">Liste des Creativite</Text>
          <ScrollView>
            {ideograms.map((ideogram) => (
              <TouchableOpacity key={ideogram.id} onPress={()=>router.push(`/creativite/${ideogram.id}`)} className="bg-blue-500 p-3 rounded-md">
                <Text className="text-2xl text-stone-50">{ideogram.project_name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity
            onPress={() => router.push("/creativite/create")}
            className="bg-blue-500 p-3 rounded-md justify-center items-center"
          >
            <Text className="text-white text-2xl font-inter-bold">Crée</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View className="flex-1 justify-center px-2 gap-3">
          <Text className="text-3xl text-center">Pas de Creativite</Text>
          <TouchableOpacity
            onPress={() => router.push("/creativite/create")}
            className="bg-blue-500 p-3 rounded-md justify-center items-center"
          >
            <Text className="text-black text-2xl font-inter-bold">Crée</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CreativiteScreen;

const styles = StyleSheet.create({});
