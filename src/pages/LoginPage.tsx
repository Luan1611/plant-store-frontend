import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import '../styles/LoginPage.css'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      const resp = await fetch('/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      if (!resp.ok) throw new Error('Login inválido')
      const { user, access_token } = await resp.json()
      login(user, access_token)
      navigate('/my-products')
    } catch (err: any) {
      setError('Login inválido')
    }
  }

  return (
    <div className='login-page'>
      <h1>Página de Login</h1>
      <form className='login-form' onSubmit={handleSubmit}>
        <input
          type='text'
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='E-mail'
          required
        />
        <input
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Senha'
          required
        />
        <button type='submit'>Entrar</button>
        {error && <div className="login-error">{error}</div>}
      </form>
    </div>
  )
}

export default LoginPage
