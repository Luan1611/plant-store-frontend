import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Product from './pages/Product'
import Products from './pages/Products'
import Register from './pages/Register'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:id' element={<Product />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}
export default Router
