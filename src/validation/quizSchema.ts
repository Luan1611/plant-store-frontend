import { z } from 'zod'
import '../styles/Home.css'

export const quizSchema = z.object({
  plantLabel: z.string().nonempty('Choose an environment.'),
  plantCategory: z.string().nonempty('Choose a category.'),
  plantType: z.string().nonempty('Choose a type.'),
})

export type QuizData = z.infer<typeof quizSchema>