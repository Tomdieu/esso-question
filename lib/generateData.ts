import {
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
  IdeoGrammeType,
} from "@/schema/index.schema";
import { v4 as uuidv4 } from "uuid";

export const generateIdeoGramme = (): IdeoGrammeType => {
  return {
    id: uuidv4(),
    problems: createProblems(4),
    solutions: createSolutions(4),
    resultats: createResultats(4),
    outilsDevelopement: createOutilsDevelopement(4),
    voiesConsomation: createVoiesConsomation(4),
    formesCapitatlisation: createFormesCapitatlisation(4),
    modelesArchitectural: createModelesArchitectural(4),
    structurateurs: createStructurateurs(4),
    idees: createIdees(4),
    modesDePensee: createModesDePensee(4),
  };
};

export const createProblems = (size: number) => {
  const problems: ProblemSchemaType[] = [];
  Array.from({ length: size }).map(() => {
    const pb: ProblemSchemaType = {
      problem: "",
      id: uuidv4(),
    };
    problems.push(pb);
  });
  return problems;
};

export const createSolutions = (size: number) => {
  const solutions: SolutionType[] = [];
  Array.from({ length: size }).map(() => {
    const sol: SolutionType = {
      solution: "",
      id: uuidv4(),
    };
    solutions.push(sol);
  });
  return solutions;
};

export const createResultats = (size: number) => {
  const resultats: ResultatType[] = [];
  Array.from({ length: size }).map(() => {
    const re: ResultatType = {
      resultat: "",
      id: uuidv4(),
    };
    resultats.push(re);
  });
  return resultats;
};

export const createOutilsDevelopement = (size: number) => {
  const outils: OutilDevelopementType[] = [];
  Array.from({ length: size }).map(() => {
    const outil: OutilDevelopementType = {
      outil_developement: [],
      id: uuidv4(),
    };
    outils.push(outil);
  });
  return outils;
};

export const createVoiesConsomation = (size: number) => {
  const voies: VoieConsomationType[] = [];
  Array.from({ length: size }).map(() => {
    const voie: VoieConsomationType = {
      voie_consomation: [],
      id: uuidv4(),
    };
    voies.push(voie);
  });
  return voies;
};

export const createFormesCapitatlisation = (size: number) => {
  const formes: FormeCapitatlisationType[] = [];
  Array.from({ length: size }).map(() => {
    const forme: FormeCapitatlisationType = {
      forme_capitatlisation: "",
      id: uuidv4(),
    };
    formes.push(forme);
  });
  return formes;
};

export const createModelesArchitectural = (size: number) => {
  const modeles: ModeleArchitecturalType[] = [];
  Array.from({ length: size }).map(() => {
    const modele: ModeleArchitecturalType = {
      modele_architectural: "",
      configuration: [],
      id: uuidv4(),
    };
    modeles.push(modele);
  });
  return modeles;
};

export const createStructurateurs = (size: number) => {
  const structurateurs: StructurateurType[] = [];
  Array.from({ length: size }).map(() => {
    const structurateur: StructurateurType = {
      structurateur: "",
      natures: [],
      actions: [],
      id: uuidv4(),
    };
    structurateurs.push(structurateur);
  });
  return structurateurs;
};

export const createIdees = (size: number) => {
  const idees: IdeeType[] = [];
  Array.from({ length: size }).map(() => {
    const idee: IdeeType = {
      idee: "",
      id: uuidv4(),
    };
    idees.push(idee);
  });
  return idees;
};

export const createModesDePensee = (size: number) => {
  const modes: ModeDePenseeType[] = [];
  Array.from({ length: size }).map(() => {
    const mode: ModeDePenseeType = {
      mode_de_pensee: "",
      id: uuidv4(),
    };
    modes.push(mode);
  });
  return modes;
};
