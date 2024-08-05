import { z } from 'zod';

export const CreateUserRequest = z.object({
    id: z.number().optional(),
    username: z.string(),
    password: z.string(),
})

export const UpdateUserRequest = z.object({
    username: z.string().optional(),
    password: z.string().optional(),
})