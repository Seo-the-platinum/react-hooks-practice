import React, { useContext } from 'react'
import Switch from 'react-switch'
import { GlobalContext } from '../../App'
import SearchBar from './SearchBar'
import './css/Navbar.css'

const Navbar = () => {
    const { theme, toggleTheme } = useContext(GlobalContext)
  return (
    <div className='headerContainer'>
        <div className="switchContainer">
            <Switch
                checked={theme === 'dark'}
                checkedIcon={false}
                offColor='#1e1f1e'
                onColor='#cee2d2'
                onChange={toggleTheme}
                uncheckedIcon={false}
            />
        </div>
        <SearchBar/>
    </div>
  )
}

export default Navbar