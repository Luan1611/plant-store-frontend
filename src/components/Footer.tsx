import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='content'>
        <div className='main-content'>
          <div className='flex-col'>
            <h1>Stay Fresh</h1>
            <span>plantstore@gmail.com</span>
            <span>+55 (41) 99999-9999</span>
          </div>

          <div className='links'>
            <div className='flex-col'>
              <h3>Links</h3>
              <Link to="/about-us">About Us</Link>
              <Link to="/products">Products</Link>
              <Link to="/quiz">Quiz</Link>
            </div>
            <div className='flex-col'>
              <h3>Community</h3>
              <Link to="/about-us">About Us</Link>
              <Link to="/products">Products</Link>
              <Link to="/quiz">Quiz</Link>
            </div>
          </div>
        </div>

        <div className='rights'>
          <div>
            <h2>Plant Store</h2>
          </div>
          <div>Plant Store®. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
