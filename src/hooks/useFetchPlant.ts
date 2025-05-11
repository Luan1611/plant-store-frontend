import axios from 'axios'
import { useEffect, useState } from 'react'
import { LOJA_DO_GROOT_API_URL } from '../main'
import { Hook } from '../models/Hook'
import { Plant } from '../models/Plant'

export interface UseFetchPlant extends Hook {
  plant: Plant
}

const useFetchPlant = (id: string) => {
  const [plant, setPlant] = useState<Plant>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        const response = await axios.get(
          `${LOJA_DO_GROOT_API_URL}/plants/${id}`
        )

        setPlant(response.data)
      } catch (err) {
        setError('Failed to fetch plant: ' + err)
      } finally {
        setLoading(false)
      }
    }

    fetchPlant()
  }, [id])

  return { plant, loading, error } as UseFetchPlant
}

export default useFetchPlant
