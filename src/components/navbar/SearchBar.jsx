import React, { useContext, useState} from 'react'
import { GlobalContext } from '../../App'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
    const { theme } = useContext(GlobalContext)
    const [query, setQuery ] = useState('')
    
    const handleQuery = (e)=> {
      e.preventDefault()
        console.log(e.target.firstChild.value)
    }
  return (
    <form className='searchBarContainer' onSubmit={handleQuery}>
        <input className='searchBar' id={theme} type='text'/>
        <button className="searchBarButton" type='submit'>
          <FaSearch size='1.5em' color='black'/>
        </button>
    </form>
  )
}

export default SearchBar