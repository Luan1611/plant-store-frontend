import '../styles/TakeCareOfYourPlants.css'
import TextContainer from './TextContainer'
import Title from './Title'

import image1 from '../assets/images/image_1.png'
import image2 from '../assets/images/image_2.png'
import image3 from '../assets/images/image_3.png'

import iconFertilizer from '../assets/icons/fertilizer.svg'
import iconSun from '../assets/icons/sun.svg'
import iconWater from '../assets/icons/water.svg'
import ColumnText from './ColumnText'

const TakeCareOfYourPlants = () => {
  return (
    <section className='take-care-container'>
      <div className='title-container'>
        <Title title='Steps To Take Care Of Your **Plants**' />
        <TextContainer text="By following these three steps - proper watering, appropriate sunlight, and providing essential nutrients - you'll be well on your way to maintaining healthy and thriving plants." />
      </div>

      <div className='columns-container'>
        <ColumnText
          title='Watering'
          text='Water your plants when the top inch of soil feels dry to the touch. Avoid overwatering, as it can lead to root  dehydration.'
          icon={iconWater}
          image={image1}
        />

        <ColumnText
          title='Sunlight'
          text='Most plants need adequate sunlight to thrive. Place your plants in areas that receive the appropriate amount of light for their specific needs'
          icon={iconSun}
          image={image2}
        />

        <ColumnText
          title='Nutrients and Fertilizing'
          text="Choose a suitable fertilizer based on the specific needs of your plants, whether it's a balanced or specialized formula."
          icon={iconFertilizer}
          image={image3}>
          <TextContainer text="Our website offers a wide array of stunning plants, ranging from vibrant flowers to lush indoor foliage, allowing you to create your very own green oasis. In addition to our extensive plant selection, we also provide gardening kits and fertilizers to equip you with everything you need to nurture your plants and achieve gardening success. But we don't stop there! We believe that knowledge is the key to a thriving garden, so we offer a wealth of information and resources on gardening techniques, plant care tips, and landscaping ideas. Whether you're a seasoned gardener or just starting your green journey, our goal is to inspire and support you every step of the way. Get ready to explore our virtual garden and discover the joys of gardening with us!" />
          <a href='' className='button'>
            See more photos
          </a>
        </ColumnText>
      </div>
    </section>
  )
}
export default TakeCareOfYourPlants
