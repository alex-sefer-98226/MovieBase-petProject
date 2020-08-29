import React from "react";
import {Breadcrumb} from "antd";

export default function (props) {
    const arrayFromPath = props.path.split("/");
    if (arrayFromPath[1].length !== 0) {
        return (
            <Breadcrumb style={{margin: '16px 0'}}>
                {
                    arrayFromPath.map((item) => {
                        if (item === "") {
                            return <Breadcrumb.Item key={item}>Главная</Breadcrumb.Item>;
                        } else {
                            return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>;
                        }
                    })
                }
            </Breadcrumb>
        )
    } else {
        return (
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Главная</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}