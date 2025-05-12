import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      {/* <div id='footer-backgound'>
        <img src={footerBackground} alt='' />
      </div> */}
      <div className='content'>
        <div className='main-content'>
          <div className='flex-col'>
            <h1>Stay Fresh</h1>
            <span>lojadogroot@gmail.com</span>
            <span>+55 (41) 99999-9999</span>
          </div>
          <div className='links'>
            <div className='flex-col'>
              <h3>Links</h3>
              <span>About Us</span>
              <span>Products</span>
              <span>Blogs</span>
            </div>
            <div className='flex-col'>
              <h3>Community</h3>
              <span>About Us</span>
              <span>Products</span>
              <span>Blogs</span>
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
