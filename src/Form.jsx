import React, { Component } from 'react'

export default class Form extends Component {

    state = { value: '' }

    handleChange = event => {
        this.setState({ value: event.target.value })
    }

    handleSubmit = event => {
        alert('You entered: ' + this.state.value)
        event.preventDefault();
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <label>Search: </label>
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