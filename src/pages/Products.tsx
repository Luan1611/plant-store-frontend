import { OrbitProgress } from 'react-loading-indicators'
import { useNavigate } from 'react-router-dom'
import PlantCard from '../components/PlantCard'
import useFetchPlants from '../hooks/useFetchPlants'
import '../styles/Products.css'

const Products = () => {
  const navigate = useNavigate()
  const { plants, loading, error } = useFetchPlants()

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
export default Products
