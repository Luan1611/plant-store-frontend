import AboutUsCard from '../components/AboutUsCard'
import Title from '../components/Title'
import '../styles/AboutUs.css'

const AboutUs = () => {
  return (
    <div className='about-us'>
      <Title title='About Us' />

      <section className='about-us-content'>
        <AboutUsCard
          description=' Nada a declarar'
          github='#'
          linkedin='#'
          name='Luan Marqueti'
        />
        <AboutUsCard
          description='Desenvolvedora Full-sterco'
          github='#'
          linkedin='#'
          name='Luana Giovana Monteiro'
        />
      </section>
    </div>
  )
}
export default AboutUs
