import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import rightPlant from '../assets/images/right_plant.png'
import Button from '../components/Button'
import Input from '../components/Input'
import TextArea from '../components/TextArea'
import { Plant, PlantType } from '../models/Plant'
import {
  createPlant,
  fetchPlantTypes,
} from '../services/plantService'
import '../styles/Register.css'
import { IFormInput, plantSchema } from '../validation/plantSchema'

const Register = () => {
  const [plantTypes, setPlantTypes] = useState<PlantType[]>([])
  const [selectedPlantTypes, setSelectedPlantTypes] = useState<number[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IFormInput>({
    resolver: zodResolver(plantSchema),
  })

  useEffect(() => {
    const loadPlantTypes = async () => {
      try {
        const types = await fetchPlantTypes()
        setPlantTypes(types)
      } catch (error) {
        console.error('Failed to fetch plant types:', error)
      }
    }
    loadPlantTypes()
  }, [])

  const handlePlantTypeChange = (plantTypeId: number) => {
    setSelectedPlantTypes(prev => {
      const newSelection = prev.includes(plantTypeId)
        ? prev.filter(id => id !== plantTypeId)
        : [...prev, plantTypeId]
      setValue('plantTypes', newSelection)
      return newSelection
    })
  }

  const handlePlantRegistration = async (data: IFormInput) => {
    try {
      const payload: Plant = {
        name: data.plantName,
        subtitle: data.plantSubtitle,
        plantTypeId: [...data.plantTypes],
        price: data.plantPrice,
        isInSale: true,
        discountPercentage: data.plantDiscountPercentage,
        features: data.plantFeatures,
        description: data.plantDescription,
        imgurl: data.plantImgurl,
        plantCategoryId: 1
      }

      await createPlant(payload)
      window.location.href = '/'
    } catch (error) {
      console.error('Failed to register plant:', error)
    }
  }

  return (
    <div className='register'>
      <div className='form-container'>
        <h1>Plant registration</h1>
        <form onSubmit={handleSubmit(handlePlantRegistration)} method='post'>
          <Input
            label='Plant name'
            placeholder='Echinocereus Cactus'
            {...register('plantName')}
          />
          {errors.plantName?.message && (
            <p className='error'>{errors.plantName?.message}</p>
          )}

          <Input
            label='Plant subtitle'
            placeholder='A majestic addition to your plant collection'
            {...register('plantSubtitle')}
          />
          {errors.plantSubtitle?.message && (
            <p className='error'>{errors.plantSubtitle?.message}</p>
          )}

          <Input
            label='Image URL'
            type='text'
            placeholder='https://example.com/image.jpg'
            {...register('plantImgurl')}
          />
          {errors.plantImgurl?.message && (
            <p className='error'>{errors.plantImgurl?.message}</p>
          )}

          <div className='plant-types-container'>
            <label>Plant Types</label>
            <div className='plant-types-grid'>
              {plantTypes.map((type) => (
                <div key={type.id} className='plant-type-checkbox'>
                  <input
                    type='checkbox'
                    id={`plant-type-${type.id}`}
                    checked={selectedPlantTypes.includes(type.id)}
                    onChange={() => handlePlantTypeChange(type.id)}
                  />
                  <label htmlFor={`plant-type-${type.id}`}>{type.name}</label>
                </div>
              ))}
            </div>
            {errors.plantTypes?.message && (
              <p className='error'>{errors.plantTypes?.message}</p>
            )}
          </div>

          <div className='flex-row'>
            <Input
              label='Price'
              type='number'
              step={0.01}
              min={0}
              placeholder='$139.99'
              {...register('plantPrice', { valueAsNumber: true })}
            />
            {errors.plantPrice?.message && (
              <p className='error'>{errors.plantPrice?.message}</p>
            )}

            <Input
              label='Discount percentage'
              type='number'
              step={1}
              min={0}
              max={100}
              placeholder='20%'
              {...register('plantDiscountPercentage', { valueAsNumber: true })}
            />
            {errors.plantDiscountPercentage?.message && (
              <p className='error'>{errors.plantDiscountPercentage?.message}</p>
            )}
          </div>

          <div className='flex-row radio-group'>
            <span>Label</span>
            <div className='flex-row'>
              <Input
                label='Indoor'
                type='radio'
                value='Indoor'
                className='radio'
                {...register('plantLabel')}
              />
              <Input
                label='Outdoor'
                type='radio'
                value='Outdoor'
                className='radio'
                {...register('plantLabel')}
              />
            </div>
          </div>

          <TextArea
            label='Features'
            placeholder='Species: Echinocereus...'
            {...register('plantFeatures')}
          />
          {errors.plantFeatures?.message && (
            <p className='error'>{errors.plantFeatures?.message}</p>
          )}

          <TextArea
            label='Description'
            placeholder='Ladyfinger cactus...'
            {...register('plantDescription')}
          />
          {errors.plantDescription?.message && (
            <p className='error'>{errors.plantDescription?.message}</p>
          )}

          <Button text='Register' type='submit' />
        </form>
      </div>
      <img
        className='hero-right-plant'
        src={rightPlant}
        alt='A plant on the right side of the page'
        id='right-plant'
      />
    </div>
  )
}
export default Register
