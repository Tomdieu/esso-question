import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist } from 'zustand/middleware';
import {
  FormeCapitatlisationType,
  IdeeType,
  ModeDePenseeType,
  ModeleArchitecturalType,
  OutilDevelopementType,
  ProblemSchemaType,
  ResultatType,
  SolutionType,
  StructurateurType,
  VoieConsomationType,
} from '@/schema/index.schema';

type IdeogrammeStore = {
  problem?: ProblemSchemaType;
  solution?: SolutionType;
  resultat?: ResultatType;
  outil_developement?: OutilDevelopementType;
  voie_consomation?: VoieConsomationType;
  forme_capitalisation?: FormeCapitatlisationType;
  modele_architectural?: ModeleArchitecturalType;
  structurateur?: StructurateurType;
  idee?: IdeeType;
  mode_de_pensee?: ModeDePenseeType;

  // methods
  setProblem: (problem: ProblemSchemaType) => void;
  setSolution: (solution: SolutionType) => void;
  setResultat: (resultat: ResultatType) => void;
  setOutilDevelopement: (outil_developement: OutilDevelopementType) => void;
  setVoieConsomation: (voie_consomation: VoieConsomationType) => void;
  setFormeCapitalisation: (forme_capitalisation: FormeCapitatlisationType) => void;
  setModeleArchitectural: (modele_architectural: ModeleArchitecturalType) => void;
  setStructurateur: (structurateur: StructurateurType) => void;
  setIdee: (idee: IdeeType) => void;
  setModeDePensee: (mode_de_pensee: ModeDePenseeType) => void;
  reset: () => void;
};

export const useIdeogrammeStore = create<IdeogrammeStore>()(
  persist(
    (set) => ({
      problem: undefined,
      solution: undefined,
      resultat: undefined,
      outil_developement: undefined,
      voie_consomation: undefined,
      forme_capitalisation: undefined,
      modele_architectural: undefined,
      structurateur: undefined,
      idee: undefined,
      mode_de_pensee: undefined,

      // methods
      setProblem: (problem) => set({ problem }),
      setSolution: (solution) => set({ solution }),
      setResultat: (resultat) => set({ resultat }),
      setOutilDevelopement: (outil_developement) => set({ outil_developement }),
      setVoieConsomation: (voie_consomation) => set({ voie_consomation }),
      setFormeCapitalisation: (forme_capitalisation) => set({ forme_capitalisation }),
      setModeleArchitectural: (modele_architectural) => set({ modele_architectural }),
      setStructurateur: (structurateur) => set({ structurateur }),
      setIdee: (idee) => set({ idee }),
      setModeDePensee: (mode_de_pensee) => set({ mode_de_pensee }),

      // reset method
      reset: () => set({
        problem: undefined,
        solution: undefined,
        resultat: undefined,
        outil_developement: undefined,
        voie_consomation: undefined,
        forme_capitalisation: undefined,
        modele_architectural: undefined,
        structurateur: undefined,
        idee: undefined,
        mode_de_pensee: undefined,
      }),
    }),
    {
      name: 'ideogramme-storage', // unique name for the storage key
      getStorage: () => AsyncStorage, // use AsyncStorage for persistence
    }
  )
);
