import { z } from 'zod'

export enum PlantLabel {
  Indoor = 'Indoor',
  Outdoor = 'Outdoor',
}

export const plantSchema = z.object({
  plantName: z
    .string()
    .min(2, { message: 'Plant name must be at least 2 characters' }),
  plantSubtitle: z
    .string()
    .min(5, { message: 'Plant subtitle must be at least 5 characters' }),
  plantType: z
    .string()
    .min(2, { message: 'Plant type must be at least 2 characters' }),
  plantPrice: z
    .number({ message: 'Price must be a number' })
    .positive({ message: 'Price must be positive' }),
  plantDiscountPercentage: z
    .number({ message: 'Discount must be a number' })
    .int({ message: 'Discount must be an integer' })
    .min(0, { message: 'Discount must be positive' })
    .max(100, { message: 'Discount must be less than 100' }),
  plantLabel: z.nativeEnum(PlantLabel),
  plantFeatures: z
    .string()
    .min(10, { message: 'Features must be at least 10 characters' }),
  plantDescription: z
    .string()
    .min(15, { message: 'Description must be at least 15 characters' }),
  plantImgUrl: z
    .string()
    .min(5, { message: 'Image URL must be at least 5 characters' }),
})

export type IFormInput = z.infer<typeof plantSchema>
