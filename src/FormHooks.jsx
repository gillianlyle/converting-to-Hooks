import React, { useState } from 'react'

const FormHooks = () => {

    const [value, setValue] = useState('');

    const handleChange = event => { setValue(event.target.value) }

    const handleSubmit = event => {
        alert('You entered: ' + value)
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search1">Search: </label>
            <input
                type="search"
                id="search1"
                value={value}
                onChange={handleChange}
            />
            <button>Search</button>
        </form>
    )
}

export default FormHooks;