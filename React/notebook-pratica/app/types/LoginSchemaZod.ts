import { z } from "zod";

export const LoginSchemaZod = z.object({
    name: z.string().min(2, {message: 'Mínimo 2 letras'}).max(20, 'Máximo 20 letras'),
    lasName: z.string().optional(),
    email: z.string().email('Email inválido').optional(),
    age: 
        z.number({invalid_type_error: 'Idade precisa ser um número'})
        .min(18, 'Mínimo 18 anos')
        .max(60, {message: 'Máximo 60 anos'})
})