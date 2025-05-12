import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Router from './Router'

function App() {
  return (
    <div className='page-container'>
      <header>
        <Navbar />
      </header>
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  )
}

export default App
