import HeroQuiz from '../components/HeroQuiz'
import '../styles/Quiz.css'
import { QuizData, quizSchema } from '../validation/quizSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import rightPlant from '../assets/images/right_plant.png'

const plantCategories = [
    "Medicinal", "Ornamental", "Edible", "Aromatic", "Toxic", "Carnivorous", "Forestry",
    "Tropical", "Desert", "Native", "Exotic", "Climbing",
    "Citrus", "Grain", "Legume", "Oilseed", "Leafy", "Evergreen"
]
  
const plantTypes = [
"Tree", "Shrub", "Herb", "Climber", "Herbaceous", "Groundcover", "Epiphyte",
"Succulent", "Aquatic", "Trailing", "Palm", "Vine", "Conifer", "Moss",
"Fern", "Grass", "Bryophyte", "Angiosperm", "Pteridophyte", "Annual"
]

const Quiz = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<QuizData>({
        resolver: zodResolver(quizSchema),
    })

    function handleQuizInfos(data: QuizData) {
        alert('Submitted!\n' + JSON.stringify(data, null, 2))
    }

    return (
    <div className='quiz'>
        <HeroQuiz
            title='Discover Your **Green** Side'
            subtitle='Love for Nature'
            text='Discover your perfect plant match — take the quiz and let nature choose for you!'
            link='/quiz'
        />

        <div className='form-container'>
            <h1>Quick Quiz Form</h1>
            <form onSubmit={handleSubmit(handleQuizInfos)}>

            <div className='flex-row radio-group'>
                <span>What kind of plant would fit you?</span>
                <div className='flex-row'>
                <input
                    id='plantLabelIndoor'
                    type='radio'
                    value='Indoor'
                    {...register('plantLabel')}
                />
                <label htmlFor='plantLabelIndoor'>Indoor</label>
                <input
                    id='plantLabelOutdoor'
                    type='radio'
                    value='Outdoor'
                    {...register('plantLabel')}
                />
                <label htmlFor='plantLabelOutdoor'>Outdoor</label>
                </div>
                {errors.plantLabel && <p className='error'>{errors.plantLabel.message}</p>}
            </div>

            <div className='flex-row radio-group'>
                <span>Does any of these categories appeal to you?</span>
                <div className='flex-row' style={{ flexWrap: 'wrap' }}>
                {plantCategories.map((cat) => (
                    <div key={cat} style={{ marginRight: 12 }}>
                    <input
                        id={'plantCategory-' + cat}
                        type='radio'
                        value={cat}
                        {...register('plantCategory')}
                    />
                    <label htmlFor={'plantCategory-' + cat}>{cat}</label>
                    </div>
                ))}
                </div>
                {errors.plantCategory && <p className='error'>{errors.plantCategory.message}</p>}
            </div>

            <div className='flex-row radio-group'>
                <span>Does any of these types appeal to you?</span>
                <div className='flex-row' style={{ flexWrap: 'wrap' }}>
                {plantTypes.map((type) => (
                    <div key={type} style={{ marginRight: 12 }}>
                    <input
                        id={'plantType-' + type}
                        type='radio'
                        value={type}
                        {...register('plantType')}
                    />
                    <label htmlFor={'plantType-' + type}>{type}</label>
                    </div>
                ))}
                </div>
                {errors.plantType && <p className='error'>{errors.plantType.message}</p>}
            </div>

            <button className='button' type='submit'>See Results</button>
            </form>
        </div>

        <aside>
            <img
            className='hero-right-plant'
            src={rightPlant}
            alt='A plant on the right side of the page'
            />
        </aside>
    </div>
    )
}

export default Quiz
