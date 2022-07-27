import React, { Component } from 'react';
import axios from 'axios';

export default class BookAdd extends Component {
    state = {
        name: '',
        author: '',
        tika: '',
        language: '',
    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        });
    }

    handleAuthorChange = event => {
        this.setState({
            author: event.target.value
        });
    }

    handleTikaChange = event => {
        this.setState({
            tika: event.target.value
        });
    }

    handleLanguageChange = event => {
        this.setState({
            language: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const book = {
            name: this.state.name,
            author: this.state.author,
            tika: this.state.tika,
            language: this.state.language
        }

        axios.post(`http://localhost:1008/books/create`, book)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            onChange={this.handleNameChange} />
                    </label>
                    <br />
                    <label>
                        Author:
                        <input
                            type="text"
                            author="author"
                            onChange={this.handleAuthorChange} />
                    </label>
                    <br />
                    <label>
                        Tika:
                        <input
                            type="text"
                            tika="tika"
                            onChange={this.handleTikaChange} />
                    </label>
                    <br />
                    <label>
                        Language:
                        <input
                            type="text"
                            language="language"
                            onChange={this.handleLanguageChange} />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
            )
    }
}