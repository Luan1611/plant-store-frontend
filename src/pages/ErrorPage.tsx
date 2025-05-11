import { Link } from 'react-router-dom'
import groot from '../assets/images/sad_groot.png'
import Button from '../components/Button'
import '../styles/ErrorPage.css'

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <div className='center'>
        <h1>404</h1>
        <h2>Page not found</h2>

        <Link to='/'>
          <Button text='Back to home' />
        </Link>
      </div>

      <img
        className='error-groot'
        src={groot}
        alt='Groot from Guardians of the Galaxy'
      />
    </div>
  )
}
export default ErrorPage
