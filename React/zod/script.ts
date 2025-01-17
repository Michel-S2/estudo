import { z } from 'zod'

const User = z.object({
    age: z.number().multipleOf(5)
})

const result = User.parse({
    age: 10
})

console.log(result);