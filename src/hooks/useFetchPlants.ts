import axios from 'axios'
import { useEffect, useState } from 'react'
import { PLANT_STORE_API_URL } from '../main'
import { Hook } from '../models/Hook'
import { Plant } from '../models/Plant'

interface UseFetchPlants extends Hook {
  plants: Plant[]
}

const useFetchPlants = (filters?: Record<string, string>) => {
  const [plants, setPlants] = useState<Plant[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const query = filters ? `?${new URLSearchParams(filters).toString()}` : ''
        const response = await axios.get(`${PLANT_STORE_API_URL}/plants/${query}`)
        setPlants(response.data)
      } catch (err) {
        setError('Failed to fetch plants: ' + String(err))
      } finally {
        setLoading(false)
      }
    }

    fetchPlants()
  }, [JSON.stringify(filters)]) // refaz a chamada se os filtros mudarem

  return { plants, loading, error } as UseFetchPlants
}

export default useFetchPlants
