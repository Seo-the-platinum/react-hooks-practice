import React from 'react'
import { useQuery } from 'react-query'
import apiChar from '../api/FFChar'

const Characters = () => {
    const { isLoading, isError, data, error } = useQuery('characters', ()=> {
        return apiChar.get()
    })
    if (isLoading) {
        return <h1>loading...</h1>
    }
  return (
    <div>
        <img src={data.data[0].pictures[0].url} style={{maxWidth: '100%'}}/>
    </div>
  )
}

export default Characters