import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';

import Header from './components/Header'
import MainPage from './components/MainPage';
import Footer from './components/Footer';


import "antd/dist/antd.css";
import "./index.css";


import {Breadcrumb, Layout} from 'antd';


function makeBreadsFromPath(path) {
    const arrayFromPath = path.split("/");
    if (arrayFromPath[1].length !== 0) {
        return arrayFromPath.map((item) => {
            if (item === "") {
                return <Breadcrumb.Item key={item}>Главная</Breadcrumb.Item>;
            } else {
                return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>;
            }
        })
    } else {
        return null
    }
}

function App() {
    let location = useLocation();
    const pathArray = makeBreadsFromPath(location.pathname);
    return (

        <Layout>
            <Header/>
            <Layout>
                <Layout.Content className="site-layout" style={{padding: '0 50px 50px', marginTop: 64}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        {pathArray}
                    </Breadcrumb>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 500}}>
                        <Switch>
                            {/*<Route exact path="/" component={MainPage}/>*/}
                            <Route exact path="/:category" render={(props) => <><h2>Подборка фильмов по
                                категории: {props.match.params.category}</h2></>}/>
                            <Route exact path="/watch/:film" render={(props) => <><h2>Фильм с
                                id={props.match.params.film}</h2></>}/> {/* Страница с фильмом */}
                            <Route render={() => <><h2>Ошибка</h2></>}/> {/* Пропишу потом страницу с ошибкой */}
                        </Switch>
                    </div>
                </Layout.Content>
            </Layout>
            <Footer/>
        </Layout>);
}

export default App;
