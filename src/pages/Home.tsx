import { OrbitProgress } from 'react-loading-indicators'
import Hero from '../components/Hero'
import PlantContainer from '../components/PlantContainer'
import TakeCareOfYourPlants from '../components/TakeCareOfYourPlants'
import useFetchPlants from '../hooks/useFetchPlants'
import '../styles/Home.css'

const Home = () => {
  const { plants, loading, error } = useFetchPlants()

  if (loading)
    return (
      <div className='loading'>
        <OrbitProgress color='#000' size='medium' text='' textColor='' />
      </div>
    )
  if (error) return <div>{error}</div>

  return (
    <div className='home'>
      <Hero
        title='Discover Your **Green** Side'
        subtitle='Love for Nature'
        text='We are your one-stop destination for all things green and growing. Our website offers a wide array of stunning plants, ranging from vibrant flowers  to lush indoor foliage, allowing you to create your very own green oasis. '
        link='/products '
      />

      <TakeCareOfYourPlants />

      <PlantContainer
        plants={plants}
        title='This Weeks Most Popular **And Best Selling**'
      />

      <PlantContainer
        plants={plants.filter(
          plant => plant.isInSale && plant.discountPercentage > 0
        )}
        title='**Plants In** Sale'
      />
    </div>
  )
}
export default Home
