import { Menu,Icon } from 'antd';
import React, { Component } from 'react';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class LeftMenu extends Component {
    render() {
        return (
            <Menu mode="horizontal">
                <Menu.Item key="mail">
                    <a href="">Home</a>
                </Menu.Item>
                <SubMenu title={<span>Add Book</span>}>
                    <MenuItemGroup title="">
                        <Menu.Item key="setting:1">Add Book</Menu.Item>
                        <Menu.Item key="setting:2">Edit Book</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="">
                        <Menu.Item key="setting:3">Delete Book</Menu.Item>
                        <Menu.Item key="setting:4">Book List</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="">Contact Us</a>
                </Menu.Item>
            </Menu>
        );
    }
}