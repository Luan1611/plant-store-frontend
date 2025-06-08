import '../styles/HeroQuiz.css'
import TextContainer from './TextContainer'
import Title from './Title'

interface HeroProps {
  title: string
  subtitle: string
  text: string
  link: string
}

const HeroQuiz = ({ title, subtitle, text}: HeroProps) => {
  return (
    <section className='hero-container'>
      <div className='hero-left'>
        <section className='hero'>
          <div className='flex-row'>
            <span className='bar'></span>
            <p className='subtitle'>{subtitle}</p>
          </div>
          <div className='title'>
            <Title title={title} />
          </div>
          <TextContainer text={text} />
        </section>
      </div>
    </section>
  )
}
export default HeroQuiz
