import React, { Component } from 'react';
import axios from 'axios';

export default class BookHome extends Component {
    state = {
        title:''
    }

    componentDidMount() {
        axios.get(`http://localhost:1008/books/home`)
            .then(res => {
                const message = res.data;
                this.setState({ message });
            })
    }

    render() {
        return (
            <div>
                <h2> {this.state.message} </h2>
            </div>
            )
    }
}