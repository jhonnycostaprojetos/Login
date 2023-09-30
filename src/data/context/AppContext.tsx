'use client';
import { createContext, useState } from "react";

type Tema = 'dark' | ''

interface AppContextProps {
  theme?: Tema,
  changeTheme?: () => void
}
const AppContext = createContext<AppContextProps>({})

export function AppProvider(props) {
  const [theme, setTheme] = useState<Tema>('dark')
  function changeTheme() {
    setTheme(theme === '' ? 'dark' : '')
  }
  return (
    <AppContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </AppContext.Provider>
  )
}
export default AppContext