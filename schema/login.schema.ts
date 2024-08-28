
import z from "zod"

export const loginSchema = z.object({
    username:z.string(),
    password:z.string()
})

export type LoginSchemaType = z.infer<typeof loginSchema>

export const registerSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirm_password: z.string().min(6, "Please confirm your password"),
}).refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
});

export type RegisterSchemaType = z.infer<typeof registerSchema>