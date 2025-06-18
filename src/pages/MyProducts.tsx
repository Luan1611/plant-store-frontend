import { OrbitProgress } from 'react-loading-indicators'
import { useNavigate } from 'react-router-dom'
import PlantCard from '../components/PlantCard'
import useFetchMyPlants from '../hooks/useFetchMyPlants'
import '../styles/Products.css'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const MyProducts = () => {
  const navigate = useNavigate()
  const { search } = useLocation()
  const { user } = useAuth()

  // Se não estiver logado, redireciona (opcional, se já usa PrivateRoute pode remover)
  if (!user) {
    navigate('/login')
    return null
  }

  const userId = user.id
  const { plants, loading, error } = useFetchMyPlants(userId)

  if (loading)
    return (
      <div className='loading'>
        <OrbitProgress color='#000' size='medium' text='' textColor='' />
      </div>
    )
  if (error) {
    console.error(error)
    navigate('/404')
    return null
  }

  return (
    <div className='products'>
      {plants.map(product => (
        <PlantCard key={product.id} {...product} />
      ))}
    </div>
  )
}

export default MyProducts
