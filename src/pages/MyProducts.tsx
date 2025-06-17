import { OrbitProgress } from 'react-loading-indicators'
import { useNavigate } from 'react-router-dom'
import PlantCard from '../components/PlantCard'
import useFetchMyPlants from '../hooks/useFetchMyPlants'
import '../styles/Products.css'
import { useLocation } from 'react-router-dom'


const MyProducts = () => {
  const navigate = useNavigate()
  const { search } = useLocation()
  
  const userId = 1
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
    return
  }

  return (
    <div className='products'>
      {plants.map(product => {
        return <PlantCard key={product.id} {...product} />
      })}
    </div>
  )
}
export default MyProducts
