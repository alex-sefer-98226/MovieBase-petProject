import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';

import 'antd/dist/antd.css';
import './App.css';
import {Layout} from "antd";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";

function App() {
    const location = useLocation();
    return (
        <Layout>
            <Header/>
            <Layout.Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
                <Breadcrumbs path={location.pathname}/>
                <div className="site-layout-background" style={{padding: 24, minHeight: 380}}>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/:category" render={(props) => <><h2>Подборка фильмов по
                            категории: {props.match.params.category}</h2></>}/>
                        <Route exact path="/watch/:film" render={(props) => <><h2>Фильм с
                            id={props.match.params.film}</h2></>}/> {/* Страница с фильмом */}
                        <Route render={() => <><h2>Ошибка</h2></>}/> {/* Пропишу потом страницу с ошибкой */}
                    </Switch>
                </div>
            </Layout.Content>
            <Footer/>
        </Layout>
    );
}

export default App;
// return <FilmsList />

