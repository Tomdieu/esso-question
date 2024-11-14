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
  EcodevType,
  BusinessModelType,
} from "@/schema/index.schema";
import uuid from 'react-native-uuid';


export const generateIdeoGramme = (project_name: string): IdeoGrammeType => {
  return {
    id: uuid.v4() as string,
    project_name,
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
    ecodev:createEcodev(),
    businessModel:createBusinessModel()
  };
};


export const createEcodev = () => {
  const ecodev: EcodevType = {
    entreprise_production: "",
    entreprise_distribution: "",
    entreprise_consomation: "",
    entreprise_dechet: "",
    partenaires_innovation: "",
    partenaires_distribution: "",
    partenaires_juridiques: "",
    partenaires_production: "",
    partenaires_transport: "",
    partenaires_financiers: "",
    partenaires_commerciax: "",
    autres_partenaires: ""
  }
  return ecodev
}

export const createBusinessModel = () => {
  const businessModel:BusinessModelType = {
    nom_commercial: "",
    prix: "",
    cible: "",
    gamme_produit: "",
    forme_capitalisation: "",
    emballage: "",
    circuit_distribution: ""
  }
  return businessModel
}

export const createProblems = (size: number) => {
  const problems: ProblemSchemaType[] = [];
  Array.from({ length: size }).map(() => {
    const pb: ProblemSchemaType = {
      problem: "",
      id: uuid.v4() as string,
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
      id: uuid.v4() as string,
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
      id: uuid.v4() as string,
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
      id: uuid.v4() as string,
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
      id: uuid.v4() as string,
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
      id: uuid.v4() as string,
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
      id: uuid.v4() as string,
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
      id: uuid.v4() as string,
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
      id: uuid.v4() as string,
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
      id: uuid.v4() as string,
    };
    modes.push(mode);
  });
  return modes;
};
