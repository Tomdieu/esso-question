import { z } from 'zod';

// Schema for question 1 (text)
export const ProblemSchema = z.object({
  id: z.number().int().optional(),
  problem: z.string().min(1, "Response obligatoire"), // Assuming that text field should not be empty
});
export type ProblemSchemaType = z.infer<typeof ProblemSchema>;

// Schema for question 2 (text)
export const SolutionSchema = z.object({
  id: z.number().int().optional(),
  solution: z.string().min(1, "Response obligatoire"),
});
export type SolutionType = z.infer<typeof SolutionSchema>;

// Schema for question 3 (text)
export const ResultatSchema = z.object({
  id: z.number().int().optional(),
  resultat: z.string().min(1, "Response obligatoire"),
});
export type ResultatType = z.infer<typeof ResultatSchema>;

// Schema for question 4 (checkbox)
export const OutilDevelopementSchema = z.object({
  id: z.number().int().optional(),
  outil_developement: z.array(z.string()).min(1, "Selectionner au moin un choix"),
});
export type OutilDevelopementType = z.infer<typeof OutilDevelopementSchema>;

// Schema for question 5 (checkbox)
export const VoieConsomationSchema = z.object({
  id: z.number().int().optional(),
  voie_consomation: z.array(z.string()).min(1, "Selectionner au moin un choix"),
});
export type VoieConsomationType = z.infer<typeof VoieConsomationSchema>;

// Schema for question 6 (radio)
export const FormeCapitatlisationSchema = z.object({
  id: z.number().int().optional(),
  forme_capitatlisation: z.string().min(1, "Selectionner au moin un choix"),
});
export type FormeCapitatlisationType = z.infer<typeof FormeCapitatlisationSchema>;

// Schema for question 7 (radio with subQuestions)
export const ModeleArchitecturalSchema = z.object({
  id: z.number().int().optional(),
  modele_architectural: z.string().min(1, "Selectionner au moin un choix"),
  configuration:z.array(z.string()).min(1,{message:"Selectionner au moin un choix"})
});
export type ModeleArchitecturalType = z.infer<typeof ModeleArchitecturalSchema>;

// Schema for question 8 (radio with subQuestions)
export const StructurateurSchema = z.object({
  id: z.number().int().optional(),
  structurateur: z.string().min(1, "Selectionner au moin un choix"),
  natures:z.array(z.string()).min(1,{message:"At least one nature is required"}),
  actions:z.array(z.string()).min(1,{message:"At least an action is required"})
});
export type StructurateurType = z.infer<typeof StructurateurSchema>;

// Schema for question 9 (text)
export const IdeeSchema = z.object({
  id: z.number().int().optional(),
  idee: z.string().min(1, "Response obligatoire"),
});
export type IdeeType = z.infer<typeof IdeeSchema>;

// Schema for question 10 (text)
export const ModeDePenseeSchema = z.object({
  id: z.number().int().optional(),
  mode_de_pensee: z.string().min(1, "Response obligatoire"),
});
export type ModeDePenseeType = z.infer<typeof ModeDePenseeSchema>;
