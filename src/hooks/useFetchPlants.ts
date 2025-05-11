import axios from 'axios'
import { useEffect, useState } from 'react'
import { LOJA_DO_GROOT_API_URL } from '../main'
import { Hook } from '../models/Hook'
import { Plant } from '../models/Plant'

interface UseFetchPlants extends Hook {
  plants: Plant[]
}

const useFetchPlants = () => {
  const [plants, setPlants] = useState<Plant[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axios.get(`${LOJA_DO_GROOT_API_URL}/plants/`)
        setPlants(response.data)
      } catch (err) {
        setError('Failed to fetch plants: ' + err)
      } finally {
        setLoading(false)
      }
    }

    fetchPlants()
  }, [])

  return { plants, loading, error } as UseFetchPlants
}

export default useFetchPlants
