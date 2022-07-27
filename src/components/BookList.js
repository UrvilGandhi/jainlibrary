import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import "antd/dist/antd.min.css";

export default class BookList extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: []
        }
    }
 

    componentDidMount() {

        axios.get(`http://localhost:1008/books/list`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    dataSource: res.data
                });
            })
    }

    render() {

        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Author',
                dataIndex: 'author',
                key: 'author',
            },
            {
                title: 'Tika',
                dataIndex: 'tika',
                key: 'tika',
            },
            {
                title: 'Language',
                dataIndex: 'language',
                key: 'language',
            },
        ];

        return (
            <div className="table">
                <Table dataSource={this.state.dataSource} columns={columns}/>;
            </div>
        )
    }
}