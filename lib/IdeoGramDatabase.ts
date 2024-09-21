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
}
