import axios from 'axios'
import { useEffect, useState } from 'react'
import { PLANT_STORE_API_URL } from '../main'
import { Hook } from '../models/Hook'
import { Plant } from '../models/Plant'

interface UseFetchMyPlants extends Hook {
  plants: Plant[]
}

const useFetchMyPlants = (userId: number) => {
  const [plants, setPlants] = useState<Plant[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axios.get(`${PLANT_STORE_API_URL}/user/${userId}/plants`)
        setPlants(response.data)
      } catch (err) {
        setError('Failed to fetch plants: ' + String(err))
      } finally {
        setLoading(false)
      }
    }

    fetchPlants()
  }) 

  return { plants, loading, error } as UseFetchMyPlants
}

export default useFetchMyPlants
