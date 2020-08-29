import React from "react";
import {Card, Carousel, Rate} from "antd";
import {NavLink} from "react-router-dom";
import moduleStyles from './MakeCardsFromFields.module.css';
import {LeftArrow, RightArrow} from "./AdvertisingCarousel";
const carouselSettings = {
    dots:false,
    infinite: false ,
    slidesToShow: 7,
    slidesToScroll: 7,
    speed: 900,
    arrows: true,
    nextArrow: <RightArrow/>,
    prevArrow: <LeftArrow/>
};
const makeCardsFromFilms = (props) => {
    return (
        <>
            <h2 className={moduleStyles.carouselHeader}>{props.title}</h2>
            <Carousel {...carouselSettings} style={{marginBottom:'40px'}}>
            {props.films.map(item => {
                return (<div style={styles} key={item.poster_path}>
                    <Card size="small" className={moduleStyles.filmCard}
                          cover={<img alt="" src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}/>}>
                        <Rate className={moduleStyles.stars} disabled allowHalf defaultValue={item.vote_average/2}/>
                        <h3>{item.title===undefined?item.name:item.title}</h3>
                        <NavLink to={`/watch/${item.id}`} className={moduleStyles.link}>
                        </NavLink>
                    </Card>
                </div>)
            })}
                <div style={styles}>
                    <Card size="small" className={moduleStyles.filmCard}
                    cover={<h3 className={moduleStyles.showAll}>Watch more<br/>from<br/>{props.title} </h3>}>

                        <NavLink to={`/${props.linkKey}`} className={moduleStyles.link}>
                        </NavLink>
                    </Card>
                </div>
            </Carousel>
        </>
    );
}

export default makeCardsFromFilms;


const styles = {
    position: "relative"
}


