import React from 'react';

import "antd/dist/antd.css";
import styles from "./header.module.css"
import '../index.css'

import { Layout, Input } from 'antd';
import { NavLink } from 'react-router-dom';

export default function () {
    return (
        <Layout.Header className={styles.header}>
            <div className={styles.headerLogo}>
                <NavLink className={styles.logoLink} exact to="/">MOVIE BASE</NavLink>
            </div>
            <nav className={styles.headerNavigation}>
                <ul>
                    <li className={styles.navigationLink}><NavLink activeClassName={styles.navigationLinkActive} exact to="/myPlaylist">Мой плейлист</NavLink></li>
                    <li className={styles.navigationLink}><NavLink activeClassName={styles.navigationLinkActive} exact to="/comedy">Комедии</NavLink></li>
                    <li className={styles.navigationLink}><NavLink activeClassName={styles.navigationLinkActive} exact to="/dramas">Драмы</NavLink></li>
                    <li className={styles.navigationLink}><NavLink activeClassName={styles.navigationLinkActive} exact to="/fantasy">Фэнтези</NavLink></li>
                    <li className={styles.navigationLink}><NavLink activeClassName={styles.navigationLinkActive} exact to="/watch/325">Фильм номер 325</NavLink></li>
                </ul>
            </nav>
            <Input.Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                className={styles.headerSearch}
            />
        </Layout.Header>
    );
}