import React from "react";
import {Carousel} from 'antd';
import {LeftCircleFilled, RightCircleFilled} from '@ant-design/icons';

const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '400px',
    textAlign: 'center',
    background: '#364d79',
    margin: '10px 10px'
};

export default function () {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        centerPadding: "40px",
        swipeToSlide: true,
        centerMode: true,
        slidesToShow:1,
        speed: 500,
        nextArrow: <RightArrow/>,
        prevArrow: <LeftArrow/>
    };
    return (
        <Carousel  {...settings} >
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
            <div>
                <h3 style={contentStyle}>5</h3>
            </div>

        </Carousel>
    );
}

export function RightArrow(props) {
    const {className, style, onClick} = props;
    return (
        <RightCircleFilled
            className={className} onClick={onClick}
            style={{...style, color: "rgb(54, 77, 121)" ,fontSize: '24px', marginRight: '0.15em'}}/>
    );
}

export function LeftArrow(props) {
    const {className, style, onClick} = props;
    return (
        <LeftCircleFilled
            className={className} onClick={onClick}
            style={{...style, color: "rgb(54, 77, 121)", fontSize: '24px'}}/>
    );
}
