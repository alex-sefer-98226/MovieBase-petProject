import React from 'react';
import styles from "./footer.module.css"
import { Layout } from 'antd';

export default function FooterWrapper() {
    return ( 
        <Layout.Footer className={styles.footer}>
            <div className={styles.wrapper}>
                <section className={styles.footer__links}>
                    <div className={styles.links__container}>
                        <span className={styles.links__header}>Разделы</span>
                        <ul>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                        </ul>
                    </div>
                    <div className={styles.links__container}>
                        <span className={styles.links__header}>Устройства</span>
                        <ul>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                        </ul>
                    </div>
                    <div className={styles.links__container}>
                        <span className={styles.links__header}>О нас</span>
                        <ul>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                        </ul>
                    </div>
                    <div className={styles.links__container}>
                        <span className={styles.links__header}>Поддержка</span>
                        <ul>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                            <li><a href="#" className={styles.footer__link}>Ссылка в никуда</a></li>
                        </ul>
                    </div>
                </section>
            </div>
            <section className={styles.footer__credits}>
                <span className={styles.footer__creditsSocials}>Тут будут соцсети</span>
                <time className={styles.footer__creditsDate}>2020
                </time>
            </section>
        </Layout.Footer>
    )
}