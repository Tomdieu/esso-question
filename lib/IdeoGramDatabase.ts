import { v4 as uuidv4 } from "uuid";

import {
  IdeoGrammeType,
  ProblemSchemaType,
  SolutionType,
  ResultatType,
  OutilDevelopementType,
  VoieConsomationType,
  FormeCapitatlisationType,
  ModeDePenseeType,
  StructurateurType,
  IdeeType,
  ModeleArchitecturalType,
} from "@/schema/index.schema";
import { useIdeoGramStore } from "@/store/ideogram";


export class IdeoGramm {
  static create(): IdeoGrammeType {
    const newIdeoGramme: IdeoGrammeType = {
      id: uuidv4(),
      problems: this.createProblems(4),
      solutions: this.createSolutions(4),
      resultats: this.createResultats(4),
      outilsDevelopement: this.createOutilsDevelopement(4),
      voiesConsomation: this.createVoiesConsomation(4),
      formesCapitatlisation: this.createFormesCapitatlisation(4),
      modelesArchitectural: this.createModelesArchitectural(4),
      structurateurs: this.createStructurateurs(4),
      idees: this.createIdees(4),
      modesDePensee: this.createModesDePensee(4),
    };

    useIdeoGramStore.getState().addIdeogram(newIdeoGramme);
    return newIdeoGramme;
  }

  static update(id: string, updatedData: Partial<IdeoGrammeType>): void {
    useIdeoGramStore.getState().updateIdeogram(id, updatedData);
  }

  static delete(id: string): void {
    useIdeoGramStore.getState().deleteIdeogram(id);
  }

  static findById(id: string): IdeoGrammeType | undefined {
    return useIdeoGramStore.getState().getIdeogramById(id);
  }

  // Helper functions to create different sections of the Ideogram
  static createProblems(size: number): ProblemSchemaType[] {
    return Array.from({ length: size }).map(() => ({
      problem: "",
      id: uuidv4(),
    }));
  }

  static createSolutions(size: number): SolutionType[] {
    return Array.from({ length: size }).map(() => ({
      solution: "",
      id: uuidv4(),
    }));
  }

  static createResultats(size: number): ResultatType[] {
    return Array.from({ length: size }).map(() => ({
      resultat: "",
      id: uuidv4(),
    }));
  }

  static createOutilsDevelopement(size: number): OutilDevelopementType[] {
    return Array.from({ length: size }).map(() => ({
      outil_developement: [],
      id: uuidv4(),
    }));
  }

  static createVoiesConsomation(size: number): VoieConsomationType[] {
    return Array.from({ length: size }).map(() => ({
      voie_consomation: [],
      id: uuidv4(),
    }));
  }

  static createFormesCapitatlisation(size: number): FormeCapitatlisationType[] {
    return Array.from({ length: size }).map(() => ({
      forme_capitatlisation: "",
      id: uuidv4(),
    }));
  }

  static createModelesArchitectural(size: number): ModeleArchitecturalType[] {
    return Array.from({ length: size }).map(() => ({
      modele_architectural: "",
      configuration: [],
      id: uuidv4(),
    }));
  }

  static createStructurateurs(size: number): StructurateurType[] {
    return Array.from({ length: size }).map(() => ({
      structurateur: "",
      natures: [],
      actions: [],
      id: uuidv4(),
    }));
  }

  static createIdees(size: number): IdeeType[] {
    return Array.from({ length: size }).map(() => ({
      idee: "",
      id: uuidv4(),
    }));
  }

  static createModesDePensee(size: number): ModeDePenseeType[] {
    return Array.from({ length: size }).map(() => ({
      mode_de_pensee: "",
      id: uuidv4(),
    }));
  }

