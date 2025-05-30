import { OrbitProgress } from 'react-loading-indicators'
import Hero from '../components/Hero'
import useFetchPlants from '../hooks/useFetchPlants'
import '../styles/Home.css'

const Quiz = () => {
  const { loading, error } = useFetchPlants()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IFormInput>({
    resolver: zodResolver(plantSchema),
  })

  if (loading)
    return (
      <div className='loading'>
        <OrbitProgress color='#000' size='medium' text='' textColor='' />
      </div>
    )
  if (error) return <div>{error}</div>

  return (
    <div className='quiz'>
      <Hero
        title='Discover Your **Green** Side'
        subtitle='Love for Nature'
        text='Discover your perfect plant match — take the quiz and let nature choose for you!'
        link='/quiz '
      />

    <div className='form-container'>

            <h1>Quick Quiz Form</h1>
            <form onSubmit={handleSubmit(handlePlantRegistration)} method='post'>

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

            <div className='flex-row radio-group'>
                <span>What kind of plant would fit you:</span>
                <div className='flex-row'>
                <input
                    label='Indoor'
                    type='radio'
                    value='Indoor'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Outdoor'
                    type='radio'
                    value='Outdoor'
                    className='radio'
                    {...register('plantLabel')}
                />
                </div>
            </div>

            <div className='flex-row radio-group'>
                <span>Does any of these categories appease you?</span>
                <div className='flex-row'>
                <input
                    label='Medicinal'
                    type='radio'
                    value='Medicinal'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Ornamental'
                    type='radio'
                    value='Ornamental'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Edible'
                    type='radio'
                    value='Edible'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Aromatic'
                    type='radio'
                    value='Aromatic'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Toxic'
                    type='radio'
                    value='Toxic'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Carnivorous'
                    type='radio'
                    value='Carnivorous'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Forestry'
                    type='radio'
                    value='Forestry'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Indoor'
                    type='radio'
                    value='Indoor'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Outdoor'
                    type='radio'
                    value='Outdoor'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Tropical'
                    type='radio'
                    value='Tropical'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Desert'
                    type='radio'
                    value='Desert'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Native'
                    type='radio'
                    value='Native'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Exotic'
                    type='radio'
                    value='Exotic'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Climbing'
                    type='radio'
                    value='Climbing'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Citrus'
                    type='radio'
                    value='Citrus'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Grain'
                    type='radio'
                    value='Grain'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Legume'
                    type='radio'
                    value='Legume'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Oilseed'
                    type='radio'
                    value='Oilseed'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Leafy'
                    type='radio'
                    value='Leafy'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Evergreen'
                    type='radio'
                    value='Evergreen'
                    className='radio'
                    {...register('plantLabel')}
                />

                </div>
            </div>

            <div className='flex-row radio-group'>
                <span>Does any of these types appease you?</span>
                <div className='flex-row'>
                <input
                    label='Tree'
                    type='radio'
                    value='Tree'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Shrub'
                    type='radio'
                    value='Shrub'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Herb'
                    type='radio'
                    value='Herb'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Climber'
                    type='radio'
                    value='Climber'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Herbaceous'
                    type='radio'
                    value='Herbaceous'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Groundcover'
                    type='radio'
                    value='Groundcover'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Epiphyte'
                    type='radio'
                    value='Epiphyte'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Succulent'
                    type='radio'
                    value='Succulent'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Aquatic'
                    type='radio'
                    value='Aquatic'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Trailing'
                    type='radio'
                    value='Trailing'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Palm'
                    type='radio'
                    value='Palm'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Vine'
                    type='radio'
                    value='Vine'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Conifer'
                    type='radio'
                    value='Conifer'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Moss'
                    type='radio'
                    value='Moss'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Fern'
                    type='radio'
                    value='Fern'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Grass'
                    type='radio'
                    value='Grass'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Bryophyte'
                    type='radio'
                    value='Bryophyte'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Angiosperm'
                    type='radio'
                    value='Angiosperm'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Pteridophyte'
                    type='radio'
                    value='Pteridophyte'
                    className='radio'
                    {...register('plantLabel')}
                />
                <input
                    label='Annual'
                    type='radio'
                    value='Annual'
                    className='radio'
                    {...register('plantLabel')}
                />

            </div>
        </div>

        <Button text='See Results' type='submit' />
        </form>
    </div>
</div>
    )
}

export default Quiz
