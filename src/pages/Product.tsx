import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import Button from '../components/Button'
import Loading from '../components/Loading'
import Title from '../components/Title'
import useFetchPlant from '../hooks/useFetchPlant'
import '../styles/Product.css'

const Product = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const { plant: product, loading, error } = useFetchPlant(id || '')

  const handleImageError = () => {
    console.error('Error loading image:', product?.imgurl)
    setImageError(true)
    setImageLoading(false)
  }

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  if (loading) {
    return (
      <div className="loading-container">
        <Loading color='#000' size='medium' />
      </div>
    )
  }

  if (error) {
    console.error('Error fetching product:', error)
    return (
      <div className="error-container">
        <h2>Error loading product</h2>
        <p>{error}</p>
        <button onClick={() => navigate('/')}>Return to Home</button>
      </div>
    )
  }

  if (!product) {
    console.error('No product data received')
    return (
      <div className="error-container">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/')}>Return to Home</button>
      </div>
    )
  }

  return (
    <div className='product-container'>
      <div className='product-image'>
        {imageLoading && (
          <div className="image-loading">
            <Loading color='#000' size='small' />
          </div>
        )}
        <img
          src={
            imageError || !product.imgurl || product.imgurl.includes('example')
              ? 'https://placehold.co/500x500'
              : product.imgurl
          }
          alt='plant'
          onError={handleImageError}
          onLoad={handleImageLoad}
          style={{ display: imageLoading ? 'none' : 'block' }}
        />
      </div>
      <div className='product-info'>
        <div>
          <Title title={product.name} />
          <h2 className='subtitle lato'>{product.subtitle}</h2>
        </div>
        <div className='labels'>
          {product.plantTypes?.map(plantType => (
            <span key={plantType.id} className='label lato'>
              {plantType.name.toLowerCase()}
            </span>
          ))}
        </div>
        <div className='price lato'>
          {product.discountPercentage > 0 ? (
            <>
              <span>
                {'$' +
                  (
                    product.price *
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)}
              </span>
            </>
          ) : (
            <span>{'$' + product.price}</span>
          )}
          {product.discountPercentage > 0 ? (
            <span className='line-through'>
              {'$' + product.price.toFixed(2)}
            </span>
          ) : (
            ''
          )}
        </div>

        <div>
          <Button text='Check out' />
        </div>

        <div className='features lato'>
          <h3>Features</h3>
          <p className='text'>{product.features}</p>
        </div>
        <div className='description lato'>
          <h3>Description</h3>
          <p className='text'>{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Product
