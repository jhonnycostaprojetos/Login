"use client"
import Logo from '@/components/Default/Logo'
import Title from '@/components/Default/Title'
import { IconLock, IconUser } from '@/components/Icons'
import LoginInput from '@/components/login/LoginInput'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  async function getData() {
    const data = await fetch(`http://localhost:5159/api/Authenticate?user=${user}&password=${password}`, { mode: 'cors' })
    console.log('data' + data)
    return data.json()
  }
  function login() {
    getData()
    router.push('/painelAdm')
  }

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='m-10 w-full md:w-1/2 lg:w-1/3'>
        <Logo />
        <Title title='Login de Acesso' />
        <div className='flex relative flex-col mt-4'>
          <LoginInput
            type='text'
            label='Usuário'
            value={user}
            required
            icon={IconUser}
            valueChange={setUser}
          />
          <LoginInput
            type='password'
            label='Senha'
            value={password}
            required
            icon={IconLock}
            valueChange={setPassword}
          />
          <button onClick={() => login()} className='w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6'>Acessar</button>
        </div>
      </div>
    </div>
  )
}
