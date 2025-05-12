import axios from 'axios'
import { useEffect, useState } from 'react'
import { PLANT_STORE_API_URL } from '../main'
import { Hook } from '../models/Hook'
import { Plant } from '../models/Plant'

export interface UseFetchPlant extends Hook {
  plant: Plant | undefined
}

const useFetchPlant = (id: string) => {
  const [plant, setPlant] = useState<Plant | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPlant = async () => {
      if (!id) {
        console.error('No plant ID provided')
        setError('No plant ID provided')
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)
        const url = `${PLANT_STORE_API_URL}/plants/${id}`
        console.log('Fetching plant from:', url)
        
        const response = await axios.get(url)
        console.log('API Response:', response)

        if (!response.data) {
          throw new Error('No data received from API')
        }

        console.log('Plant data received:', response.data)
        setPlant(response.data)
      } catch (err) {
        console.error('Error fetching plant:', err)
        if (axios.isAxiosError(err)) {
          console.error('Axios error details:', {
            status: err.response?.status,
            statusText: err.response?.statusText,
            data: err.response?.data,
            headers: err.response?.headers
          })
          setError(`Failed to fetch plant: ${err.response?.status} - ${err.response?.data?.message || err.message}`)
        } else {
          setError(err instanceof Error ? err.message : 'Failed to fetch plant')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPlant()
  }, [id])

  return { plant, loading, error }
}

export default useFetchPlant
