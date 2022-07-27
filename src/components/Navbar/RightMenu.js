import { Menu } from "antd";
import React, { Component } from "react";

export default class RightMenu extends Component {
    render() {
        return (
            <Menu mode="horizontal">
                <Menu.Item key="mail">
                    <a href="">Sign In</a>
                </Menu.Item>
                <Menu.Item key="app">
                    <a href="">Sign Up</a>
                </Menu.Item>
            </Menu>
        );
    }
}