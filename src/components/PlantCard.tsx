import { Link } from 'react-router-dom'
import { Plant } from '../models/Plant'
import { deletePlant } from '../services/plantService'
import '../styles/PlantCard.css'

const PlantCard = ({ name, price, id, discountPercentage, imgUrl }: Plant) => {
  imgUrl = imgUrl || 'https://example.com/images/rubber-plant.jpg'

  const handleDelete = async () => {
    await deletePlant(id || '')
    window.location.href = '/'
  }

  return (
    <div className='plant-card'>
      <img
        className='plant-image'
        src={
          imgUrl.includes('example') ? 'https://placehold.co/500x500' : imgUrl
        }
        alt='plant'
      />

      <div className='plant-info'>
        <h1 className='plant-name'>{name}</h1>
        <div className='price-container'>
          <span className='price'>
            ${' '}
            {discountPercentage > 0 ? (
              <>
                {(price - (price * discountPercentage) / 100).toFixed(2)}
                <span className='old-price'>${price.toFixed(2)}</span>
              </>
            ) : (
              price.toFixed(2)
            )}
          </span>
        </div>
        <div className='buttons'>
          <Link className='plant-button' to={`/product/${id}`}>
            View Product
          </Link>
          <a className='plant-button delete' onClick={handleDelete}>
            Delete
          </a>
        </div>
      </div>
    </div>
  )
}
export default PlantCard
