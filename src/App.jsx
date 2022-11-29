import { createContext, useState } from 'react'
import Characters from './components/Characters'
import Navbar from './components/navbar/Navbar'
import './App.css'
export const GlobalContext = createContext()

function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = ()=> {
    setTheme(curr=> curr === 'dark' ? 'light' : 'dark')
  }
  return (
    <GlobalContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
          <Navbar/>
          <Characters/>
      </div>
    </GlobalContext.Provider>
  )
}

export default App
