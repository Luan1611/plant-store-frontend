import axios from 'axios'
import { PLANT_STORE_API_URL } from '../main'
import { PlantType } from '../models/Plant'
import { PlantLabel } from '../validation/plantSchema'

export const createPlant = async (data:any): Promise<void> => {
  await axios.post(`${PLANT_STORE_API_URL}/plants/`, data)
}

export const createDefaultPlantType = async (): Promise<PlantType[]> => {
  let plantTypes = await fetchPlantTypes()
  if (plantTypes.length === 0) {
    await createPlantType('Indoor')
    await createPlantType('Outdoor')
    plantTypes = await fetchPlantTypes()
  }

  return plantTypes
}

/* export const createPlantTypeIfNotExists = async (
  plantTypes: PlantType[],
  data: IFormInput
): Promise<number> => {
  let plantTypeId = getPlantTypeId(plantTypes, data.plantType)
  if (!plantTypeId) {
    await createPlantType(data.plantType.toLowerCase())
    plantTypes = await fetchPlantTypes()
    plantTypeId = getPlantTypeId(plantTypes, data.plantType)
  }

  if (!plantTypeId) {
    throw new Error('Plant type not found')
  }

  return Number(plantTypeId)
} */

export const getPlantLabelId = (plantLabel: PlantLabel): number => {
  return plantLabel === PlantLabel.Indoor ? 1 : 2
}

export const fetchPlantTypes = async (): Promise<PlantType[]> => {
  const response = await axios.get(`${PLANT_STORE_API_URL}/plant-type/`)
  return response.data
}

export const fetchPlantCategories = async (): Promise<PlantType[]> => {
  const response = await axios.get(`${PLANT_STORE_API_URL}/plant-category/`)
  return response.data
}

export const createPlantType = async (name: string): Promise<void> => {
  await axios.post(`${PLANT_STORE_API_URL}/plant-type/`, {
    name,
  })
}

export const deletePlant = async (id: string): Promise<void> => {
  await axios.delete(`${PLANT_STORE_API_URL}/plants/${id}`)
}

export const getPlantTypeId = (
  plantTypes: PlantType[],
  plantTypeName: string
): string | undefined => {
  const plantType = plantTypes.find(
    pt => pt.name.toLowerCase() === plantTypeName.toLowerCase()
  )
  return plantType ? String(plantType.id) : undefined
}
