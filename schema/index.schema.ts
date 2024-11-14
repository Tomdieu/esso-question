import { z } from 'zod';

// Schema for question 1 (text)
export const ProblemSchema = z.object({
  id: z.string().optional(),
  problem: z.string().min(1, "Response obligatoire"), // Assuming that text field should not be empty
});
export type ProblemSchemaType = z.infer<typeof ProblemSchema>;

// Schema for question 2 (text)
export const SolutionSchema = z.object({
  id: z.string().optional(),
  solution: z.string().min(1, "Response obligatoire"),
});
export type SolutionType = z.infer<typeof SolutionSchema>;

// Schema for question 3 (text)
export const ResultatSchema = z.object({
  id: z.string().optional(),
  resultat: z.string().min(1, "Response obligatoire"),
});
export type ResultatType = z.infer<typeof ResultatSchema>;

// Schema for question 4 (checkbox)
export const OutilDevelopementSchema = z.object({
  id: z.string().optional(),
  outil_developement: z.array(z.string()).min(1, "Selectionner au moin un choix"),
});
export type OutilDevelopementType = z.infer<typeof OutilDevelopementSchema>;

// Schema for question 5 (checkbox)
export const VoieConsomationSchema = z.object({
  id: z.string().optional(),
  voie_consomation: z.array(z.string()).min(1, "Selectionner au moin un choix"),
});
export type VoieConsomationType = z.infer<typeof VoieConsomationSchema>;

// Schema for question 6 (radio)
export const FormeCapitatlisationSchema = z.object({
  id: z.string().optional(),
  forme_capitatlisation: z.string().min(1, "Selectionner au moin un choix"),
});
export type FormeCapitatlisationType = z.infer<typeof FormeCapitatlisationSchema>;

// Schema for question 7 (radio with subQuestions)
export const ModeleArchitecturalSchema = z.object({
  id: z.string().optional(),
  modele_architectural: z.string().min(1, "Selectionner au moin un choix"),
  configuration:z.array(z.string()).min(1,{message:"Selectionner au moin un choix"})
});
export type ModeleArchitecturalType = z.infer<typeof ModeleArchitecturalSchema>;

// Schema for question 8 (radio with subQuestions)
export const StructurateurSchema = z.object({
  id: z.string().optional(),
  structurateur: z.string().min(1, "Selectionner au moin un choix"),
  natures:z.array(z.string()).min(1,{message:"At least one nature is required"}),
  actions:z.array(z.string()).min(1,{message:"At least an action is required"})
});
export type StructurateurType = z.infer<typeof StructurateurSchema>;

// Schema for question 9 (text)
export const IdeeSchema = z.object({
  id: z.string().optional(),
  idee: z.string().min(1, "Response obligatoire"),
});
export type IdeeType = z.infer<typeof IdeeSchema>;

// Schema for question 10 (text)
export const ModeDePenseeSchema = z.object({
  id: z.string().optional(),
  mode_de_pensee: z.string().min(1, "Response obligatoire"),
});
export type ModeDePenseeType = z.infer<typeof ModeDePenseeSchema>;

export type IdeoGrammeType = {
  id: string;
  project_name:string;
  problems: ProblemSchemaType[];
  solutions: SolutionType[];
  resultats: ResultatType[];
  outilsDevelopement: OutilDevelopementType[];
  voiesConsomation: VoieConsomationType[];
  formesCapitatlisation: FormeCapitatlisationType[];
  modelesArchitectural: ModeleArchitecturalType[];
  structurateurs: StructurateurType[];
  idees: IdeeType[];
  modesDePensee: ModeDePenseeType[];
  ecodev:EcodevType,
  businessModel:BusinessModelType
};

export const CreativiteSchema = z.object({
  project_name: z.string({required_error:"Nom du projet obligatoire"}).min(1, "Nom du projet obligatoire"),
})

export type CreativiteType = z.infer<typeof CreativiteSchema>;

export const EcodevSchema = z.object({
  id:z.string().optional(),
  entreprise_production:z.string(),
  entreprise_distribution:z.string(),
  entreprise_consomation:z.string(),
  entreprise_dechet:z.string(),
  partenaires_innovation:z.string(),
  partenaires_distribution:z.string(),
  partenaires_juridiques:z.string(),
  partenaires_production:z.string(),
  partenaires_transport:z.string(),
  partenaires_financiers:z.string(),
  partenaires_commerciax:z.string(),
  autres_partenaires:z.string(),
})

export type EcodevType = z.infer<typeof EcodevSchema>

export const BusinessModelSchema = z.object({
  nom_commercial:z.string(),
  prix:z.string(),
  cible:z.string(),
  gamme_produit:z.string(),
  forme_capitalisation:z.string(),
  emballage:z.string(),
  circuit_distribution:z.string()
})

export type BusinessModelType = z.infer<typeof BusinessModelSchema>