// import { UserButton } from '@clerk/clerk-react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  const toogleActive = (isActive: boolean) => (isActive ? 'active-link' : '')

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
        </ul>
      </div>
      <div className='nav-end'>
        {/* <UserButton /> */}
      </div>
    </nav>
  )
}
export default Navbar
