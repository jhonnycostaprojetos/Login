"use client"
import { loginPost } from '@/api/api'
import Logo from '@/components/Default/Logo'
import Title from '@/components/Default/Title'
import { IconLock, IconUser, IconeAtencao } from '@/components/Icons'
import LoginInput from '@/components/login/LoginInput'
import { useRouter } from 'next/navigation'
import { NextResponse } from 'next/server'
import { useEffect, useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  async function postLogin() {
    setLoading(true);
    try {
      const { url, options } = loginPost(user, password)
      const res = await fetch(url, options);
      const data = await res.json();
      window.localStorage.setItem('user', data.result.user)
      return data;
    } catch (error) {
      console.error('Erro ao fazer o fetch:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function login() {
    if (user.length === 0 || password.length === 0) {
      return displayError('Usuário ou senha não podem ser vazios!');
    }

    try {
      const data = await postLogin();
      if (data.status) {
        router.push('/painelAdm');
      } else {
        displayError('Usuário ou senha inválidos! Por favor, verifique.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      displayError('Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.');
    }
  }

  function displayError(msg: any, tempoEmSegundos = 5) {
    setError(msg)
    setTimeout(() => setError(null), tempoEmSegundos * 1000)
  }

  return (

    <div className='flex h-screen items-center justify-center'>
      <div className='m-10 w-full md:w-1/2 lg:w-1/3'>
        <Logo />
        <Title title='Integração HUB' />
        <div className='flex relative flex-col mt-4'>
          <form action="">
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
          </form>

          {error ? (
            <div className={`flex items-center bg-red-400 text-white py-3 px-5 my-2 border-red-700 rounded-lg`}>
              {IconeAtencao()}
              <span className={`ml-3`}>{error}</span>
            </div>
          ) : false}
          <button onClick={() => login()} className='w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6'>Acessar</button>
        </div>
      </div>
    </div>
  )
}
