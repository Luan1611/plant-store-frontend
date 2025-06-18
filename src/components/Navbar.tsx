import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import '../styles/Navbar.css'

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  const toogleActive = (isActive: boolean) => (isActive ? 'active-link' : '')

  const handleLoginClick = () => {
    if (isAuthenticated) {
      logout()
      navigate('/home')
    } else {
      navigate('/login')
    }
  }

  return (
    <nav className='nav'>
      <div className='nav-start'>
        <NavLink to={'/home'}>
          <h1>Plant Store</h1>
        </NavLink>
      </div>
      <div className='nav-center'>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => toogleActive(isActive)}
              to={'/home'}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => toogleActive(isActive)}
              to={'/register'}>
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => toogleActive(isActive)}
              to={'/products'}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => toogleActive(isActive)}
              to={'/quiz'}>
              Quiz
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => toogleActive(isActive)}
              to={'/about-us'}>
              About Us
            </NavLink>
          </li>
          {isAuthenticated && (
            <li>
              <NavLink
                className={({ isActive }) => toogleActive(isActive)}
                to={'/my-products'}>
                Meus Produtos
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className='nav-end'>
        <button className='login-btn' onClick={handleLoginClick} type="button">
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
        {/* <UserButton /> */}
      </div>
    </nav>
  )
}

export default Navbar
