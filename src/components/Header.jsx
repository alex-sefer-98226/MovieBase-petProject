
import React from "react";
import {Layout, Menu} from 'antd';
import { NavLink } from 'react-router-dom';

export default function () {
    return (
        <Layout.Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
            <div className="logo" style={{float: 'left', marginRight:'50px'}}>
                <NavLink exact to="/" style={{color:'white'}}>LOGO</NavLink>
            </div>
            <Menu theme="dark" mode="horizontal" >
                <Menu.Item key="1"><NavLink exact to="/">Главная</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink exact to="/dramas">Драмы</NavLink></Menu.Item>
                <Menu.Item key="3"><NavLink exact to="/comedy">Комедии</NavLink></Menu.Item>
                <Menu.Item key="4"><NavLink exact to="/year/2019">2019 год</NavLink></Menu.Item>
                <Menu.Item key="5"><NavLink exact to="/watch/325">Фильм #325</NavLink></Menu.Item>
            </Menu>
        </Layout.Header>
    );
}