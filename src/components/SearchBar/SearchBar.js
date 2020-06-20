import React from 'react'

const SearchBar = props=>(
    <input onChange={props.change} placeholder='Enter the name of a country'></input>
)

export default SearchBar