
import z from "zod"

export const loginSchema = z.object({
    username: z.string({ required_error: "Nom d'utilisateur est requis" }),
    password: z.string({ required_error: "Mot de passe est requis" })
})

export type LoginSchemaType = z.infer<typeof loginSchema>

export const registerSchema = z.object({
    username: z
    .string({ required_error: "Le nom d'utilisateur est requis" })
    .min(1, "Le nom d'utilisateur est requis"),
  password: z
    .string({ required_error: "Le mot de passe est requis" })
    .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
  confirm_password: z
    .string({ required_error: "Veuillez confirmer votre mot de passe" })
    .min(6, "Veuillez confirmer votre mot de passe"),
}).refine((data) => data.password === data.confirm_password, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirm_password"],
});

export type RegisterSchemaType = z.infer<typeof registerSchema>