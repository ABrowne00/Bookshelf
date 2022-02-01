import { useState, useEffect } from 'react';
import React from 'react';

const Search = (props) => {

    const [input, setInput] = useState('')

const handleChange = (event)  => {
    setInput(event.target.value)
}

const handleSubmit = (event) => {
    event.preventDefault()
    props.setSearchTerm(input)
    

}

    return (

        <form onSubmit={handleSubmit}>
            <label >
                <input type="text" placeholder="search..."  onChange={handleChange}/>
            
            </label>
                <button>Search!</button>
        </form>
    )
}

export default Search