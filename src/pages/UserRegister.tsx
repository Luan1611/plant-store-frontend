import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Register.css'

const UserRegister = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    try {
      // Ajuste a URL para o endpoint correto se necessário
      const resp = await fetch('/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      })
      if (!resp.ok) {
        const result = await resp.json().catch(() => ({}))
        throw new Error(result.message || 'Erro ao criar usuário')
      }
      setSuccess('Usuário criado com sucesso! Faça login para continuar.')
      setTimeout(() => {
        navigate('/login')
      }, 1500)
    } catch (err: any) {
      setError(err.message || 'Erro ao criar usuário')
    }
  }

  return (
    <div className='register-page'>
      <h1>Cadastro de Usuário</h1>
      <form className='register-form' onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Nome'
          required
        />
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
        <button type='submit'>Cadastrar</button>
        {error && <div className="register-error">{error}</div>}
        {success && <div className="register-success">{success}</div>}
      </form>
    </div>
  )
}

export default UserRegister
