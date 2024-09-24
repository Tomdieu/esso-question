import { IdeoGrammeType } from "@/schema/index.schema";
import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

interface IdeoGrammeTableProps {
  ideogram: IdeoGrammeType;
}

const IdeoGrammeTable: React.FC<IdeoGrammeTableProps> = ({ ideogram }) => {
  const tableHead = [
    "Problems",
    "Solutions",
    "Results",
    "Tools Development",
    "Consumption Ways",
    "Capitalization Forms",
    "Architectural Models",
    "Structurers",
    "Ideas",
    "Modes of Thinking",
  ];

  const rowCount = 4; // Define how many rows we need
  const tableData = Array.from({ length: rowCount }, (_, index) => [
    ideogram.problems[index]?.problem || "",
    ideogram.solutions[index]?.solution || "",
    ideogram.resultats[index]?.resultat || "",
    ideogram.outilsDevelopement[index]?.outil_developement.join(", ") || "",
    ideogram.voiesConsomation[index]?.voie_consomation.join(", ") || "",
    ideogram.formesCapitatlisation[index]?.forme_capitatlisation || "",
    ideogram.modelesArchitectural[index]?.modele_architectural || "",
    ideogram.structurateurs[index]?.structurateur || "",
    ideogram.idees[index]?.idee || "",
    ideogram.modesDePensee[index]?.mode_de_pensee || "",
  ]);

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <ScrollView>
          <View>
            <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
              {/* Table headers with equal column widths */}
              <Row
                data={tableHead}
                style={styles.header}
                textStyle={styles.headerText}
                widthArr={Array(tableHead.length).fill(150)} // Set equal width for all columns
              />
              {/* Table rows */}
              <Rows
                data={tableData}
                textStyle={styles.text as object}  // Ensure textStyle is an object
                widthArr={Array(tableHead.length).fill(150)} // Set equal width for all columns
              />
            </Table>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default IdeoGrammeTable;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
  },
  header: {
    height: 40,
    backgroundColor: "#f1f1f1",
  },
  headerText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
    padding: 8,
  },
});
