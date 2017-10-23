import preload from '../data.json'
import ShowCard from './show_card'
import React from 'react'

const Search = () => (
  <div className='search'>
    {preload.shows.map(show => 
      <ShowCard key={show.imdbID} {...show} />
    )}
  </div>
)

export default Search