  // Update functions for each array
  static updateProblem(ideogram: IdeoGrammeType, index: number, updatedData: Partial<ProblemSchemaType>): void {
    ideogram.problems[index] = { ...ideogram.problems[index], ...updatedData };
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { problems: ideogram.problems });
  }

  static updateSolution(ideogram: IdeoGrammeType, index: number, updatedData: Partial<SolutionType>): void {
    ideogram.solutions[index] = { ...ideogram.solutions[index], ...updatedData };
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { solutions: ideogram.solutions });
  }

  static updateResultat(ideogram: IdeoGrammeType, index: number, updatedData: Partial<ResultatType>): void {
    ideogram.resultats[index] = { ...ideogram.resultats[index], ...updatedData };
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { resultats: ideogram.resultats });
  }

  static updateOutilDevelopement(ideogram: IdeoGrammeType, index: number, updatedData: Partial<OutilDevelopementType>): void {
    ideogram.outilsDevelopement[index] = { ...ideogram.outilsDevelopement[index], ...updatedData };
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { outilsDevelopement: ideogram.outilsDevelopement });
  }

  static updateVoieConsomation(ideogram: IdeoGrammeType, index: number, updatedData: Partial<VoieConsomationType>): void {
    ideogram.voiesConsomation[index] = { ...ideogram.voiesConsomation[index], ...updatedData };
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { voiesConsomation: ideogram.voiesConsomation });
  }

  static updateFormeCapitatlisation(ideogram: IdeoGrammeType, index: number, updatedData: Partial<FormeCapitatlisationType>): void {
    ideogram.formesCapitatlisation[index] = { ...ideogram.formesCapitatlisation[index], ...updatedData };
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { formesCapitatlisation: ideogram.formesCapitatlisation });
  }

  static updateModeleArchitectural(ideogram: IdeoGrammeType, index: number, updatedData: Partial<ModeleArchitecturalType>): void {
    ideogram.modelesArchitectural[index] = { ...ideogram.modelesArchitectural[index], ...updatedData };
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { modelesArchitectural: ideogram.modelesArchitectural });
  }

  static updateStructurateur(ideogram: IdeoGrammeType, index: number, updatedData: Partial<StructurateurType>): void {
    ideogram.structurateurs[index] = { ...ideogram.structurateurs[index], ...updatedData };
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { structurateurs: ideogram.structurateurs });
  }

  static updateIdee(ideogram: IdeoGrammeType, index: number, updatedData: Partial<IdeeType>): void {
    ideogram.idees[index] = { ...ideogram.idees[index], ...updatedData };
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { idees: ideogram.idees });
  }

  static updateModeDePensee(ideogram: IdeoGrammeType, index: number, updatedData: Partial<ModeDePenseeType>): void {
    ideogram.modesDePensee[index] = { ...ideogram.modesDePensee[index], ...updatedData };
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { modesDePensee: ideogram.modesDePensee });
  }

  // Delete functions for each array

  static deleteProblem(ideogram: IdeoGrammeType, index: number): void {
    ideogram.problems.splice(index, 1);
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { problems: ideogram.problems });
  }

  static deleteSolution(ideogram: IdeoGrammeType, index: number): void {
    ideogram.solutions.splice(index, 1);
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { solutions: ideogram.solutions });
  }

  static deleteResultat(ideogram: IdeoGrammeType, index: number): void {
    ideogram.resultats.splice(index, 1);
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { resultats: ideogram.resultats });
  }

  static deleteOutilDevelopement(ideogram: IdeoGrammeType, index: number): void {
    ideogram.outilsDevelopement.splice(index, 1);
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { outilsDevelopement: ideogram.outilsDevelopement });
  }

  static deleteVoieConsomation(ideogram: IdeoGrammeType, index: number): void {
    ideogram.voiesConsomation.splice(index, 1);
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { voiesConsomation: ideogram.voiesConsomation });
  }

  static deleteFormeCapitatlisation(ideogram: IdeoGrammeType, index: number): void {
    ideogram.formesCapitatlisation.splice(index, 1);
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { formesCapitatlisation: ideogram.formesCapitatlisation });
  }

  static deleteModeleArchitectural(ideogram: IdeoGrammeType, index: number): void {
    ideogram.modelesArchitectural.splice(index, 1);
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { modelesArchitectural: ideogram.modelesArchitectural });
  }

  static deleteStructurateur(ideogram: IdeoGrammeType, index: number): void {
    ideogram.structurateurs.splice(index, 1);
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { structurateurs: ideogram.structurateurs });
  }

  static deleteIdee(ideogram: IdeoGrammeType, index: number): void {
    ideogram.idees.splice(index, 1);
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { idees: ideogram.idees });
  }

  static deleteModeDePensee(ideogram: IdeoGrammeType, index: number): void {
    ideogram.modesDePensee.splice(index, 1);
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { modesDePensee: ideogram.modesDePensee });
  }

  // Add functions for each array

  static addProblem(ideogram: IdeoGrammeType): void {
    ideogram.problems.push({ problem: "", id: uuidv4() });
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { problems: ideogram.problems });
  }

  static addSolution(ideogram: IdeoGrammeType): void {
    ideogram.solutions.push({ solution: "", id: uuidv4() });
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { solutions: ideogram.solutions });
  }

  static addResultat(ideogram: IdeoGrammeType): void {
    ideogram.resultats.push({ resultat: "", id: uuidv4() });
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { resultats: ideogram.resultats });
  }

  static addOutilDevelopement(ideogram: IdeoGrammeType): void {
    ideogram.outilsDevelopement.push({ outil_developement: [], id: uuidv4() });
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { outilsDevelopement: ideogram.outilsDevelopement });
  }

  static addVoieConsomation(ideogram: IdeoGrammeType): void {
    ideogram.voiesConsomation.push({ voie_consomation: [], id: uuidv4() });
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { voiesConsomation: ideogram.voiesConsomation });
  }

  static addFormeCapitatlisation(ideogram: IdeoGrammeType): void {
    ideogram.formesCapitatlisation.push({ forme_capitatlisation: "", id: uuidv4() });
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { formesCapitatlisation: ideogram.formesCapitatlisation });
  }

  static addModeleArchitectural(ideogram: IdeoGrammeType): void {
    ideogram.modelesArchitectural.push({ modele_architectural: "", configuration: [], id: uuidv4() });
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { modelesArchitectural: ideogram.modelesArchitectural });
  }

  static addStructurateur(ideogram: IdeoGrammeType): void {
    ideogram.structurateurs.push({ structurateur: "", natures: [], actions: [], id: uuidv4() });
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { structurateurs: ideogram.structurateurs });
  }

  static addIdee(ideogram: IdeoGrammeType): void {
    ideogram.idees.push({ idee: "", id: uuidv4() });
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { idees: ideogram.idees });
  }

  static addModeDePensee(ideogram: IdeoGrammeType): void {
    ideogram.modesDePensee.push({ mode_de_pensee: "", id: uuidv4() });
    useIdeoGramStore.getState().updateIdeogram(ideogram.id, { modesDePensee: ideogram.modesDePensee });
  }

  
}
