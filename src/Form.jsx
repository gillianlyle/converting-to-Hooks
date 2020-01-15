import React, { Component } from 'react'

class Form extends Component {

    state = { value: '' }

    handleChange = event => { this.setState({ value: event.target.value }) }

    handleSubmit = event => {
        alert('You entered: ' + this.state.value)
        event.preventDefault();
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="search">Search: </label>
                <input
                    type="search"
                    id="search"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button>Search</button>
            </form>
        )
    }
}

export default Form;