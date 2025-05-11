import { SignIn } from '@clerk/clerk-react'
import '../styles/LoginPage.css'

const LoginPage = () => {
  return (
    <div className='login-page'>
      <SignIn />
    </div>
  )
}
export default LoginPage
